import { prisma } from "../../database/prisma";
import { Role, User } from "../../types/user.types";
import { AuthUserRepository } from "../interface/AuthUserRepository";

export class AuthUserRepositoryImpl implements AuthUserRepository {
    async findUserByEmail(email: string): Promise<User | null> {
        const user = await prisma.user.findUnique({
          where: { email },
        });
      
        if (!user) return null;
      
        return {
          ...user,
          role: user.role as Role, 
        };
      }

  async createUser(
    name: string,
    email: string,
    password: string,
    role: "USER" | "ADMIN"
  ): Promise<any> {
    return prisma.user.create({
      data: { name, email, password, role: role as Role },
    });
  }
}
