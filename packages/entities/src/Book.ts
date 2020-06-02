import { asEntityFactory } from "./entity";

export interface BookDTO {
    id: string;
    title: string;
    authors: string[];
    releaseYear: number;
    rating: number;
    notes: {
        pre?: string;
        good?: string;
        lessGood?: string;
    };
}

export const buildBook = asEntityFactory((dto: BookDTO) => {
    return Object.freeze({
        id: dto.id,
        title: dto.title,
        authors: Object.freeze([...dto.authors]),
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
