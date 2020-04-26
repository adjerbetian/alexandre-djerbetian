import { Domain } from "../domain";
import { buildMovieControllers } from "./movies";
import { buildVideoControllers } from "./videos";

export function buildControllers(domain: Domain) {
    return {
        movies: buildMovieControllers(domain),
        videos: buildVideoControllers(domain)
    };
}
