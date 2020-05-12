import { Quote, Video, Book } from "@alex/entities";

export interface Repositories {
    videoRepository: VideoRepository;
    bookRepository: BookRepository;
    quoteRepository: QuoteRepository;
}

export interface VideoRepository {
    fetchAll(): Video[];
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
