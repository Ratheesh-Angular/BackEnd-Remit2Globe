import "./load-env";
import { PrismaClient } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // handles SSL without cert chain validation
  },
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });
