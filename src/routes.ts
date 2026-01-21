import Router from "express";
import userRoutes from "./modules/users/user.routes.js";
import authRoutes from "./modules/auth/auth.routes.js";
import { successResponse } from "./utils/response.js";

const router = Router();

router.get("/health", (_, res) => {
  successResponse(res, 200, {
    message: "API is healthy",
    data: {
      status: "OK",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    },
  });
});

router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
