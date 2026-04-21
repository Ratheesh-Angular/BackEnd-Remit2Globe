import { prisma } from "../lib/prisma";
import { emailService } from "./email.service";

// TODO: For SMS, integrate with Twilio, AWS SNS, or another SMS provider
// import { smsService } from "./sms.service";

/**
 * When not `"false"`, any 6-digit code succeeds (until OTP delivery/check is fully wired).
 * Set `OTP_SKIP_CODE_VALIDATION=false` in production to enforce stored OTP codes.
 */
const SKIP_CODE_VALIDATION =
  process.env.OTP_SKIP_CODE_VALIDATION !== "false";

interface OtpRecord {
  id: string;
  userId: string;
  type: "EMAIL" | "PHONE";
  code: string;
  expiresAt: Date;
  verified: boolean;
  createdAt: Date;
}

export const otpService = {
  /**
   * Generate a 6-digit OTP code
   */
  generateOtpCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  /**
   * Create and send OTP for email verification
   */
  async sendEmailOtp(userId: string, email: string): Promise<void> {
    try {
      // Generate OTP
      const code = this.generateOtpCode();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      // Delete any existing unverified OTPs for this user and type
      await prisma.otp.deleteMany({
        where: {
          userId,
          type: "EMAIL",
          verified: false,
        },
      });

      // Create new OTP record
      await prisma.otp.create({
        data: {
          userId,
          type: "EMAIL",
          code,
          expiresAt,
          verified: false,
        },
      });

      // Send email
      await emailService.sendOtpEmail(email, code, 10);

      console.log(`Email OTP sent to ${email} for user ${userId}`);
    } catch (error) {
      console.error("Error sending email OTP:", error);
      throw new Error("Failed to send email verification code");
    }
  },

  /**
   * Create and send OTP for phone verification
   */
  async sendPhoneOtp(userId: string, phone: string): Promise<void> {
    try {
      // Generate OTP
      const code = this.generateOtpCode();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

      // Delete any existing unverified OTPs for this user and type
      await prisma.otp.deleteMany({
        where: {
          userId,
          type: "PHONE",
          verified: false,
        },
      });

      // Create new OTP record
      await prisma.otp.create({
        data: {
          userId,
          type: "PHONE",
          code,
          expiresAt,
          verified: false,
        },
      });

      // TODO: Send SMS using your SMS provider
      // await smsService.sendOtp(phone, code);

      // For now, just log it (REMOVE THIS IN PRODUCTION)
      console.log(`Phone OTP for ${phone}: ${code}`);
      console.log(`SMS OTP sent to ${phone} for user ${userId}`);
    } catch (error) {
      console.error("Error sending phone OTP:", error);
      throw new Error("Failed to send phone verification code");
    }
  },

  /**
   * Verify email OTP code
   */
  async verifyEmailOtp(userId: string, code: string): Promise<boolean> {
    try {
      if (SKIP_CODE_VALIDATION) {
        await prisma.otp.updateMany({
          where: { userId, type: "EMAIL", verified: false },
          data: { verified: true },
        });
        await prisma.user.update({
          where: { id: userId },
          data: { emailVerified: true },
        });
        console.log(`Email verified (bypass) for user ${userId}`);
        return true;
      }

      // Find the OTP record
      const otpRecord = await prisma.otp.findFirst({
        where: {
          userId,
          type: "EMAIL",
          code,
          verified: false,
          expiresAt: {
            gt: new Date(), // Not expired
          },
        },
      });

      if (!otpRecord) {
        return false; // Invalid or expired code
      }

      // Mark OTP as verified
      await prisma.otp.update({
        where: { id: otpRecord.id },
        data: { verified: true },
      });

      // Update user's email verification status
      await prisma.user.update({
        where: { id: userId },
        data: { emailVerified: true },
      });

      console.log(`Email verified for user ${userId}`);
      return true;
    } catch (error) {
      console.error("Error verifying email OTP:", error);
      return false;
    }
  },

  /**
   * Verify phone OTP code
   */
  async verifyPhoneOtp(userId: string, code: string): Promise<boolean> {
    try {
      if (SKIP_CODE_VALIDATION) {
        await prisma.otp.updateMany({
          where: { userId, type: "PHONE", verified: false },
          data: { verified: true },
        });
        await prisma.user.update({
          where: { id: userId },
          data: { phoneVerified: true },
        });
        console.log(`Phone verified (bypass) for user ${userId}`);
        return true;
      }

      // Find the OTP record
      const otpRecord = await prisma.otp.findFirst({
        where: {
          userId,
          type: "PHONE",
          code,
          verified: false,
          expiresAt: {
            gt: new Date(), // Not expired
          },
        },
      });

      if (!otpRecord) {
        return false; // Invalid or expired code
      }

      // Mark OTP as verified
      await prisma.otp.update({
        where: { id: otpRecord.id },
        data: { verified: true },
      });

      // Update user's phone verification status
      await prisma.user.update({
        where: { id: userId },
        data: { phoneVerified: true },
      });

      console.log(`Phone verified for user ${userId}`);
      return true;
    } catch (error) {
      console.error("Error verifying phone OTP:", error);
      return false;
    }
  },

  /**
   * Check if both email and phone are verified
   */
  async checkVerificationStatus(
    userId: string
  ): Promise<{ emailVerified: boolean; phoneVerified: boolean }> {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        emailVerified: true,
        phoneVerified: true,
      },
    });

    return {
      emailVerified: user?.emailVerified || false,
      phoneVerified: user?.phoneVerified || false,
    };
  },

  /**
   * Resend OTP (with rate limiting)
   */
  async resendOtp(
    userId: string,
    type: "EMAIL" | "PHONE",
    contact: string
  ): Promise<void> {
    // Check if user recently requested an OTP (rate limiting)
    const recentOtp = await prisma.otp.findFirst({
      where: {
        userId,
        type,
        createdAt: {
          gt: new Date(Date.now() - 60 * 1000), // Within last 60 seconds
        },
      },
    });

    if (recentOtp) {
      throw new Error("Please wait 60 seconds before requesting a new code");
    }

    // Send new OTP
    if (type === "EMAIL") {
      await this.sendEmailOtp(userId, contact);
    } else {
      await this.sendPhoneOtp(userId, contact);
    }
  },
};
