import express, { Express } from "express";
import { buildControllers } from "./controllers";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

export function buildRouter(
    controllers: ReturnType<typeof buildControllers>
): Express {
    const app = express();
    app.use(logger("dev"));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cors());

    app.get("/", (req, res) => res.send("coucou"));

    app.get("/movies", controllers.movies.getAllMovies);
    app.get("/movies/:id", controllers.movies.getMovie);

    app.get("/videos", controllers.videos.getAllVideos);

    app.get("/books", controllers.books.getAllBooks);
    app.get("/books/:id", controllers.books.getBook);

    app.get("/quotes", controllers.quotes.getAllQuotes);
    app.get("/quotes/:id", controllers.quotes.getQuote);

    return app;
}
