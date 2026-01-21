import type { Request, Response, NextFunction } from "express";
import type { UserService } from "./user.service.js";
import { successResponse } from "../../utils/response.js";

export class UserController {
  constructor(private userService: UserService) {}

  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const users = await this.userService.getAllUsers();
      successResponse(res, 200, { message: "Users retrieved", data: users });
    } catch (err) {
      next(err);
    }
  };

  public getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getUserById(Number(id));
      successResponse(res, 200, { message: "User retrieved", data: user });
    } catch (err) {
      next(err);
    }
  };
}
