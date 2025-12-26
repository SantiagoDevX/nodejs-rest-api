import type { Request, Response } from "express";
import { UserService } from "./user.service.js";
import { errorResponse, successResponse } from "../../utils/response.js";
import { AppError } from "../../utils/app-error.js";

export class UserController {
  constructor(private userService: UserService) {}
  // pasamos a arrow functions porque no pierden el contexto de ejecucion heredado del cual se crearon
  public getAllUsers = (req: Request, res: Response) => {
    try {
      const users = this.userService.getAllUsers();
      successResponse(res, 200, { message: "Users retrieved", data: users });
    } catch (err) {
      if (err instanceof AppError) {
        return errorResponse(res, err.statusCode, err.message);
      }

      errorResponse(res, 500);
    }
  };

  public getUserById = (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const user = this.userService.getUserById(Number(id));
      successResponse(res, 200, { message: "User retrieved", data: user });
    } catch (err) {
      if (err instanceof AppError) {
        return errorResponse(res, err.statusCode, err.message);
      }
      errorResponse(res, 500);
    }
  };
}
