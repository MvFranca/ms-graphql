import { User } from "@prisma/client";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getFindById(Id: string): Promise<User | null>;
  createUser(name:string, email: string, password: string): Promise<User>;
}
