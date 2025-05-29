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
