import { Quote } from "entities";
import { QuoteRepository } from "./repositories";

interface Dependencies {
    quoteRepository: QuoteRepository;
}

export function buildQuoteUseCases({ quoteRepository }: Dependencies) {
    return {
        getAllQuotes(): Quote[] {
            return quoteRepository.fetchAll();
        }
    };
}
