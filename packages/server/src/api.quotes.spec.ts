import { expect, api } from "./test/integration";
import { QuoteDTO } from "entities";

describe("quotes", () => {
    it("GET /quotes", async () => {
        const res = await api.get("/quotes");

        expect(res.body).to.have.lengthOf(10);
        expect(
            containsQuote(res.body, {
                bookId: "clean-code",
                chapter: 1,
                chapterTitle: "Clean Code",
                page: "8",
                content: "Clean code reads like well-written prose"
            })
        ).to.be.true;
    });
});

function containsQuote(quotes: QuoteDTO[], partialQuote: Partial<QuoteDTO>) {
    // prettier-ignore
    return quotes.some(
        (q) =>
            (!partialQuote.bookId || q.bookId === partialQuote.bookId) &&
            (!partialQuote.chapter || q.chapter === partialQuote.chapter) &&
            (!partialQuote.chapterTitle || q.chapterTitle === partialQuote.chapterTitle) &&
            (!partialQuote.page || q.page === partialQuote.page) &&
            (!partialQuote.content || q.content.includes(partialQuote.content || ""))
    );
}
