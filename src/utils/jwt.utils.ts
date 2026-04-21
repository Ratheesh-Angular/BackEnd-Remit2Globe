import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "7d";

const PASSWORD_SETUP_EXPIRES_IN = "30m";

export type PasswordSetupJwtPayload = {
  userId: string;
  purpose: "PASSWORD_SETUP";
};

export const generateToken = (payload: {
  userId: string;
  email: string | null;
  role: string;
}): string => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  } as jwt.SignOptions);
};

/** Short-lived token after email+phone OTP, used only for POST /auth/set-password */
export const generatePasswordSetupToken = (userId: string): string => {
  const payload: PasswordSetupJwtPayload = {
    userId,
    purpose: "PASSWORD_SETUP",
  };
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: PASSWORD_SETUP_EXPIRES_IN,
  } as jwt.SignOptions);
};

export const verifyPasswordSetupToken = (token: string): PasswordSetupJwtPayload => {
  const decoded = jwt.verify(token, JWT_SECRET) as PasswordSetupJwtPayload &
    jwt.JwtPayload;
  if (decoded.purpose !== "PASSWORD_SETUP" || typeof decoded.userId !== "string") {
    throw new Error("INVALID_SETUP_TOKEN");
  }
  return { userId: decoded.userId, purpose: "PASSWORD_SETUP" };
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};
