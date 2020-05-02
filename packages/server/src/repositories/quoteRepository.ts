import { Quote, buildQuote } from "entities";
import * as db from "db";
import { QuoteRepository } from "../domain";
import { µ } from "micro";

export const quoteRepository: QuoteRepository = {
    fetchAll() {
        return getAllQuotes();
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
                page: `${dbModel.rating}`,
                content: µ.trimCommonIndentation(dbModel.content)
            })
        )
    );
}
