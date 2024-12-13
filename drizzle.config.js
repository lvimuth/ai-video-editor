import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./configs/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://neondb_owner:7BktjUCl1HQT@ep-morning-dawn-a5i4bcm1.us-east-2.aws.neon.tech/neondb?sslmode=require',
  },
});
