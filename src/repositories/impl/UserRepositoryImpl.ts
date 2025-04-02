import { User } from "@prisma/client";
import { prisma } from "../../database/prisma";
import { UserRepository } from "../interface/UserRepository";

export class UserRepositoryImpl implements UserRepository {
    async getUsers(): Promise<User[]> {
        return prisma.user.findMany();
    }

    async getFindById(id: string): Promise<User | null> {
        return prisma.user.findUnique({ where: { id } });
    }

    async createUser(name: string, email: string, password: string): Promise<User> {
        return prisma.user.create({
            data: { email, password, name },
        });
    }
 
}
