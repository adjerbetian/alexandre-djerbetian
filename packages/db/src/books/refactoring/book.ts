import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const refactoring: BookDBModel = {
    id: "refactoring",
    title: "Refactoring",
    authors: ["Martin Fowler", "Kent Beck"],
    releaseYear: 2002,
    readingYear: 2018,
    rating: 4,
    notes,
    chapters,
    quotes,
};
