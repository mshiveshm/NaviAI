import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { register, login, getProfile } from "./controllers/authController";
import { getDashboardData } from "./controllers/dashboardController";
import { verifyToken } from "./middleware/auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/register", register);
  app.post("/api/auth/login", login);
  app.get("/api/auth/profile", verifyToken, getProfile);

  // Dashboard routes
  app.get("/api/user/dashboard", verifyToken, getDashboardData);

  // Test route
  app.get("/api/test", (req, res) => {
    res.json({ message: "API is working correctly" });
  });

  const httpServer = createServer(app);

  return httpServer;
}
