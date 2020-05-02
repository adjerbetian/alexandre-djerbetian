import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const cleanCode: BookDBModel = {
    id: "clean-code",
    title: "Clean Code",
    authors: ["Robert C. Martin"],
    releaseYear: 2008,
    readingYear: 2017,
    rating: 5,
    chapters,
    notes,
    quotes
};
