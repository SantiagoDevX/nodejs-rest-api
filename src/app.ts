import express from "express";
import { config } from "./config/env.js";
import routes from "./routes.js";
import { AppError } from "./utils/app-error.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

const app = express();
app.set("port", config.app.port);

app.use(routes);

app.use((_req, _res, next) => {
  next(new AppError("Not Found", 404));
});

app.use(errorMiddleware);

export default app;
