import { expect, api } from "./test/integration";

describe("movies", () => {
    it("GET /videos", async () => {
        const res = await api.get("/videos");

        expect(res.body).to.have.length.greaterThan(3);
        expect(res.body[0]).to.deep.equal({
            id: "o_TH-Y78tt4",
            youtubeId: "o_TH-Y78tt4",
            title: "Clean Architecture",
            year: 2015,
            speaker: "Uncle Bob (R. Martin)",
            comments:
                "This is the best *Clean Architecture* video of Uncle Bob (he has several). It's funny, and goes\nstraight to the point",
            moments: [
                {
                    content: "where the architecture part starts",
                    time: "10m35s"
                },
                {
                    content: "what about MVC",
                    time: "27m30s"
                },
                {
                    content: "what about the database",
                    time: "42m45s"
                },
                {
                    content: "**discussion about tests**",
                    time: "57m10s"
                }
            ]
        });
    });
});
