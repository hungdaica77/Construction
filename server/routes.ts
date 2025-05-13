import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertProjectSchema, 
  insertServiceSchema, 
  insertTeamMemberSchema, 
  insertTestimonialSchema,
  insertContactSubmissionSchema,
  contactFormSchema,
  insertCompanyStatsSchema
} from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Projects routes
  app.get("/api/projects", async (req: Request, res: Response) => {
    try {
      const category = req.query.category as string | undefined;
      const projects = await storage.getProjects(category);
      res.json(projects);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });

  app.get("/api/projects/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const project = await storage.getProject(id);
      
      if (!project) {
        return res.status(404).json({ message: "Project not found" });
      }
      
      res.json(project);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch project" });
    }
  });

  app.post("/api/projects", async (req: Request, res: Response) => {
    try {
      const projectData = insertProjectSchema.parse(req.body);
      const newProject = await storage.createProject(projectData);
      res.status(201).json(newProject);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid project data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create project" });
    }
  });

  // Services routes
  app.get("/api/services", async (_req: Request, res: Response) => {
    try {
      const services = await storage.getServices();
      res.json(services);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch services" });
    }
  });

  app.get("/api/services/:id", async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);
      const service = await storage.getService(id);
      
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      
      res.json(service);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch service" });
    }
  });

  app.post("/api/services", async (req: Request, res: Response) => {
    try {
      const serviceData = insertServiceSchema.parse(req.body);
      const newService = await storage.createService(serviceData);
      res.status(201).json(newService);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid service data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create service" });
    }
  });

  // Team members routes
  app.get("/api/team-members", async (_req: Request, res: Response) => {
    try {
      const teamMembers = await storage.getTeamMembers();
      res.json(teamMembers);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch team members" });
    }
  });

  app.post("/api/team-members", async (req: Request, res: Response) => {
    try {
      const teamMemberData = insertTeamMemberSchema.parse(req.body);
      const newTeamMember = await storage.createTeamMember(teamMemberData);
      res.status(201).json(newTeamMember);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid team member data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create team member" });
    }
  });

  // Testimonials routes
  app.get("/api/testimonials", async (_req: Request, res: Response) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  app.post("/api/testimonials", async (req: Request, res: Response) => {
    try {
      const testimonialData = insertTestimonialSchema.parse(req.body);
      const newTestimonial = await storage.createTestimonial(testimonialData);
      res.status(201).json(newTestimonial);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid testimonial data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create testimonial" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the form data
      const formData = contactFormSchema.parse(req.body);
      
      // Create contact submission
      const submissionData = {
        ...formData,
        createdAt: new Date().toISOString()
      };
      
      const submission = await storage.createContactSubmission(submissionData);
      res.status(201).json({ 
        success: true, 
        message: "Your message has been sent successfully!",
        data: submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false,
          message: "Invalid form data", 
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        success: false,
        message: "Failed to submit contact form" 
      });
    }
  });

  // Company stats routes
  app.get("/api/company-stats", async (_req: Request, res: Response) => {
    try {
      const stats = await storage.getCompanyStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch company stats" });
    }
  });

  app.post("/api/company-stats", async (req: Request, res: Response) => {
    try {
      const statsData = insertCompanyStatsSchema.parse(req.body);
      const newStats = await storage.createCompanyStats(statsData);
      res.status(201).json(newStats);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid stats data", errors: error.errors });
      }
      res.status(500).json({ message: "Failed to create company stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
