import express from "express";
import routes from "./routes.js";
import { env } from "./config/env.js";
import { AppError } from "./utils/app-error.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();
app.set("port", env.PORT);

app.use(routes);

app.use((_req, _res, next) => {
  next(new AppError("Route Not Found", 404));
});

app.use(errorMiddleware);

export default app;
