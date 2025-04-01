import { prisma } from "../database/prisma";

export class UserService {
  static async getUsers() {
    return prisma.user.findMany();
  }

  static async getUserById(id: string) {
    return prisma.user.findUnique({ where: { id } });
  }

  static async createUser(name: string, email: string, password: string) {
    return prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
  
}
