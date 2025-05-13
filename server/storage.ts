import { 
  users, type User, type InsertUser,
  projects, type Project, type InsertProject, 
  services, type Service, type InsertService,
  teamMembers, type TeamMember, type InsertTeamMember,
  testimonials, type Testimonial, type InsertTestimonial,
  contactSubmissions, type ContactSubmission, type InsertContactSubmission,
  companyStats, type CompanyStats, type InsertCompanyStats
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Projects
  getProjects(category?: string): Promise<Project[]>;
  getProject(id: number): Promise<Project | undefined>;
  createProject(project: InsertProject): Promise<Project>;
  
  // Services
  getServices(): Promise<Service[]>;
  getService(id: number): Promise<Service | undefined>;
  createService(service: InsertService): Promise<Service>;
  
  // Team Members
  getTeamMembers(): Promise<TeamMember[]>;
  createTeamMember(teamMember: InsertTeamMember): Promise<TeamMember>;
  
  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Contact Submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Company Stats
  getCompanyStats(): Promise<CompanyStats>;
  createCompanyStats(stats: InsertCompanyStats): Promise<CompanyStats>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private services: Map<number, Service>;
  private teamMembers: Map<number, TeamMember>;
  private testimonials: Map<number, Testimonial>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private companyStatsData: CompanyStats | null;
  
  currentId: number;
  private projectId: number;
  private serviceId: number;
  private teamMemberId: number;
  private testimonialId: number;
  private contactSubmissionId: number;
  private companyStatsId: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.services = new Map();
    this.teamMembers = new Map();
    this.testimonials = new Map();
    this.contactSubmissions = new Map();
    this.companyStatsData = null;
    
    this.currentId = 1;
    this.projectId = 1;
    this.serviceId = 1;
    this.teamMemberId = 1;
    this.testimonialId = 1;
    this.contactSubmissionId = 1;
    this.companyStatsId = 1;
  }

  // Users
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Projects
  async getProjects(category?: string): Promise<Project[]> {
    const allProjects = Array.from(this.projects.values());
    if (category) {
      return allProjects.filter(project => project.category === category);
    }
    return allProjects;
  }
  
  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectId++;
    const project: Project = { ...insertProject, id };
    this.projects.set(id, project);
    return project;
  }
  
  // Services
  async getServices(): Promise<Service[]> {
    return Array.from(this.services.values());
  }
  
  async getService(id: number): Promise<Service | undefined> {
    return this.services.get(id);
  }
  
  async createService(insertService: InsertService): Promise<Service> {
    const id = this.serviceId++;
    const service: Service = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }
  
  // Team Members
  async getTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }
  
  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const id = this.teamMemberId++;
    const teamMember: TeamMember = { ...insertTeamMember, id };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }
  
  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }
  
  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.testimonialId++;
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
  
  // Contact Submissions
  async createContactSubmission(insertSubmission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const submission: ContactSubmission = { ...insertSubmission, id };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  // Company Stats
  async getCompanyStats(): Promise<CompanyStats> {
    if (!this.companyStatsData) {
      // Return default stats if none are set
      return {
        id: 0,
        experienceYears: 15,
        completedProjects: 200,
        professionalEngineers: 50,
        satisfiedClients: 180
      };
    }
    return this.companyStatsData;
  }
  
  async createCompanyStats(insertStats: InsertCompanyStats): Promise<CompanyStats> {
    const id = this.companyStatsId++;
    const stats: CompanyStats = { ...insertStats, id };
    this.companyStatsData = stats;
    return stats;
  }
}

export const storage = new MemStorage();
