import { defineConfig } from "prisma/config";

import "./src/lib/load-env";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL as string,
  },
});
