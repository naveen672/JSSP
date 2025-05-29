import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsItemSchema, insertUserSchema } from "@shared/schema";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";

export async function registerRoutes(app: Express): Promise<Server> {
  // Session configuration
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "your-secret-key",
      resave: false,
      saveUninitialized: false,
      cookie: { 
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
      },
    })
  );

  // Passport configuration
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(
      { usernameField: "email" },
      async (email, password, done) => {
        try {
          const user = await storage.getUserByEmail(email);
          if (!user) {
            return done(null, false, { message: "Incorrect email." });
          }

          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            return done(null, false, { message: "Incorrect password." });
          }

          return done(null, user);
        } catch (error) {
          return done(error);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Middleware to check authentication
  const requireAuth = (req: any, res: any, next: any) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).json({ message: "Authentication required" });
  };

  // Public routes

  // Get published news
  app.get("/api/news", async (req, res) => {
    try {
      await storage.incrementVisitorCount();
      const news = await storage.getPublishedNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get departments
  app.get("/api/departments", async (req, res) => {
    try {
      const departments = await storage.getActiveDepartments();
      res.json(departments);
    } catch (error) {
      console.error("Error fetching departments:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get faculty
  app.get("/api/faculty", async (req, res) => {
    try {
      const faculty = await storage.getActiveFaculty();
      res.json(faculty);
    } catch (error) {
      console.error("Error fetching faculty:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get visitor statistics
  app.get("/api/stats", async (req, res) => {
    try {
      const stats = await storage.getVisitorStats();
      res.json({
        students: "15,000+",
        faculty: "800+",
        departments: "25",
        years: "59",
        visitors: stats.total
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Get visitor statistics for footer
  app.get("/api/visitor-stats", async (req, res) => {
    try {
      const stats = await storage.getVisitorStats();
      res.json(stats);
    } catch (error) {
      console.error("Error fetching visitor stats:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Increment visitor count
  app.post("/api/visitor-count", async (req, res) => {
    try {
      await storage.incrementVisitorCount();
      res.json({ message: "Visitor count incremented" });
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Submit contact form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      
      // TODO: Send email notification here using Nodemailer
      
      res.status(201).json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Authentication routes

  // Login
  app.post("/api/auth/login", (req, res, next) => {
    passport.authenticate("local", (err: any, user: any, info: any) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      if (!user) {
        return res.status(401).json({ message: info?.message || "Authentication failed" });
      }
      req.logIn(user, (err) => {
        if (err) {
          return res.status(500).json({ message: "Login failed" });
        }
        return res.json({ message: "Login successful", user: { id: user.id, username: user.username, email: user.email, role: user.role } });
      });
    })(req, res, next);
  });

  // Logout
  app.post("/api/auth/logout", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Logout failed" });
      }
      res.json({ message: "Logout successful" });
    });
  });

  // Get current user
  app.get("/api/auth/user", (req, res) => {
    if (req.isAuthenticated()) {
      const user = req.user as any;
      res.json({ id: user.id, username: user.username, email: user.email, role: user.role });
    } else {
      res.status(401).json({ message: "Not authenticated" });
    }
  });

  // Register (protected - only admins can create users)
  app.post("/api/auth/register", requireAuth, async (req, res) => {
    try {
      const currentUser = req.user as any;
      if (currentUser.role !== "admin") {
        return res.status(403).json({ message: "Insufficient permissions" });
      }

      const validatedData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.password, 12);
      
      const user = await storage.createUser({
        ...validatedData,
        password: hashedPassword,
      });

      res.status(201).json({ message: "User created successfully", id: user.id });
    } catch (error) {
      console.error("Error creating user:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid user data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Protected admin routes

  // News management
  app.get("/api/admin/news", requireAuth, async (req, res) => {
    try {
      const news = await storage.getAllNews();
      res.json(news);
    } catch (error) {
      console.error("Error fetching all news:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/news", requireAuth, async (req, res) => {
    try {
      const currentUser = req.user as any;
      const validatedData = insertNewsItemSchema.parse({
        ...req.body,
        authorId: currentUser.id,
      });
      
      const newsItem = await storage.createNewsItem(validatedData);
      res.status(201).json(newsItem);
    } catch (error) {
      console.error("Error creating news item:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid news data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/news/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      
      const updatedNews = await storage.updateNewsItem(id, updates);
      if (!updatedNews) {
        return res.status(404).json({ message: "News item not found" });
      }
      
      res.json(updatedNews);
    } catch (error) {
      console.error("Error updating news item:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.delete("/api/admin/news/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await storage.deleteNewsItem(id);
      
      if (!deleted) {
        return res.status(404).json({ message: "News item not found" });
      }
      
      res.json({ message: "News item deleted successfully" });
    } catch (error) {
      console.error("Error deleting news item:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Contact submissions management
  app.get("/api/admin/contacts", requireAuth, async (req, res) => {
    try {
      const contacts = await storage.getAllContactSubmissions();
      res.json(contacts);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.patch("/api/admin/contacts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      const updated = await storage.updateContactSubmissionStatus(id, status);
      if (!updated) {
        return res.status(404).json({ message: "Contact submission not found" });
      }
      
      res.json(updated);
    } catch (error) {
      console.error("Error updating contact submission:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
