import { asEntityFactory } from "./entity";

export interface BlogArticleDTO {
    id: string;
    cover: string;
    date: {
        year: number;
        month: number;
    };
    content: string;
    summary: string;
}

export interface BlogArticle extends ReturnType<typeof buildBlogArticle> {}

export const buildBlogArticle = asEntityFactory((dto: BlogArticleDTO) => {
    assertDateIsValid(dto.date);
    return Object.freeze({
        id: dto.id,
        cover: dto.cover,
        date: Object.freeze(dto.date),
        content: dto.content,
        summary: dto.summary,
    });

    function assertDateIsValid(date: BlogArticleDTO["date"]) {
        if (date.year < 2021) throwInvalidDate();
        if (date.month < 1 || date.month > 12) throwInvalidDate();
    }
    function throwInvalidDate() {
        throw new Error(
            `Date ${JSON.stringify(dto.date)} is invalid for article "${
                dto.id
            }"`
        );
    }
});
