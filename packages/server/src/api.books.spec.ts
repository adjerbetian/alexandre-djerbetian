import { expect, api } from "./test/integration";

describe("books", () => {
    it("GET /books", async () => {
        const res = await api.get("/books");

        expect(res.body).to.have.length.greaterThan(6);
        expect(res.body[0]).to.deep.equal({
            id: "clean-code",
            title: "Clean Code",
            authors: ["Robert C. Martin"],
            notes: {},
            rating: 5,
            releaseYear: 2008,
            amazon: "https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882"
        });
    });
});
