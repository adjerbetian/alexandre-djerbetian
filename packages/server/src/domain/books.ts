import { Book } from "entities";
import { BookRepository } from "./repositories";

interface Dependencies {
    bookRepository: BookRepository;
}

export function buildBookUseCases({ bookRepository }: Dependencies) {
    return {
        getAllBooks(): Book[] {
            return bookRepository.fetchAll();
        }
    };
}
