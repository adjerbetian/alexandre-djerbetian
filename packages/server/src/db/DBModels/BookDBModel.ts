export interface BookDBModel {
    id: string;
    title: string;
    authors: string[];
    amazon: string;
    releaseYear: number;
    rating: number;
    notes?: null;
    readingYear: number;
}
