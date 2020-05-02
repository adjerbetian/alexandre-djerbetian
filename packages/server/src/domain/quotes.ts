import { Quote } from "entities";
import { QuoteRepository } from "./repositories";

interface Dependencies {
    quoteRepository: QuoteRepository;
}

export function buildQuoteUseCases({ quoteRepository }: Dependencies) {
    return {
        getAllQuotes(limit: number): Quote[] {
            return quoteRepository
                .fetchAll()
                .sort((q1, q2) => q2.rating - q1.rating)
                .slice(0, limit);
        },
        getQuote(id: string) {
            return quoteRepository.fetchById(id);
        }
    };
}
