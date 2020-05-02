import { expect, api } from "./test/integration";
import { QuoteDTO } from "entities";

describe("quotes", () => {
    it("GET /quotes", async () => {
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
    it("GET /quotes/:id", async () => {
        const res = await api.get("/quotes/clean-code-p8-bis");

        expect(res.body).to.deep.equal({
            id: "clean-code-p8-bis",
            bookId: "clean-code",
            bookTitle: "Clean Code",
            chapter: 1,
            chapterTitle: "Clean Code",
            content:
                '**"_Clean code reads like well-written prose._"** [citation of Grady Booch]',
            page: "8",
            rating: 5
        });
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
