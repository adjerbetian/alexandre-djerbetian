import { Repositories } from "./repositories";
import { buildMovieUseCases } from "./movies";
import { buildVideoUseCases } from "./videos";
import { buildBookUseCases } from "./books";
import { buildQuoteUseCases } from "./quotes";

export * from "./repositories";

export type Domain = ReturnType<typeof buildDomain>;

export function buildDomain(repositories: Repositories) {
    return {
        movies: buildMovieUseCases(repositories),
        videos: buildVideoUseCases(repositories),
        books: buildBookUseCases(repositories),
        quotes: buildQuoteUseCases(repositories)
    };
}
