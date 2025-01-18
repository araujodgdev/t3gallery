/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type Config } from "drizzle-kit";

import { env } from "~/env";
import { config } from "dotenv";

config({path: '.env.local'})

export default {
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  tablesFilter: ["t3gallery_*"],
} satisfies Config;
