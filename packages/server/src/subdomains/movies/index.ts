import { movieRepository } from "./movieRepository";
import { buildMovieControllers } from "./movieControllers";
import { buildMovieUseCases } from "./movies";

const movieUseCases = buildMovieUseCases({ movieRepository });
export const movieControllers = buildMovieControllers(movieUseCases);
