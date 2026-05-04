"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * Loads `.env.development` or `.env.production` based on NODE_ENV (defaults to development),
 * then `.env.local` with override for machine-specific secrets.
 * Must be imported before any code reads process.env (including Prisma).
 */
const root = process.cwd();
const nodeEnv = process.env.NODE_ENV || "development";
const primary = nodeEnv === "production" ? ".env.production" : ".env.development";
dotenv_1.default.config({ path: path_1.default.join(root, primary) });
dotenv_1.default.config({ path: path_1.default.join(root, ".env.local"), override: true });
