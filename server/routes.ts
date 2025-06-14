import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertNewsItemSchema, insertUserSchema, insertHeroSectionSchema, insertPageContentSchema } from "@shared/schema";
import { z } from "zod";
import bcrypt from "bcrypt";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import session from "express-session";
import multer from "multer";
import path from "path";
import express from "express";
import { sendContactConfirmationEmail, testEmailConnection } from "./email";

// Authentication middleware
function requireAuth(req: any, res: any, next: any) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentication required" });
}

// Configure multer for file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
  }),
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|pdf/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only images (JPG, PNG) and PDF files are allowed'));
    }
  },
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve uploaded files statically
  app.use('/uploads', express.static('uploads'));
  
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
      
      // Send email notification
      try {
        const emailSent = await sendContactConfirmationEmail({
          name: `${validatedData.firstName} ${validatedData.lastName}`,
          email: validatedData.email,
          phone: undefined, // Contact form doesn't have phone field
          subject: validatedData.subject,
          message: validatedData.message
        });
        
        if (emailSent) {
          console.log("Contact confirmation email sent successfully");
        } else {
          console.warn("Failed to send contact confirmation email");
        }
      } catch (emailError) {
        console.error("Error sending contact email:", emailError);
        // Don't fail the form submission if email fails
      }
      
      res.status(201).json({ message: "Contact form submitted successfully", id: submission.id });
    } catch (error: any) {
      console.error("Error submitting contact form:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  // Test email configuration
  app.get("/api/test-email", async (req, res) => {
    try {
      const isConnected = await testEmailConnection();
      res.json({ 
        success: isConnected, 
        message: isConnected ? "Email connection successful" : "Email connection failed" 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Email test failed", 
        error: error.message 
      });
    }
  });

  // Admin routes
  app.get("/api/admin/news", requireAuth, async (req, res) => {
    try {
      const news = await storage.getAllNews();
      res.json(news);
    } catch (error: any) {
      console.error("Error fetching admin news:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/news", requireAuth, upload.fields([
    { name: 'imageFile', maxCount: 1 },
    { name: 'attachmentFile', maxCount: 1 }
  ]), async (req, res) => {
    try {
      const files = req.files as { [fieldname: string]: Express.Multer.File[] } || {};
      const newsData = { ...req.body };
      
      // Handle uploaded image
      if (files.imageFile && files.imageFile[0]) {
        newsData.imageUrl = `/uploads/${files.imageFile[0].filename}`;
      }
      
      // Handle uploaded attachment
      if (files.attachmentFile && files.attachmentFile[0]) {
        newsData.attachmentUrl = `/uploads/${files.attachmentFile[0].filename}`;
        newsData.attachmentName = files.attachmentFile[0].originalname;
      }
      
      // Convert string fields from form data to proper types
      const processedData = {
        title: String(newsData.title || ''),
        content: String(newsData.content || ''),
        category: String(newsData.category || ''),
        excerpt: newsData.excerpt ? String(newsData.excerpt) : null,
        link: newsData.link ? String(newsData.link) : null,
        imageUrl: newsData.imageUrl || '',
        attachmentUrl: newsData.attachmentUrl || null,
        attachmentName: newsData.attachmentName || null,
        published: typeof newsData.published === 'string' ? newsData.published === 'true' : Boolean(newsData.published),
        publishedAt: null,
        authorId: null
      };
      
      const validatedData = insertNewsItemSchema.parse(processedData);
      const newsItem = await storage.createNewsItem(validatedData);
      res.status(201).json(newsItem);
    } catch (error: any) {
      console.error("Error creating news:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/news/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const newsItem = await storage.updateNewsItem(id, updates);
      if (!newsItem) {
        return res.status(404).json({ message: "News item not found" });
      }
      res.json(newsItem);
    } catch (error: any) {
      console.error("Error updating news:", error);
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
    } catch (error: any) {
      console.error("Error deleting news:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/contacts", requireAuth, async (req, res) => {
    try {
      const contacts = await storage.getAllContactSubmissions();
      res.json(contacts);
    } catch (error: any) {
      console.error("Error fetching contacts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.patch("/api/admin/contacts/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      const contact = await storage.updateContactSubmissionStatus(id, status);
      if (!contact) {
        return res.status(404).json({ message: "Contact submission not found" });
      }
      res.json(contact);
    } catch (error: any) {
      console.error("Error updating contact status:", error);
      res.status(500).json({ message: "Internal server error" });
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

  // Hero Section routes
  app.get("/api/hero", async (req, res) => {
    try {
      const hero = await storage.getActiveHeroSection();
      res.json(hero);
    } catch (error: any) {
      console.error("Error fetching hero section:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/hero", requireAuth, async (req, res) => {
    try {
      const validatedData = insertHeroSectionSchema.parse(req.body);
      const hero = await storage.createHeroSection(validatedData);
      res.status(201).json(hero);
    } catch (error: any) {
      console.error("Error creating hero section:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/hero/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updates = req.body;
      const hero = await storage.updateHeroSection(id, updates);
      if (!hero) {
        return res.status(404).json({ message: "Hero section not found" });
      }
      res.json(hero);
    } catch (error: any) {
      console.error("Error updating hero section:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  // Page Content routes
  app.get("/api/page/:pageName", async (req, res) => {
    try {
      const pageName = req.params.pageName;
      const page = await storage.getPageContent(pageName);
      res.json(page);
    } catch (error: any) {
      console.error("Error fetching page content:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.get("/api/admin/pages", requireAuth, async (req, res) => {
    try {
      const pages = await storage.getAllPageContent();
      res.json(pages);
    } catch (error: any) {
      console.error("Error fetching all pages:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });

  app.post("/api/admin/page", requireAuth, async (req, res) => {
    try {
      const validatedData = insertPageContentSchema.parse(req.body);
      const page = await storage.createPageContent(validatedData);
      res.status(201).json(page);
    } catch (error: any) {
      console.error("Error creating page content:", error);
      if (error.name === "ZodError") {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Internal server error" });
      }
    }
  });

  app.patch("/api/admin/page/:pageName", requireAuth, async (req, res) => {
    try {
      const pageName = req.params.pageName;
      const updates = req.body;
      const page = await storage.updatePageContent(pageName, updates);
      if (!page) {
        return res.status(404).json({ message: "Page content not found" });
      }
      res.json(page);
    } catch (error: any) {
      console.error("Error updating page content:", error);
      res.status(500).json({ message: "Internal server error" });
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
