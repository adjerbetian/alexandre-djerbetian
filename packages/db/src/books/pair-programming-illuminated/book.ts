import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const pairProgrammingIlluminated: BookDBModel = {
    id: "pair-programming-illuminated",
    title: "Pair Programming Illuminated",
    authors: ["Laurie Williams", "Robert Kessler"],
    releaseYear: 2002,
    readingYear: 2019,
    rating: 2.5,
    notes,
    chapters,
    quotes,
};
