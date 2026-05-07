import { Request, Response } from "express";
import { authService } from "../services/auth.service";
import { prisma } from "../lib/prisma";
import { Prisma } from "../generated/prisma";
import { AuthRequest } from "../middleware/auth.middleware";

function mapRegisterPrismaOrDbError(error: unknown): {
  status: number;
  body: { success: false; message: string };
} | null {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      const target = error.meta?.target;
      const fields: string[] = Array.isArray(target)
        ? target.map(String)
        : typeof target === "string"
          ? [target]
          : [];
      const joined = fields.join(" ").toLowerCase();
      if (joined.includes("email")) {
        return {
          status: 409,
          body: {
            success: false,
            message: "An account with this email already exists",
          },
        };
      }
      if (joined.includes("phone")) {
        return {
          status: 409,
          body: {
            success: false,
            message: "An account with this phone number already exists",
          },
        };
      }
      return {
        status: 409,
        body: {
          success: false,
          message: "This registration conflicts with an existing account.",
        },
      };
    }
  }

  if (error instanceof Prisma.PrismaClientInitializationError) {
    return {
      status: 503,
      body: {
        success: false,
        message:
          "Database is unavailable. Check DATABASE_URL and that the DB accepts connections from this host (e.g. RDS security group, sslmode=require).",
      },
    };
  }

  if (error instanceof Error) {
    const m = error.message.toLowerCase();
    if (
      m.includes("denied access on the database") ||
      m.includes("permission denied for database") ||
      m.includes("was denied access")
    ) {
      return {
        status: 503,
        body: {
          success: false,
          message:
            "Database access denied for this user on the target database. On RDS PostgreSQL, connect as an admin and run: GRANT CONNECT ON DATABASE your_db TO your_app_user; then connect to your_db and GRANT USAGE ON SCHEMA public TO your_app_user; GRANT ALL ON ALL TABLES IN SCHEMA public TO your_app_user; GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO your_app_user;. Ensure DATABASE_URL uses that app user (or the RDS master user) and matches the database name.",
        },
      };
    }
    if (
      m.includes("econnrefused") ||
      m.includes("etimedout") ||
      m.includes("connection timed out") ||
      m.includes("connection timeout") ||
      m.includes("query has timed out") ||
      m.includes("password authentication failed") ||
      m.includes("no pg_hba.conf entry") ||
      m.includes("the server does not support ssl") ||
      m.includes("self signed certificate") ||
      (m.includes("certificate") &&
        (m.includes("ssl") || m.includes("tls") || m.includes("verify"))) ||
      m.includes("getaddrinfo enotfound") ||
      (m.includes("database") && m.includes("does not exist"))
    ) {
      return {
        status: 503,
        body: {
          success: false,
          message:
            "Cannot reach the database. Verify DATABASE_URL, RDS/VPC security groups, and SSL settings (try ?sslmode=require on RDS).",
        },
      };
    }
  }

  return null;
}

export const authController = {
  /**
   * Server-to-server: Next.js verifies NextAuth session, then requests a JWT
   * via shared `INTERNAL_FRONTEND_AUTH_SECRET`.
   */
  async trustedIssueSession(req: Request, res: Response) {
    try {
      const expected = process.env.INTERNAL_FRONTEND_AUTH_SECRET?.trim();
      if (!expected) {
        return res.status(503).json({
          success: false,
          message: "Trusted session issuance is not configured",
        });
      }

      const headerSecret = req.get("x-internal-auth")?.trim();
      if (!headerSecret || headerSecret !== expected) {
        return res.status(401).json({
          success: false,
          message: "Unauthorized",
        });
      }

      const rawId = req.body?.userId;
      const userId = typeof rawId === "string" ? rawId.trim() : "";
      if (!userId) {
        return res.status(400).json({
          success: false,
          message: "userId is required",
        });
      }

      const { token } = await authService.issueTrustedSessionToken(userId);
      return res.status(200).json({
        success: true,
        data: { token },
      });
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : "";
      if (msg === "USER_NOT_FOUND") {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }
      if (msg === "ACCOUNT_SUSPENDED") {
        return res.status(403).json({
          success: false,
          message: "Your account has been suspended. Please contact support.",
        });
      }
      console.error("Trusted issue session error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  },

  async register(req: Request, res: Response) {
    try {
      const { email, phone, country, role: rawRole } = req.body;

      const normalizedRole =
        typeof rawRole === "string" ? rawRole.trim().toUpperCase() : "";

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
    } catch (error: unknown) {
      if (error instanceof Error && error.message === "EMAIL_EXISTS") {
        return res.status(409).json({
          success: false,
          message: "An account with this email already exists",
        });
      }

      if (error instanceof Error && error.message === "PHONE_EXISTS") {
        return res.status(409).json({
          success: false,
          message: "An account with this phone number already exists",
        });
      }
      console.error("FULL REGISTER ERROR:", error);
      const mapped = mapRegisterPrismaOrDbError(error);
      if (mapped) {
        console.error("Register error (mapped):", error);
        return res.status(mapped.status).json(mapped.body);
      }

      console.error("Register error:", error);
      const expose =
        process.env.NODE_ENV !== "production" ||
        process.env.EXPOSE_ERROR_DETAILS?.trim().toLowerCase() === "true";
      const detail =
        expose && error instanceof Error ? error.message : undefined;
      return res.status(500).json({
        success: false,
        message: detail
          ? `Something went wrong: ${detail}`
          : "Something went wrong. Please try again.",
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
          message:
            "A password is already set for this account. Sign in instead.",
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
        // Same JWT as Set-Cookie; SPA on a different origin mirrors it via /api/auth/session (BFF) when needed.
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
