import express from "express";
import logger from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import {
    bookControllers,
    movieControllers,
    videoControllers
} from "./subdomains";

export const app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.get("/", (req, res) => res.send("coucou"));

app.get("/movies", movieControllers.getAllMovies);
app.get("/movies/:id", movieControllers.getMovie);

app.get("/videos", videoControllers.getAllVideos);

app.get("/books", bookControllers.getAllBooks);
app.get("/books/:id", bookControllers.getBook);

app.get("/quotes", bookControllers.getAllQuotes);
app.get("/quotes/books", bookControllers.getAllBooksWithQuotes);
app.get("/quotes/:id", bookControllers.getQuote);
