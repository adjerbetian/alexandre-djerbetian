import { api, expect } from "./test/integration";
import { QuoteDTO } from "@alex/entities";

describe("quotes", () => {
    describe("GET /quotes", () => {
        it("should return the best 10 quotes", async () => {
            const res = await api.get("/quotes");

            expect(res.body).to.have.lengthOf(10);
            expect(res.body).to.satisfy((quotes: QuoteDTO[]) =>
                quotes.some((quote) =>
                    doesQuoteMatch(quote, {
                        id: "clean-code-p8-bis",
                        bookId: "clean-code",
                        chapter: 1,
                        chapterTitle: "Clean Code",
                        page: "8",
                        content: "Clean code reads like well-written prose"
                    })
                )
            );
        });
        it("should filter by the given book when provided", async () => {
            const res = await api.get("/quotes?books=refactoring");

            expect(res.body).not.to.be.empty;
            expect(res.body).to.satisfy((quotes: QuoteDTO[]) =>
                quotes.every((quote) => quote.bookId === "refactoring")
            );
        });
    });
    describe("GET /quotes/books", () => {
        it("should return books which have quotes", async () => {
            const res = await api.get("/quotes/books");

            expect(hasBook(res.body, "clean-code")).to.be.true;
            expect(hasBook(res.body, "refactoring")).to.be.true;
        });
        it("should not return books which don't have quotes", async () => {
            const res = await api.get("/quotes/books");

            expect(hasBook(res.body, "the-clean-coder")).to.be.false;
            expect(hasBook(res.body, "clean-architecture")).to.be.false;
        });

        function hasBook(array: any[], bookId: string) {
            return array.some((element) => element.id === bookId);
        }
    });
    it("GET /quotes/:id", async () => {
        const res = await api.get("/quotes/clean-code-p8-bis");

        expect(res.body).to.deep.include({
            id: "clean-code-p8-bis",
            bookId: "clean-code",
            bookTitle: "Clean Code",
            chapter: 1,
            chapterTitle: "Clean Code",
            page: "8",
            rating: 5
        });
        expect(res.body.content).to.include(
            "Clean code reads like well-written prose."
        );
    });
});

function doesQuoteMatch(quote: QuoteDTO, partialQuote: Partial<QuoteDTO>) {
    // prettier-ignore
    return (
        doesFieldMatch("id") &&
        doesFieldMatch("bookId") &&
        doesFieldMatch("chapter") &&
        doesFieldMatch("chapterTitle") &&
        doesFieldMatch("page") &&
        doesFieldInclude("content")
    );

    function doesFieldMatch(field: keyof QuoteDTO) {
        if (!partialQuote[field]) return true;
        return quote[field] === partialQuote[field];
    }
    function doesFieldInclude(field: keyof QuoteDTO) {
        if (!partialQuote[field]) return true;

        const actual = quote[field];
        const expected = partialQuote[field];
        if (typeof actual !== "string" || typeof expected !== "string")
            return false;

        return actual.includes(expected);
    }
}
