import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { env } from "./env.js";

const adapter = new PrismaMariaDb({
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  user: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
});

const prismaClient = new PrismaClient({ adapter });

export { prismaClient };
