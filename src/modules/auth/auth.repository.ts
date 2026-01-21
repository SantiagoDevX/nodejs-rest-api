import type { PrismaClient } from "@prisma/client";

export class AuthRepository {
  constructor(private prismaClient: PrismaClient) { }
}
