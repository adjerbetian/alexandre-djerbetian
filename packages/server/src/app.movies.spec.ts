import request from "supertest";
import { app } from "./app";
import { expect } from "./test/unit";

describe("movies", () => {
    it("GET /movies", async () => {
        const res = await request(app).get("/movies");

        expect(res.body).to.deep.equal([
            {
                direction: "Alexandre Djerbetian & Vladimir Kovalevsky",
                id: "chaque-homme-doit-inventer-son-chemin",
                title: "Chaque homme doit inventer son chemin",
                year: 2012,
                youtubeId: "uE2uYQ8dmzQ"
            },
            {
                direction: "Classe de 6ème2 du Collège Liberté (Chevilly Larue)",
                id: "le-monde-a-l-envers",
                title: "Le monde à l'envers",
                year: 2017,
                youtubeId: "IrXyV3iPqys"
            },
            {
                direction: "Alexandre Djerbetian & Vladimir Kovalevsky",
                id: "royale-with-cheese",
                title: "Royale with Cheese",
                year: 2013,
                youtubeId: "FtpNdlTK1N0"
            },
            {
                direction: "Alexandre Djerbetian & Adrien Kovalevsky",
                id: "120-ans-d-histoire",
                title: "120 ans d'histoire",
                year: 2016,
                youtubeId: "GFR8vX1PeXY"
            },
            {
                direction: "Alexandre Djerbetian",
                id: "the-snowman-and-the-bee",
                title: "The snowman and the Bee",
                year: 2008,
                youtubeId: "MiytoZ6m1UQ"
            },
            {
                direction: "Alexandre Djerbetian & Vladimir Kovalevsky",
                id: "maxi-best-of",
                title: "Maxi Best Of",
                year: 2013,
                youtubeId: "juhiV1FUKNc"
            }
        ]);
    });
});
