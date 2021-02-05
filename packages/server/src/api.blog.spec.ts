import { expect, api } from "./test/integration";

describe("blog", () => {
    it("GET /blog/articles", async () => {
        const res = await api.get("/blog/articles");

        expect(res.body[0]).to.deep.include({
            id: "hire-good-tilers",
            cover: "hire-good-tilers.jpg",
            date: {
                year: 2021,
                month: 2,
            },
        });
    });
    it("GET /blog/articles/:id", async () => {
        const res = await api.get("/blog/articles/hire-good-tilers");

        expect(res.body).to.deep.include({
            id: "hire-good-tilers",
            cover: "hire-good-tilers.jpg",
            date: {
                year: 2021,
                month: 2,
            },
        });
    });
});
