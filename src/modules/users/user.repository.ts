import type { PrismaClient } from "@prisma/client";

export class UserRepository {
  constructor(private prismaClient: PrismaClient) {}

  public findAll() {
    return this.prismaClient.user.findMany();
  }

  public findById(id: number) {
    return this.prismaClient.user.findUnique({ where: { id } });
  }
}
