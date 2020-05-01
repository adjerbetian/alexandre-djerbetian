export interface BookDBModel {
    id: string;
    title: string;
    authors: string[];
    releaseYear: number;
    rating: number;
    notes?: null;
    readingYear: number;
}
