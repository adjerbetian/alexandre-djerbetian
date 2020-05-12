import { Repositories } from "./repositories";
import { buildBookUseCases } from "./books";
import { buildQuoteUseCases } from "./quotes";

export * from "./repositories";

export type Domain = ReturnType<typeof buildDomain>;

export function buildDomain(repositories: Repositories) {
    return {
        ...buildBookUseCases(repositories),
        ...buildQuoteUseCases(repositories)
    };
}
