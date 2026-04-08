import bcrypt from "bcryptjs";
import { prisma } from "../lib/prisma";
import { generateToken } from "../utils/jwt.utils";
interface RegisterInput {
  email?: string;
  phone?: string;
  password: string;
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

    // 3. Hash the password
    const passwordHash = await bcrypt.hash(input.password, 12);

    // 4. Create the user in database
    const user = await prisma.user.create({
      data: {
        email: input.email || null,
        phone: input.phone || null,
        passwordHash,
        role: input.role,
        kycStatus: "PENDING",
      },
    });

    // 5. Return user without password
    const { passwordHash: _, ...userWithoutPassword } = user;
    return userWithoutPassword;
  },
  async login(input: LoginInput) {
    const { emailOrPhone, password } = input;

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

    // 4. Compare password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      throw new Error("INVALID_CREDENTIALS");
    }

    // 5. Generate JWT token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // 6. Return token and user info
    const { passwordHash: _, ...userWithoutPassword } = user;
    return {
      token,
      user: userWithoutPassword,
    };
  },
};
