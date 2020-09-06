import { buildQuote, Quote } from "@alex/entities";
import * as db from "@alex/db";
import { QuoteRepository } from "../useCases";
import { µ } from "@alex/micro";
import { NotFound } from "../../../utils";

export const quoteRepository: QuoteRepository = {
    fetchAll() {
        return getAllQuotes();
    },
    fetchById(id) {
        const quote = getAllQuotes().find((q) => q.id === id);
        if (!quote) throw new NotFound(id);
        return quote;
    },
    fetchFromBook(bookId) {
        return getAllQuotes().filter((q) => q.bookId === bookId);
    },
};

function getAllQuotes(): Quote[] {
    return flatMap(db.books, (book) =>
        (book.quotes || []).map((dbModel) =>
            buildQuote({
                id: dbModel.id,
                bookId: book.id,
                bookTitle: book.title,
                chapter: dbModel.chapter,
                chapterTitle: book.chapters![dbModel.chapter],
                rating: dbModel.rating,
                page: `${dbModel.page}`,
                content: µ.trimCommonIndentation(dbModel.content),
            })
        )
    );
}

function flatMap<T, U>(array: T[], callback: (element: T) => U[]): U[] {
    const result: U[] = [];
    array.forEach((element) => {
        result.push(...callback(element));
    });
    return result;
}
