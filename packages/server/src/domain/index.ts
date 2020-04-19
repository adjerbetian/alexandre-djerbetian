import { buildMovieUseCases } from "./movies";
import { Repositories } from "./repositories";

export * from "./repositories";

export type Domain = ReturnType<typeof buildDomain>;

export function buildDomain({ movieRepository }: Repositories) {
    return {
        movies: buildMovieUseCases(movieRepository)
    };
}
