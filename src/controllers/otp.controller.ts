import { Request, Response } from "express";
import { otpService } from "../services/otp.service";
import { emailService } from "../services/email.service";
import { prisma } from "../lib/prisma";

export const otpController = {
  /**
   * Verify email OTP
   */
  async verifyEmailOtp(req: Request, res: Response) {
    try {
      const { userId, code } = req.body;

      if (!userId || !code) {
        return res.status(400).json({
          success: false,
          message: "User ID and verification code are required",
        });
      }

      if (code.length !== 6 || !/^\d+$/.test(code)) {
        return res.status(400).json({
          success: false,
          message: "Invalid verification code format",
        });
      }

      const verified = await otpService.verifyEmailOtp(userId, code);

      if (!verified) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired verification code",
        });
      }

      return res.status(200).json({
        success: true,
        message: "Email verified successfully",
      });
    } catch (error: any) {
      console.error("Email OTP verification error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },

  /**
   * Verify phone OTP
   */
  async verifyPhoneOtp(req: Request, res: Response) {
    try {
      const { userId, code } = req.body;

      if (!userId || !code) {
        return res.status(400).json({
          success: false,
          message: "User ID and verification code are required",
        });
      }

      if (code.length !== 6 || !/^\d+$/.test(code)) {
        return res.status(400).json({
          success: false,
          message: "Invalid verification code format",
        });
      }

      const verified = await otpService.verifyPhoneOtp(userId, code);

      if (!verified) {
        return res.status(400).json({
          success: false,
          message: "Invalid or expired verification code",
        });
      }

      // Check if both email and phone are now verified
      const status = await otpService.checkVerificationStatus(userId);

      if (status.emailVerified && status.phoneVerified) {
        // Send welcome email
        const user = await prisma.user.findUnique({
          where: { id: userId },
          select: { email: true },
        });

        if (user?.email) {
          try {
            await emailService.sendWelcomeEmail(user.email, "User");
          } catch (error) {
            console.error("Failed to send welcome email:", error);
          }
        }
      }

      return res.status(200).json({
        success: true,
        message: "Phone verified successfully",
        data: { fullyVerified: status.emailVerified && status.phoneVerified },
      });
    } catch (error: any) {
      console.error("Phone OTP verification error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },

  /**
   * Resend OTP
   */
  async resendOtp(req: Request, res: Response) {
    try {
      const { userId, type } = req.body;

      if (!userId || !type) {
        return res.status(400).json({
          success: false,
          message: "User ID and type are required",
        });
      }

      if (!["EMAIL", "PHONE"].includes(type)) {
        return res.status(400).json({
          success: false,
          message: "Invalid type. Must be EMAIL or PHONE",
        });
      }

      // Get user contact info
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { email: true, phone: true },
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      const contact = type === "EMAIL" ? user.email : user.phone;

      if (!contact) {
        return res.status(400).json({
          success: false,
          message: `No ${type.toLowerCase()} associated with this account`,
        });
      }

      await otpService.resendOtp(userId, type as "EMAIL" | "PHONE", contact);

      return res.status(200).json({
        success: true,
        message: "Verification code resent successfully",
      });
    } catch (error: any) {
      if (error.message.includes("wait")) {
        return res.status(429).json({
          success: false,
          message: error.message,
        });
      }

      console.error("Resend OTP error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },

  /**
   * Get verification status
   */
  async getVerificationStatus(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      if (!userId) {
        return res.status(400).json({
          success: false,
          message: "User ID is required",
        });
      }

      const status = await otpService.checkVerificationStatus(userId as string);

      return res.status(200).json({
        success: true,
        data: status,
      });
    } catch (error: any) {
      console.error("Get verification status error:", error);
      return res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again.",
      });
    }
  },
};
