import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Projects Schema
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // residential, commercial, industrial, infrastructure
  location: text("location").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  completionYear: text("completion_year").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
});

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

// Services Schema
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  features: jsonb("features").notNull(), // Array of strings with features
});

export const insertServiceSchema = createInsertSchema(services).omit({
  id: true,
});

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

// Team Members Schema
export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  socialLinks: jsonb("social_links").notNull(), // JSON with social links
});

export const insertTeamMemberSchema = createInsertSchema(teamMembers).omit({
  id: true,
});

export type InsertTeamMember = z.infer<typeof insertTeamMemberSchema>;
export type TeamMember = typeof teamMembers.$inferSelect;

// Testimonials Schema
export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  position: text("position").notNull(),
  content: text("content").notNull(),
  rating: integer("rating").notNull(), // 1-5 stars
  imageUrl: text("image_url").notNull(),
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;

// Contact Form Submissions Schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(), // Store as ISO string
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({
  id: true,
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Contact Form Schema for validation only
export const contactFormSchema = z.object({
  name: z.string().min(2, "Họ và tên phải có ít nhất 2 ký tự"),
  email: z.string().email("Email không đúng định dạng"),
  phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 ký tự"),
  subject: z.string().min(1, "Vui lòng chọn chủ đề"),
  message: z.string().min(10, "Nội dung phải có ít nhất 10 ký tự"),
});

// Company Statistics Schema
export const companyStats = pgTable("company_stats", {
  id: serial("id").primaryKey(),
  experienceYears: integer("experience_years").notNull(),
  completedProjects: integer("completed_projects").notNull(),
  professionalEngineers: integer("professional_engineers").notNull(),
  satisfiedClients: integer("satisfied_clients").notNull(),
});

export const insertCompanyStatsSchema = createInsertSchema(companyStats).omit({
  id: true,
});

export type InsertCompanyStats = z.infer<typeof insertCompanyStatsSchema>;
export type CompanyStats = typeof companyStats.$inferSelect;
