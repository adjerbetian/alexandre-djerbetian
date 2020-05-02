import { expect, api } from "./test/integration";

describe("quotes", () => {
    it("GET /quotes", async () => {
        const res = await api.get("/quotes");

        expect(res.body).to.have.lengthOf(10);
        expect(res.body).to.deep.include({
            bookId: "clean-code",
            content: "Clean code reads like well-written prose.",
            chapter: 1,
            chapterTitle: "Clean Code",
            page: "8"
        });
    });
});
