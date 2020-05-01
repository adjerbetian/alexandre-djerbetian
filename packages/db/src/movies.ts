export interface MovieDBModel {
    id: string;
    title: string;
    youtubeId: string;
    year: number;
    direction: string;
}

export const movies: MovieDBModel[] = [
    {
        id: "chaque-homme-doit-inventer-son-chemin",
        title: "Chaque homme doit inventer son chemin",
        youtubeId: "uE2uYQ8dmzQ",
        year: 2012,
        direction: "Alexandre Djerbetian & Vladimir Kovalevsky"
    },
    {
        id: "le-monde-a-l-envers",
        title: "Le monde à l'envers",
        youtubeId: "IrXyV3iPqys",
        year: 2017,
        direction: "Classe de 6ème2 du Collège Liberté (Chevilly Larue)"
    },
    {
        id: "royale-with-cheese",
        title: "Royale with Cheese",
        youtubeId: "FtpNdlTK1N0",
        year: 2013,
        direction: "Alexandre Djerbetian & Vladimir Kovalevsky"
    },
    {
        id: "120-ans-d-histoire",
        title: "120 ans d'histoire",
        youtubeId: "GFR8vX1PeXY",
        year: 2016,
        direction: "Alexandre Djerbetian & Adrien Kovalevsky"
    },
    {
        id: "the-snowman-and-the-bee",
        title: "The snowman and the Bee",
        youtubeId: "MiytoZ6m1UQ",
        year: 2008,
        direction: "Alexandre Djerbetian"
    },
    {
        id: "maxi-best-of",
        title: "Maxi Best Of",
        youtubeId: "juhiV1FUKNc",
        year: 2013,
        direction: "Alexandre Djerbetian & Vladimir Kovalevsky"
    }
];
