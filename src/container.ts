import { prismaClient } from "./config/db.js";

import { UserController } from "./modules/users/user.controller.js";
import { UserService } from "./modules/users/user.service.js";
import { UserRepository } from "./modules/users/user.repository.js";

const userRepository = new UserRepository(prismaClient);
const userService = new UserService(userRepository);
export const userController = new UserController(userService);

import { AuthController } from "./modules/auth/auth.controller.js";
import { AuthService } from "./modules/auth/auth.service.js";
import { AuthRepository } from "./modules/auth/auth.repository.js";

const authRepository = new AuthRepository(prismaClient);
const authService = new AuthService(authRepository);
export const authController = new AuthController(authService);
