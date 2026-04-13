import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import file from "multer";
export interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string | null;
    role: string;
  };
  file?: Express.Multer.File;
}

export const protect = (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authenticated. Please login.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as any;

    req.user = {
      userId: decoded.userId,
      email: decoded.email,
      role: decoded.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Session expired. Please login again.",
    });
  }
};
