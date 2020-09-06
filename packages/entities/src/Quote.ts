import { Book } from "./Book";
import { asEntityFactory } from "./entity";

export const buildQuote = asEntityFactory((dto: QuoteDTO) => {
    return Object.freeze({
        id: dto.id,
        bookId: dto.bookId,
        bookTitle: dto.bookTitle,
        page: dto.page,
        chapterTitle: dto.chapterTitle,
        chapter: dto.chapter,
        content: dto.content,
        rating: dto.rating,

        isFrom(book: Book | string) {
            const bookId = typeof book === "string" ? book : book.id;
            return bookId === this.bookId;
        },
        isInIntroduction() {
            return this.chapter === 0;
        },
        getLength() {
            return getTextLength(this.content);
        },
    });
});

export interface Quote extends ReturnType<typeof buildQuote> {}

export interface QuoteDTO {
    id: string;
    bookId: string;
    bookTitle: string;
    page: string;
    chapterTitle: string;
    chapter: number;
    content: string;
    rating: number;
}

function getTextLength(text: string): number {
    const cleanedText = text.replace(/\s{2,}/g, " ");
    return cleanedText.length;
}
