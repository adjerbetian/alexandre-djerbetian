import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const masteringModularJavascript: BookDBModel = {
    id: "mastering-modular-javascript",
    title: "Mastering Modular Javascript",
    authors: ["Nicolas Bevacqua"],
    releaseYear: 2018,
    readingYear: 2019,
    rating: 3,
    notes,
    chapters,
    quotes,
};
