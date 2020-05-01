export interface BookDBModel {
    id: string;
    title: string;
    authors: string[];
    releaseYear: number;
    rating: number;
    notes?: NotesDBModel;
    readingYear: number;
}
export interface NotesDBModel {
    chapters: string[];
    pre: string;
    good: string;
    lessGood: string;
}
