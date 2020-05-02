import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const theMythicalManMonth: BookDBModel = {
    id: "the-mythical-man-month",
    title: "The Mythical Man-Month",
    authors: ["Frederick P. Brooks Jr."],
    releaseYear: 1975,
    readingYear: 2019,
    rating: 2,
    notes,
    chapters,
    quotes
};
