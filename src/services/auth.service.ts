import { prisma } from "../lib/prisma";
import { generateToken } from "../utils/jwt.utils";
import { otpService } from "./otp.service";
import { emailService } from "./email.service";
interface RegisterInput {
  email?: string;
  phone?: string;
  country: string;
  role: "INDIVIDUAL" | "CORPORATE";
}
interface LoginInput {
  emailOrPhone: string;
}
export const authService = {
  async register(input: RegisterInput) {
    // 1. Check if email already exists
    if (input.email) {
      const existingEmail = await prisma.user.findUnique({
        where: { email: input.email },
      });
      if (existingEmail) {
        throw new Error("EMAIL_EXISTS");
      }
    }

    // 2. Check if phone already exists
    if (input.phone) {
      const existingPhone = await prisma.user.findUnique({
        where: { phone: input.phone },
      });
      if (existingPhone) {
        throw new Error("PHONE_EXISTS");
      }
    }

    // 3. Create the user in database
    const user = await prisma.user.create({
      data: {
        email: input.email || null,
        phone: input.phone || null,
        country: input.country,
        role: input.role,
        kycStatus: "PENDING",
        emailVerified: false,
        phoneVerified: false,
      },
    });

    // 4. Send verification OTPs
    try {
      if (input.email) {
        await otpService.sendEmailOtp(user.id, input.email);
      }
      if (input.phone) {
        await otpService.sendPhoneOtp(user.id, input.phone);
      }
    } catch (error) {
      console.error("Error sending OTPs:", error);
      // Don't fail registration if OTP sending fails
    }

    // 5. Return user
    return user;
  },
  async login(input: LoginInput) {
    const { emailOrPhone } = input;

    // 1. Find user by email or phone
    const isEmail = emailOrPhone.includes("@");

    const user = await prisma.user.findUnique({
      where: isEmail ? { email: emailOrPhone } : { phone: emailOrPhone },
    });

    // 2. If no user found
    if (!user) {
      throw new Error("INVALID_CREDENTIALS");
    }

    // 3. Check if account is suspended
    if (user.kycStatus === "REJECTED") {
      throw new Error("ACCOUNT_SUSPENDED");
    }

    // 4. Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // 5. Return token and user info
    return {
      token,
      user,
    };
  },
};
