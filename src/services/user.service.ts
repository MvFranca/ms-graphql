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

  async createUser(name: string, email: string, password: string) {
    return this.userRepository.createUser(name, email, password);
  }
}
