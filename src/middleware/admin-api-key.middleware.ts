import { Request, Response, NextFunction } from "express";

export function requireAdminApiKey(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const expected = process.env.ADMIN_API_KEY?.trim();
  if (!expected) {
    return res.status(503).json({
      success: false,
      error: "Admin API is not configured (set ADMIN_API_KEY).",
    });
  }
  const provided = String(
    req.header("x-admin-api-key") ?? req.header("X-Admin-Api-Key") ?? "",
  ).trim();
  if (provided !== expected) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  next();
}
