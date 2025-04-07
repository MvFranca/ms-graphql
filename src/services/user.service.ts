import { Role } from "@prisma/client";
import { UserRepository } from "../repositories/interface/UserRepository";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userRepository.getUsers();
  }

  async getUserById(id: string) {
    return this.userRepository.getFindById(id);
  }

  async getUserByEmail(email: string) {
    return this.userRepository.getFindByEmail(email);
  }

  async createUser(name: string, email: string, password: string, role: Role) {
    return this.userRepository.createUser(name, email, password, role);
  }
}
