import { User, Role } from "@prisma/client";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getFindById(Id: string): Promise<User | null>;
  getFindByEmail(email: string): Promise<User | null>;
  createUser(name:string, email: string, password: string, role?: Role): Promise<User>;
}
