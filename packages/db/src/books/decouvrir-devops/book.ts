import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const decouvrirDevops: BookDBModel = {
    id: "decouvrir-devops",
    title: "Découvrir DevOps",
    authors: ["Stéphane Goudeau", "Samuel Metias"],
    releaseYear: 2018,
    readingYear: 2018,
    rating: 0,
    notes,
    chapters,
    quotes
};
