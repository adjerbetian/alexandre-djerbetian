import { expect, api } from "./test/integration";

describe("books", () => {
    it("GET /books", async () => {
        const res = await api.get("/books");

        expect(res.body).to.have.length.greaterThan(6);
        expect(res.body[0]).to.deep.equal({
            amazon: "https://www.amazon.fr/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
            authors: ["Robert C. Martin"],
            id: "clean-code",
            notes: {},
            rating: 5,
            releaseYear: 2008,
            title: "Clean Code"
        });
    });
});
