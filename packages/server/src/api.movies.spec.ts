import { expect, api } from "./test/integration";

describe("movies", () => {
    it("GET /movies", async () => {
        const res = await api.get("/movies");

        expect(res.body).to.have.length(6);
        expect(res.body[0]).to.deep.equal({
            direction: "Alexandre Djerbetian & Vladimir Kovalevsky",
            id: "chaque-homme-doit-inventer-son-chemin",
            title: "Chaque homme doit inventer son chemin",
            year: 2012,
            youtubeId: "uE2uYQ8dmzQ"
        });
    });
    it("GET /movies/:id", async () => {
        const res = await api.get("/movies/chaque-homme-doit-inventer-son-chemin");

        expect(res.body).to.deep.equal({
            direction: "Alexandre Djerbetian & Vladimir Kovalevsky",
            id: "chaque-homme-doit-inventer-son-chemin",
            title: "Chaque homme doit inventer son chemin",
            year: 2012,
            youtubeId: "uE2uYQ8dmzQ"
        });
    });
});
