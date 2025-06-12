import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 50 }).notNull().unique(),
  email: varchar("email", { length: 100 }).notNull().unique(),
  password: text("password").notNull(),
  role: varchar("role", { length: 20 }).notNull().default("admin"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const newsItems = pgTable("news_items", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  content: text("content").notNull(),
  excerpt: text("excerpt"),
  category: varchar("category", { length: 50 }).notNull(),
  imageUrl: text("image_url"),
  attachmentUrl: text("attachment_url"), // For PDF/document attachments
  attachmentName: varchar("attachment_name", { length: 100 }),
  link: text("link"), // External link for news items
  published: boolean("published").default(false).notNull(),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  authorId: integer("author_id").references(() => users.id),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  firstName: varchar("first_name", { length: 50 }).notNull(),
  lastName: varchar("last_name", { length: 50 }).notNull(),
  email: varchar("email", { length: 100 }).notNull(),
  subject: varchar("subject", { length: 100 }).notNull(),
  message: text("message").notNull(),
  status: varchar("status", { length: 20 }).default("pending").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
  icon: varchar("icon", { length: 50 }),
  imageUrl: text("image_url"),
  active: boolean("active").default(true).notNull(),
});

export const facultyMembers = pgTable("faculty_members", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  title: varchar("title", { length: 100 }).notNull(),
  department: varchar("department", { length: 100 }).notNull(),
  qualifications: text("qualifications"),
  imageUrl: text("image_url"),
  email: varchar("email", { length: 100 }),
  specializations: text("specializations").array(),
  active: boolean("active").default(true).notNull(),
});

export const visitorCounter = pgTable("visitor_counter", {
  id: serial("id").primaryKey(),
  date: timestamp("date").defaultNow().notNull(),
  visits: integer("visits").default(1).notNull(),
});

export const heroSection = pgTable("hero_section", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 200 }).notNull(),
  subtitle: text("subtitle"),
  description: text("description"),
  primaryButtonText: varchar("primary_button_text", { length: 50 }),
  primaryButtonLink: text("primary_button_link"),
  secondaryButtonText: varchar("secondary_button_text", { length: 50 }),
  secondaryButtonLink: text("secondary_button_link"),
  backgroundImageUrl: text("background_image_url"),
  videoUrl: text("video_url"),
  active: boolean("active").default(true).notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const pageContent = pgTable("page_content", {
  id: serial("id").primaryKey(),
  pageName: varchar("page_name", { length: 100 }).notNull().unique(),
  title: varchar("title", { length: 200 }),
  content: text("content"),
  metaDescription: text("meta_description"),
  sections: text("sections"), // JSON string for flexible section content
  images: text("images").array(), // Array of image URLs
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Relations
export const newsItemsRelations = relations(newsItems, ({ one }) => ({
  author: one(users, {
    fields: [newsItems.authorId],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  newsItems: many(newsItems),
}));

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const insertNewsItemSchema = createInsertSchema(newsItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
  createdAt: true,
  status: true,
});

export const insertDepartmentSchema = createInsertSchema(departments).omit({
  id: true,
});

export const insertFacultyMemberSchema = createInsertSchema(facultyMembers).omit({
  id: true,
});

export const insertHeroSectionSchema = createInsertSchema(heroSection).omit({
  id: true,
  updatedAt: true,
});

export const insertPageContentSchema = createInsertSchema(pageContent).omit({
  id: true,
  updatedAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type NewsItem = typeof newsItems.$inferSelect;
export type InsertNewsItem = z.infer<typeof insertNewsItemSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type Department = typeof departments.$inferSelect;
export type InsertDepartment = z.infer<typeof insertDepartmentSchema>;
export type FacultyMember = typeof facultyMembers.$inferSelect;
export type InsertFacultyMember = z.infer<typeof insertFacultyMemberSchema>;
export type VisitorCounter = typeof visitorCounter.$inferSelect;
export type HeroSection = typeof heroSection.$inferSelect;
export type InsertHeroSection = z.infer<typeof insertHeroSectionSchema>;
export type PageContent = typeof pageContent.$inferSelect;
export type InsertPageContent = z.infer<typeof insertPageContentSchema>;
