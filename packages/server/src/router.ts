import express, { Express } from "express";
import { buildControllers } from "./controllers";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

export function buildRouter(controllers: ReturnType<typeof buildControllers>): Express {
    const app = express();
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());

    app.get("/movies", controllers.movies.getAllMovies);
    app.get("/movies/:id", controllers.movies.getMovie);

    return app;
}
