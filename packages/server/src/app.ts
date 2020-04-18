import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import { router as indexRouter } from "./routes";
import { router as usersRouter } from "./routes/users";

export const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);
