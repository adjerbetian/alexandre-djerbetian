import { Domain } from "../domain";
import { buildMovieControllers } from "./movies";

export function buildControllers(domain: Domain) {
    return {
        movies: buildMovieControllers(domain)
    };
}
