import { BookDBModel } from "../dbModel";
import { notes } from "./notes";
import { chapters, quotes } from "./quotes";

export const designPatterns: BookDBModel = {
    id: "design-patterns",
    title: "Design Patterns",
    authors: ["Erich Gamma", "Richard Helm", "Ralph Johnson", "John Vlissides"],
    releaseYear: 1994,
    readingYear: 2019,
    rating: 3.5,
    notes,
    chapters,
    quotes
};
