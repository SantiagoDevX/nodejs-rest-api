import type { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service.js";
import { successResponse } from "../../utils/response.js";
import { AppError } from "../../utils/app-error.js";

export class AuthController {
  constructor(private AuthService: AuthService) {}

  public register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.AuthService.register(req.body);
      successResponse(res, 201, {
        message: "User registered successfully",
        data: result,
      });
    } catch (err) {
      if (err instanceof AppError) {
        return next(new AppError(err.message, err.statusCode));
      }
      next(new AppError("Internal Server Error", 500));
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.AuthService.login(req.body);
      successResponse(res, 200, {
        message: "User logged in successfully",
        data: result,
      });
    } catch (err) {
      if (err instanceof AppError) {
        return next(new AppError(err.message, err.statusCode));
      }
      next(new AppError("Internal Server Error", 500));
    }
  };
}
