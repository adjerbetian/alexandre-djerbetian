import { Repositories } from "./repositories";
import { buildMovieUseCases } from "./movies";
import { buildVideoUseCases } from "./videos";

export * from "./repositories";

export type Domain = ReturnType<typeof buildDomain>;

export function buildDomain(repositories: Repositories) {
    return {
        movies: buildMovieUseCases(repositories),
        videos: buildVideoUseCases(repositories)
    };
}
