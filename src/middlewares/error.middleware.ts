import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app-error.js";
import { errorResponse } from "../utils/response.js";

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof AppError) {
    errorResponse(res, err.statusCode, err.message);
    return;
  }
  console.error("Unexpected error:", err);
  errorResponse(res);
}
