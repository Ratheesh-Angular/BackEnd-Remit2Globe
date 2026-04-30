import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { prisma } from "../lib/prisma";
import { AuthRequest } from "../middleware/auth.middleware";
//test commit
export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { email, phone, country, role: rawRole } = req.body;

      const normalizedRole =
        typeof rawRole === "string"
          ? rawRole.trim().toUpperCase()
          : "";

      const roleAliases: Record<string, "INDIVIDUAL" | "CORPORATE"> = {
        INDIVIDUAL: "INDIVIDUAL",
        CORPORATE: "CORPORATE",
        PERSONAL: "INDIVIDUAL",
        BUSINESS: "CORPORATE",
      };

      const role = roleAliases[normalizedRole];

      // Basic validation
      if (!email && !phone) {
        return res.status(400).json({
          success: false,
          message: "Email or phone number is required",
        });
      }

      if (!country) {
        return res.status(400).json({
          success: false,
          message: "Country is required",
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
        country,
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
  async setPassword(req: Request, res: Response) {
    try {
      const { token: setupToken, password } = req.body as {
        token?: string;
        password?: string;
      };

      if (!setupToken || !password) {
        return res.status(400).json({
          success: false,
          message: "Setup token and password are required",
        });
      }

      await authService.setInitialPassword(setupToken, password);

      return res.status(200).json({
        success: true,
        message: "Password created successfully. You can sign in now.",
      });
    } catch (error: any) {
      if (error.message === "INVALID_OR_EXPIRED_SETUP_TOKEN") {
        return res.status(401).json({
          success: false,
          message:
            "This setup link is invalid or has expired. Complete verification again from registration.",
        });
      }
      if (error.message === "USER_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "Account not found.",
        });
      }
      if (error.message === "VERIFICATION_INCOMPLETE") {
        return res.status(400).json({
          success: false,
          message: "Verify your email and phone before setting a password.",
        });
      }
      if (error.message === "PASSWORD_ALREADY_SET") {
        return res.status(400).json({
          success: false,
          message: "A password is already set for this account. Sign in instead.",
        });
      }
      if (
        error.message?.startsWith("PASSWORD_") &&
        error.message !== "PASSWORD_NOT_SET"
      ) {
        return res.status(400).json({
          success: false,
          message:
            "Password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol.",
        });
      }

      console.error("Set password error:", error);
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
        // Same JWT as Set-Cookie; SPA mirrors it onto the Next.js origin via /api/auth/session when frontend and API differ (e.g. Render).
        data: { user: result.user, token: result.token },
      });
    } catch (error: any) {
      if (error.message === "PASSWORD_REQUIRED") {
        return res.status(400).json({
          success: false,
          message: "Password is required",
        });
      }
      if (error.message === "PASSWORD_NOT_SET") {
        return res.status(403).json({
          success: false,
          message:
            "No password on this account yet. Complete registration verification and set a password first.",
        });
      }
      if (error.message === "INVALID_CREDENTIALS") {
        return res.status(401).json({
          success: false,
          message: "Invalid email, phone, or password",
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
      const row = await prisma.user.findUnique({
        where: { id: req.user!.userId },
        select: {
          id: true,
          email: true,
          phone: true,
          country: true,
          role: true,
          kycStatus: true,
          createdAt: true,
          emailVerified: true,
          phoneVerified: true,
          passwordHash: true,
        },
      });

      if (!row) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const { passwordHash: _h, ...rest } = row;
      const user = { ...rest, hasPassword: Boolean(_h) };

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

  async changePassword(req: AuthRequest, res: Response) {
    try {
      const { currentPassword, newPassword } = req.body as {
        currentPassword?: string;
        newPassword?: string;
      };

      if (!currentPassword || !newPassword) {
        return res.status(400).json({
          success: false,
          message: "Current password and new password are required",
        });
      }

      await authService.changePassword(
        req.user!.userId,
        currentPassword,
        newPassword,
      );

      return res.status(200).json({
        success: true,
        message: "Password updated successfully",
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "";
      if (msg === "USER_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      if (msg === "NO_PASSWORD_ON_ACCOUNT") {
        return res.status(400).json({
          success: false,
          message:
            "This account does not use a password. Sign in with your provider instead.",
        });
      }
      if (msg === "INVALID_CURRENT_PASSWORD") {
        return res.status(401).json({
          success: false,
          message: "Current password is incorrect",
        });
      }
      if (msg.startsWith("PASSWORD_")) {
        return res.status(400).json({
          success: false,
          message:
            "New password must be at least 8 characters and include uppercase, lowercase, a number, and a symbol.",
        });
      }
      console.error("Change password error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
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
