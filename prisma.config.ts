import { defineConfig } from "prisma/config";
import "./src/lib/load-env";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL, // no sslmode in the URL
  },
  migrations: {
    path: "prisma/migrations",
  },
});
