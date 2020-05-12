import { Repositories } from "./repositories";
import { buildVideoUseCases } from "./videos";
import { buildBookUseCases } from "./books";
import { buildQuoteUseCases } from "./quotes";

export * from "./repositories";

export type Domain = ReturnType<typeof buildDomain>;

export function buildDomain(repositories: Repositories) {
    return {
        videos: buildVideoUseCases(repositories),
        books: buildBookUseCases(repositories),
        quotes: buildQuoteUseCases(repositories)
    };
}
