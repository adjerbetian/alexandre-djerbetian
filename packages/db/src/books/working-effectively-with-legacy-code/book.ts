import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const workingEffectivelyWithLegacyCode: BookDBModel = {
    id: "working-effectively-with-legacy-code",
    title: "Working Effectively with Legacy Code",
    authors: ["Michael Feathers"],
    releaseYear: 2004,
    readingYear: 2018,
    rating: 4,
    notes,
    chapters,
    quotes,
};
