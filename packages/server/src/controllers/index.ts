import { Domain } from "../domain";
import { buildMovieControllers } from "./movies";
import { buildVideoControllers } from "./videos";
import { buildBookControllers } from "./books";

export function buildControllers(domain: Domain) {
    return {
        movies: buildMovieControllers(domain),
        videos: buildVideoControllers(domain),
        books: buildBookControllers(domain)
    };
}
