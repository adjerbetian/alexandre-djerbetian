export interface BookDBModel {
    id: string;
    title: string;
    authors: string[];
    releaseYear: number;
    readingYear: number;
    rating: number;
    notes?: NotesDBModel;
    chapters?: string[];
    quotes?: QuoteDBModel[];
}
export interface NotesDBModel {
    pre: string;
    good: string;
    lessGood: string;
}
export interface QuoteDBModel {
    id: string;
    chapter: number;
    page: string;
    content: string;
    tags: QuoteTagDBModel[];
    rating: Rating;
    comments?: string;
}
export interface QuoteTagDBModel {
    name: string;
    description: string;
}
export enum Rating {
    Interesting,
    Good,
    VeryGood,
    Amazing,
    ToBeRememberedByHeart,
}
// export enum Rating {
//     Interesting = "Interesting",
//     Good = "Good",
//     VeryGood = "VeryGood",
//     Amazing = "Amazing",
//     ToBeRememberedByHeart = "ToBeRememberedByHeart",
// }
