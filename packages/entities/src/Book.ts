import { asEntityBuilder } from "./entity";

export interface BookDTO {
    id: string;
    title: string;
    authors: string[];
    amazon: string;
    releaseYear: number;
    rating: number;
    notes: {
        pre?: string;
        good?: string;
        lessGood?: string;
    };
}

export const buildBook = asEntityBuilder((dto: BookDTO) => {
    return Object.freeze({
        id: dto.id,
        title: dto.title,
        authors: Object.freeze([...dto.authors]),
        amazon: dto.amazon,
        releaseYear: dto.releaseYear,
        rating: dto.rating,
        notes: Object.freeze({
            pre: dto.notes?.pre,
            good: dto.notes?.good,
            lessGood: dto.notes?.lessGood
        }),

        hasNotes() {
            return this.notes.pre || this.notes.good || this.notes.lessGood;
        }
    });
});

export interface Book extends ReturnType<typeof buildBook> {}
