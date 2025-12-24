import type { Response } from "express";

interface ApiReponse<T> {
  message: string;
  data?: T;
}

export function successResponse<T>(
  res: Response,
  statusCode: number = 200,
  payload: ApiReponse<T>
) {
  return res.status(statusCode).json({ success: true, ...payload });
}

export function errorResponse(
  res: Response,
  statusCode: number = 500,
  message: string = "Internal Server Error"
) {
  return res.status(statusCode).json({ success: false, message });
}
