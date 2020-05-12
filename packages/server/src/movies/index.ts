import { movieRepository } from "./movieRepository";
import { buildMovieControllers } from "./controllers";
import { buildMovieUseCases } from "./movies";

const movieUseCases = buildMovieUseCases({ movieRepository });
export const movieControllers = buildMovieControllers(movieUseCases);
