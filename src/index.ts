import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes";
import { errorMiddleware } from "./middleware/error.middleware";
import * as dotenv from "dotenv";
import kycRoutes from "./routes/kyc.routes";
import beneficiaryRoutes from "./routes/beneficiary.routes";
import otpRoutes from "./routes/otp.routes";
import path from "path";
import flexRoutes from "./routes/flex.routes";
import remittanceRoutes from "./routes/remittance.routes";
dotenv.config();
const app = express();
const PORT = process.env.PORT ?? 5000;
const FRONTEND_URL = process.env.FRONTEND_URL ?? "http://localhost:3000";

// ─── Middleware ──────────────────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
// ─── Routes ─────────────────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);
app.use("/api/kyc", kycRoutes);
app.use("/api/beneficiaries", beneficiaryRoutes);
app.use("/api/otp", otpRoutes);
// Remove this line
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/flex", flexRoutes);
app.use("/api/remittance", remittanceRoutes);
app.get("/api/health", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date() });
});

// ─── Error handler ───────────────────────────────────────────────────────────
app.use(errorMiddleware);

// ─── Start ───────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT} [${process.env.NODE_ENV}]`,
  );
});

export default app;
