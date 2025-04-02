import { Role, User } from "../../types/user.types";

export interface AuthUserRepository {
    
  findUserByEmail(email: string): Promise<User | null>;
  createUser(
    name: string,
    email: string,
    password: string,
    role: Role
  ): Promise<User>;
}
