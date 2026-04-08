import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { prisma } from "../lib/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, phone, password, confirmPassword, role } = req.body;

      // Basic validation
      if (!email && !phone) {
        return res.status(400).json({
          success: false,
          message: "Email or phone number is required",
        });
      }

      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Password is required",
        });
      }

      if (password.length < 8) {
        return res.status(400).json({
          success: false,
          message: "Password must be at least 8 characters",
        });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          message: "Passwords do not match",
        });
      }

      if (!role || !["INDIVIDUAL", "CORPORATE"].includes(role)) {
        return res.status(400).json({
          success: false,
          message: "Invalid account type",
        });
      }

      // Call service to create user
      const user = await authService.register({
        email,
        phone,
        password,
        role,
      });

      return res.status(201).json({
        success: true,
        message: "Account created successfully",
        data: { user },
      });
    } catch (error: any) {
      if (error.message === "EMAIL_EXISTS") {
        return res.status(409).json({
          success: false,
          message: "An account with this email already exists",
        });
      }

      if (error.message === "PHONE_EXISTS") {
        return res.status(409).json({
          success: false,
          message: "An account with this phone number already exists",
        });
      }

      console.error("Register error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { emailOrPhone, password } = req.body;

      if (!emailOrPhone) {
        return res.status(400).json({
          success: false,
          message: "Email or phone number is required",
        });
      }

      if (!password) {
        return res.status(400).json({
          success: false,
          message: "Password is required",
        });
      }

      const result = await authService.login({ emailOrPhone, password });

      // Store token in httpOnly cookie (more secure than localStorage)
      res.cookie("token", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      });

      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: { user: result.user },
      });
    } catch (error: any) {
      if (error.message === "INVALID_CREDENTIALS") {
        return res.status(401).json({
          success: false,
          message: "Invalid email/phone or password",
        });
      }
      if (error.message === "ACCOUNT_SUSPENDED") {
        return res.status(403).json({
          success: false,
          message: "Your account has been suspended. Please contact support.",
        });
      }
      console.error("Login error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },
  async getMe(req: AuthRequest, res: Response) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: req.user!.userId },
        select: {
          id: true,
          email: true,
          phone: true,
          role: true,
          kycStatus: true,
          createdAt: true,
        },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      return res.status(200).json({
        success: true,
        data: { user },
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  },

  async logout(req: AuthRequest, res: Response) {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
    });
    return res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  },
};
