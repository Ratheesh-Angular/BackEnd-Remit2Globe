import dotenv from "dotenv";
import path from "path";

/** Resolve `.env` from the backend package root (not `process.cwd()`), so `npm run dev` works even if cwd differs from `cbp-backend/`. */
const backendRoot = path.resolve(__dirname, "../..");
const envFile = path.join(backendRoot, ".env");

dotenv.config({ path: envFile });
// Optional machine-specific overrides (same root)
dotenv.config({ path: path.join(backendRoot, ".env.local"), override: true });
