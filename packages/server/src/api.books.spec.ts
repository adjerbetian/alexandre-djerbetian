import { expect, api } from "./test/integration";

describe("books", () => {
    it("GET /books", async () => {
        const res = await api.get("/books");

        expect(res.body).to.have.length.greaterThan(6);
        expectBookToBeCleanCode(res.body[0]);
    });
    it("GET /books/:id", async () => {
        const res = await api.get("/books/clean-code");

        expectBookToBeCleanCode(res.body);
    });

    function expectBookToBeCleanCode(book: any) {
        expect(book).to.deep.include({
            id: "clean-code",
            title: "Clean Code",
            authors: ["Robert C. Martin"],
            rating: 5,
            releaseYear: 2008,
        });
        expect(book.notes).not.to.be.undefined;
        expect(book.notes.pre).to.include(
            "For me, this is the best introduction to coding"
        );
        expect(book.notes.good).to.include(
            "It goes deep into the basics and details of writing good code"
        );
        expect(book.notes.lessGood).to.include(
            "Some chapters are not as well written than others"
        );
    }
});
