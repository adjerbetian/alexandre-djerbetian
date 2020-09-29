import { api, expect } from "./test/integration";
import { QuoteDTO } from "@alex/entities";

describe("quotes", () => {
    describe("GET /quotes", () => {
        it("should return an array of quotes", async () => {
            const res = await api.get("/quotes");

            expect(res.body).to.be.an("array");

            const quote = res.body[0];
            expect(quote).to.have.property("id");
            expect(quote).to.have.property("bookId");
            expect(quote).to.have.property("bookTitle");
            expect(quote).to.have.property("chapter");
            expect(quote).to.have.property("chapterTitle");
            expect(quote).to.have.property("page");
            expect(quote).to.have.property("rating");
        });
        it("should return 10 quotes", async () => {
            const res = await api.get("/quotes");

            expect(res.body).to.have.lengthOf(10);
        });
        it("should return the best quotes", async () => {
            const res = await api.get("/quotes");

            expect(res.body).to.satisfy((quotes: QuoteDTO[]) =>
                quotes.every((quote) => quote.rating === 5)
            );
        });
        it("should return the shortest quotes first", async () => {
            const res = await api.get("/quotes");

            expect(res.body[0].id).to.equal(
                "clean-code-reads-like-well-written-prose"
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
    describe("GET /quotes/:id", () => {
        it("should return the quote", async () => {
            const res = await api.get("/quotes/the-boy-scout-rule");

            expect(res.body).to.deep.include({
                id: "the-boy-scout-rule",
                bookId: "clean-code",
                bookTitle: "Clean Code",
                chapter: 1,
                chapterTitle: "Clean Code",
                page: "14",
                rating: 5,
            });
            expect(res.body.content).to.include(
                "Leave the campground cleaner than you found it."
            );
        });
    });
});
