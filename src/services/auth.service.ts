import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import {
  generateToken,
  verifyPasswordSetupToken,
} from "../utils/jwt.utils";
import { assertStrongPassword } from "../utils/password.utils";
import { otpService } from "./otp.service";
import { emailService } from "./email.service";

const BCRYPT_ROUNDS = 12;

function omitPasswordHash<T extends { passwordHash?: string | null }>(
  user: T,
): Omit<T, "passwordHash"> {
  const { passwordHash: _p, ...rest } = user;
  return rest;
}

interface RegisterInput {
  email?: string;
  phone?: string;
  country: string;
  role: "INDIVIDUAL" | "CORPORATE";
}
interface LoginInput {
  emailOrPhone: string;
  password: string;
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

    // 5. Return user (never expose password hash)
    return omitPasswordHash(user);
  },
  async setInitialPassword(setupToken: string, password: string) {
    assertStrongPassword(password);

    let userId: string;
    try {
      ({ userId } = verifyPasswordSetupToken(setupToken));
    } catch {
      throw new Error("INVALID_OR_EXPIRED_SETUP_TOKEN");
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }
    if (!user.emailVerified || !user.phoneVerified) {
      throw new Error("VERIFICATION_INCOMPLETE");
    }
    if (user.passwordHash) {
      throw new Error("PASSWORD_ALREADY_SET");
    }

    const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });
  },
  async login(input: LoginInput) {
    const { emailOrPhone, password } = input;

    if (!password) {
      throw new Error("PASSWORD_REQUIRED");
    }

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

    if (!user.passwordHash) {
      throw new Error("PASSWORD_NOT_SET");
    }

    const passwordOk = await bcrypt.compare(password, user.passwordHash);
    if (!passwordOk) {
      throw new Error("INVALID_CREDENTIALS");
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
      user: omitPasswordHash(user),
    };
  },

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ) {
    assertStrongPassword(newPassword);

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }
    if (!user.passwordHash) {
      throw new Error("NO_PASSWORD_ON_ACCOUNT");
    }

    const match = await bcrypt.compare(currentPassword, user.passwordHash);
    if (!match) {
      throw new Error("INVALID_CURRENT_PASSWORD");
    }

    const passwordHash = await bcrypt.hash(newPassword, BCRYPT_ROUNDS);
    await prisma.user.update({
      where: { id: userId },
      data: { passwordHash },
    });
  },

  /**
   * Called only from the trusted Next.js server (shared secret header).
   * Mirrors login JWT for OAuth-only users whose session exists in NextAuth
   * but who never received a mirrored httpOnly cookie on the web origin.
   */
  async issueTrustedSessionToken(userId: string) {
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      throw new Error("USER_NOT_FOUND");
    }
    if (user.kycStatus === "REJECTED") {
      throw new Error("ACCOUNT_SUSPENDED");
    }
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });
    return { token };
  },
};
