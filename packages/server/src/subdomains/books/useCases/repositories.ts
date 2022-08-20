import type { Book, Quote } from "@alex/entities";

export interface Repositories {
    bookRepository: BookRepository;
    quoteRepository: QuoteRepository;
}

export interface BookRepository {
    fetchAll(): Book[];
    fetchById(id: string): Book;
}
export interface QuoteRepository {
    fetchAll(): Quote[];
    fetchById(id: string): Quote;
    fetchFromBook(bookId: string): Quote[];
}
