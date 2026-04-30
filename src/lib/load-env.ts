import path from "path";
import dotenv from "dotenv";

/**
 * Loads `.env.development` or `.env.production` based on NODE_ENV (defaults to development),
 * then `.env.local` with override for machine-specific secrets.
 * Must be imported before any code reads process.env (including Prisma).
 */
const root = process.cwd();
const nodeEnv = process.env.NODE_ENV || "development";
const primary =
  nodeEnv === "production" ? ".env.production" : ".env.development";

dotenv.config({ path: path.join(root, primary) });
dotenv.config({ path: path.join(root, ".env.local"), override: true });
