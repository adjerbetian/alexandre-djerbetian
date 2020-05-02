import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const thePragmaticProgrammer: BookDBModel = {
    id: "the-pragmatic-programmer",
    title: "The Pragmatic Programmer",
    authors: ["Andrew Hunt", "David Thomas"],
    releaseYear: 1999,
    readingYear: 2018,
    rating: 3,
    notes,
    chapters,
    quotes
};
