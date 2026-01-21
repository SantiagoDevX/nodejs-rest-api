import type { LoginInput, RegisterInput } from "./auth.schema.js";
import type { AuthRepository } from "./auth.repository.js";

export class AuthService {
  constructor(private authRepository: AuthRepository) { }

  public register = async (registerInput: RegisterInput) => {
    const { email, password, name } = registerInput;
    // TODO :  implementer la lógica de registro de usuario
  };

  public login = async (loginInput: LoginInput) => {
    // TODO :  implementer la lógica de inicio de sesión de usuario
  };

  private hashPassword = async (password: string): Promise<string> => {
    // TODO : implementar la lógica de hash de contraseña
    return "";
  };
}
