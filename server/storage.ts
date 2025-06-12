import { 
  users, 
  newsItems, 
  contactSubmissions, 
  departments, 
  facultyMembers, 
  visitorCounter,
  heroSection,
  pageContent,
  type User, 
  type InsertUser,
  type NewsItem,
  type InsertNewsItem,
  type ContactSubmission,
  type InsertContactSubmission,
  type Department,
  type InsertDepartment,
  type FacultyMember,
  type InsertFacultyMember,
  type VisitorCounter,
  type HeroSection,
  type InsertHeroSection,
  type PageContent,
  type InsertPageContent
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // News methods
  getAllNews(): Promise<NewsItem[]>;
  getPublishedNews(): Promise<NewsItem[]>;
  getNewsById(id: number): Promise<NewsItem | undefined>;
  createNewsItem(newsItem: InsertNewsItem): Promise<NewsItem>;
  updateNewsItem(id: number, updates: Partial<InsertNewsItem>): Promise<NewsItem | undefined>;
  deleteNewsItem(id: number): Promise<boolean>;

  // Contact methods
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getAllContactSubmissions(): Promise<ContactSubmission[]>;
  updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission | undefined>;

  // Department methods
  getAllDepartments(): Promise<Department[]>;
  getActiveDepartments(): Promise<Department[]>;
  createDepartment(department: InsertDepartment): Promise<Department>;

  // Faculty methods
  getAllFaculty(): Promise<FacultyMember[]>;
  getActiveFaculty(): Promise<FacultyMember[]>;
  getFacultyByDepartment(department: string): Promise<FacultyMember[]>;
  createFacultyMember(faculty: InsertFacultyMember): Promise<FacultyMember>;

  // Analytics methods
  incrementVisitorCount(): Promise<void>;
  getVisitorStats(): Promise<{ total: number; today: number }>;

  // Hero Section methods
  getActiveHeroSection(): Promise<HeroSection | undefined>;
  updateHeroSection(id: number, updates: Partial<InsertHeroSection>): Promise<HeroSection | undefined>;
  createHeroSection(heroSection: InsertHeroSection): Promise<HeroSection>;

  // Page Content methods
  getPageContent(pageName: string): Promise<PageContent | undefined>;
  updatePageContent(pageName: string, updates: Partial<InsertPageContent>): Promise<PageContent | undefined>;
  createPageContent(pageContent: InsertPageContent): Promise<PageContent>;
  getAllPageContent(): Promise<PageContent[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async getAllNews(): Promise<NewsItem[]> {
    return await db.select().from(newsItems).orderBy(desc(newsItems.createdAt));
  }

  async getPublishedNews(): Promise<NewsItem[]> {
    return await db
      .select()
      .from(newsItems)
      .where(eq(newsItems.published, true))
      .orderBy(desc(newsItems.publishedAt));
  }

  async getNewsById(id: number): Promise<NewsItem | undefined> {
    const [newsItem] = await db.select().from(newsItems).where(eq(newsItems.id, id));
    return newsItem || undefined;
  }

  async createNewsItem(newsItem: InsertNewsItem): Promise<NewsItem> {
    const [created] = await db
      .insert(newsItems)
      .values(newsItem)
      .returning();
    return created;
  }

  async updateNewsItem(id: number, updates: Partial<InsertNewsItem>): Promise<NewsItem | undefined> {
    const [updated] = await db
      .update(newsItems)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(newsItems.id, id))
      .returning();
    return updated || undefined;
  }

  async deleteNewsItem(id: number): Promise<boolean> {
    const result = await db.delete(newsItems).where(eq(newsItems.id, id));
    return (result.rowCount || 0) > 0;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [created] = await db
      .insert(contactSubmissions)
      .values(submission)
      .returning();
    return created;
  }

  async getAllContactSubmissions(): Promise<ContactSubmission[]> {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  }

  async updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission | undefined> {
    const [updated] = await db
      .update(contactSubmissions)
      .set({ status })
      .where(eq(contactSubmissions.id, id))
      .returning();
    return updated || undefined;
  }

  async getAllDepartments(): Promise<Department[]> {
    return await db.select().from(departments);
  }

  async getActiveDepartments(): Promise<Department[]> {
    return await db.select().from(departments).where(eq(departments.active, true));
  }

  async createDepartment(department: InsertDepartment): Promise<Department> {
    const [created] = await db
      .insert(departments)
      .values(department)
      .returning();
    return created;
  }

  async getAllFaculty(): Promise<FacultyMember[]> {
    return await db.select().from(facultyMembers);
  }

  async getActiveFaculty(): Promise<FacultyMember[]> {
    return await db.select().from(facultyMembers).where(eq(facultyMembers.active, true));
  }

  async getFacultyByDepartment(department: string): Promise<FacultyMember[]> {
    return await db
      .select()
      .from(facultyMembers)
      .where(and(eq(facultyMembers.department, department), eq(facultyMembers.active, true)));
  }

  async createFacultyMember(faculty: InsertFacultyMember): Promise<FacultyMember> {
    const [created] = await db
      .insert(facultyMembers)
      .values(faculty)
      .returning();
    return created;
  }

  async incrementVisitorCount(): Promise<void> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const [existing] = await db
      .select()
      .from(visitorCounter)
      .where(eq(visitorCounter.date, today));

    if (existing) {
      await db
        .update(visitorCounter)
        .set({ visits: existing.visits + 1 })
        .where(eq(visitorCounter.id, existing.id));
    } else {
      await db.insert(visitorCounter).values({ date: today, visits: 1 });
    }
  }

  async getVisitorStats(): Promise<{ total: number; today: number }> {
    const allVisits = await db.select().from(visitorCounter);
    const total = allVisits.reduce((sum, visit) => sum + visit.visits, 0);
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const [todayVisit] = await db
      .select()
      .from(visitorCounter)
      .where(eq(visitorCounter.date, today));
    
    return {
      total,
      today: todayVisit?.visits || 0
    };
  }

  async getActiveHeroSection(): Promise<HeroSection | undefined> {
    const [hero] = await db.select().from(heroSection).where(eq(heroSection.active, true));
    return hero || undefined;
  }

  async updateHeroSection(id: number, updates: Partial<InsertHeroSection>): Promise<HeroSection | undefined> {
    const [updated] = await db
      .update(heroSection)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(heroSection.id, id))
      .returning();
    return updated || undefined;
  }

  async createHeroSection(heroData: InsertHeroSection): Promise<HeroSection> {
    const [created] = await db
      .insert(heroSection)
      .values(heroData)
      .returning();
    return created;
  }

  async getPageContent(pageName: string): Promise<PageContent | undefined> {
    const [page] = await db.select().from(pageContent).where(eq(pageContent.pageName, pageName));
    return page || undefined;
  }

  async updatePageContent(pageName: string, updates: Partial<InsertPageContent>): Promise<PageContent | undefined> {
    const [updated] = await db
      .update(pageContent)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(pageContent.pageName, pageName))
      .returning();
    return updated || undefined;
  }

  async createPageContent(pageData: InsertPageContent): Promise<PageContent> {
    const [created] = await db
      .insert(pageContent)
      .values(pageData)
      .returning();
    return created;
  }

  async getAllPageContent(): Promise<PageContent[]> {
    return await db.select().from(pageContent);
  }
}

export const storage = new DatabaseStorage();
