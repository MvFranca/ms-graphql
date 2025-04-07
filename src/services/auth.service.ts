import bcrypt from "bcryptjs";
import { UserRepository } from "../repositories/interface/UserRepository";
import { Role } from "../types/user.types";
import { generateToken } from "./utils/tokens.utils";

const GENERIC_ERROR = "Invalid credentials";

export class AuthService {

  constructor(private userRepository: UserRepository) {}

  async signup(
    name: string,
    email: string,
    password: string,
    role: Role
  ): Promise<string> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await this.userRepository.createUser(
        name,
        email,
        hashedPassword,
        role
      );
      return generateToken(user);
    } catch (error) {
      throw new Error(GENERIC_ERROR);
    }
  }

  async signin(email: string, password: string): Promise<string> {
    const user = await this.userRepository.getFindByEmail(email);

    if (!user || !(await bcrypt.compare(password, user.password!))) {
      throw new Error(GENERIC_ERROR);
    }

    return  generateToken(user);
  }

}
