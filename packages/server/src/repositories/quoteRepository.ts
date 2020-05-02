import { Quote, buildQuote } from "entities";
import * as db from "db";
import { QuoteRepository } from "../domain";
import { µ } from "micro";
import { NotFound } from "./errors";

export const quoteRepository: QuoteRepository = {
    fetchAll() {
        return getAllQuotes();
    },
    fetchById(id) {
        const quote = getAllQuotes().find((q) => q.id === id);
        if (!quote) throw new NotFound(id);
        return quote;
    }
};

function getAllQuotes(): Quote[] {
    return db.books.flatMap((book) =>
        (book.quotes || []).map((dbModel) =>
            buildQuote({
                id: dbModel.id,
                bookId: book.id,
                bookTitle: book.title,
                chapter: dbModel.chapter,
                chapterTitle: book.chapters![dbModel.chapter],
                rating: dbModel.rating,
                page: `${dbModel.page}`,
                content: µ.trimCommonIndentation(dbModel.content)
            })
        )
    );
}
