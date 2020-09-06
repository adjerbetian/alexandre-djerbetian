import { BookDBModel } from "./dbModel";
import { cleanCode } from "./clean-code";
import { javascriptTheGoodPart } from "./javascript-the-good-parts";
import { decouvrirDevops } from "./decouvrir-devops";
import { designPatterns } from "./design-patterns";
import { masteringModularJavascript } from "./mastering-modular-javascript";
import { pairProgrammingIlluminated } from "./pair-programming-illuminated";
import { refactoring } from "./refactoring";
import { theMythicalManMonth } from "./the-mythical-man-month";
import { thePragmaticProgrammer } from "./the-pragmatic-programmer";
import { workingEffectivelyWithLegacyCode } from "./working-effectively-with-legacy-code";

export const books: BookDBModel[] = [
    cleanCode,
    {
        id: "the-clean-coder",
        title: "The Clean Coder",
        authors: ["Robert C. Martin"],
        releaseYear: 2011,
        readingYear: 2017,
        rating: 4.5,
    },
    {
        id: "clean-architecture",
        title: "Clean Architecture",
        authors: ["Robert C. Martin"],
        releaseYear: 2017,
        readingYear: 2018,
        rating: 4,
    },
    {
        id: "the-software-craftsman",
        title: "The Software Craftsman: Professionalism, Pragmatism, Pride",
        authors: ["Sandro Mancuso Mancuso"],
        releaseYear: 2014,
        readingYear: 2018,
        rating: 4.5,
    },
    {
        id: "test-driven-development-by-example",
        title: "Test Driven Development: By Example",
        authors: ["Kent Beck"],
        releaseYear: 2002,
        readingYear: 2018,
        rating: 5,
    },
    {
        id: "extreme-programming-explained-embrace-change",
        title: "Extreme Programming Explained: Embrace Change",
        authors: ["Kent Beck"],
        releaseYear: 2004,
        readingYear: 2018,
        rating: 3.5,
    },
    {
        id: "the-lean-startup",
        title: "The Lean Startup",
        authors: ["Erich Ries"],
        releaseYear: 2011,
        readingYear: 2018,
        rating: 1.5,
    },
    {
        id: "scrum-5ed-pour-une-pratique-vivante-de-l-agilite",
        title: "Scrum - 5e éd.- Pour une pratique vivante de l'agilité",
        authors: ["Claude Aubry"],
        releaseYear: 2018,
        readingYear: 2018,
        rating: 3,
    },
    javascriptTheGoodPart,
    refactoring,
    thePragmaticProgrammer,
    workingEffectivelyWithLegacyCode,
    decouvrirDevops,
    pairProgrammingIlluminated,
    designPatterns,
    theMythicalManMonth,
    masteringModularJavascript,
];
