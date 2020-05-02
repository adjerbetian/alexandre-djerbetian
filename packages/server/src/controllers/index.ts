import { Domain } from "../domain";
import { buildMovieControllers } from "./movies";
import { buildVideoControllers } from "./videos";
import { buildBookControllers } from "./books";
import { buildQuoteControllers } from "./quotes";

export function buildControllers(domain: Domain) {
    return {
        movies: buildMovieControllers(domain),
        videos: buildVideoControllers(domain),
        books: buildBookControllers(domain),
        quotes: buildQuoteControllers(domain)
    };
}
