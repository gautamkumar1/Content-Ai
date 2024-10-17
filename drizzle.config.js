export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",
  
    dbCredentials: {
      url: "postgresql://neondb_owner:fC5siLVaYxn2@ep-restless-forest-a5vobjyv.us-east-2.aws.neon.tech/Contentura-ai?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:fC5siLVaYxn2@ep-restless-forest-a5vobjyv.us-east-2.aws.neon.tech/Contentura-ai?sslmode=require",
    },
  };