import type { UserRepository } from "./user.repository.js";

export class UserService {
  constructor(private userRepository: UserRepository) {}

  public async getAllUsers() {
    return await this.userRepository.findAll();
  }

  public async getUserById(id: number) {
    return await this.userRepository.findById(id);
  }
}
