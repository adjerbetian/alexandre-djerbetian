import { Quote, Movie, Video, Book } from "entities";

export interface Repositories {
    movieRepository: MovieRepository;
    videoRepository: VideoRepository;
    bookRepository: BookRepository;
    quoteRepository: QuoteRepository;
}

export interface MovieRepository {
    fetchAll(): Movie[];
    fetchById(id: string): Movie;
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
}
