import _ from "lodash";
import { Quote } from "@alex/entities";
import { BookRepository, QuoteRepository } from "./repositories";

interface Dependencies {
    quoteRepository: QuoteRepository;
    bookRepository: BookRepository;
}

export function buildQuoteUseCases({
    quoteRepository,
    bookRepository
}: Dependencies) {
    return {
        getAllQuotes(filters: { limit: number; books: string[] }): Quote[] {
            return quoteRepository
                .fetchAll()
                .filter(
                    (q) =>
                        _.isEmpty(filters.books) ||
                        filters.books.some((id) => q.isFrom(id))
                )
                .sort(
                    (q1, q2) =>
                        q2.rating - q1.rating || q1.getLength() - q2.getLength()
                )
                .slice(0, filters.limit);
        },
        getQuote(id: string) {
            return quoteRepository.fetchById(id);
        },
        getAllBooksWithQuotes() {
            return bookRepository
                .fetchAll()
                .filter((b) => !_.isEmpty(quoteRepository.fetchFromBook(b.id)))
                .sort((b1, b2) => (b2.title > b1.title ? -1 : 1));
        }
    };
}
