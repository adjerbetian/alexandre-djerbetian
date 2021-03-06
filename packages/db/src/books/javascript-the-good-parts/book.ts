import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const javascriptTheGoodPart: BookDBModel = {
    id: "javascript-the-good-parts",
    title: "Javascript: The Good Parts",
    authors: ["Douglas Crockford"],
    releaseYear: 2008,
    readingYear: 2018,
    rating: 2,
    notes,
    chapters,
    quotes,
};
