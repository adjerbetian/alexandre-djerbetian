import { asEntityBuilder } from "./entity";

export const buildMovie = asEntityBuilder((dto: MovieDTO) => {
    return Object.freeze({
        id: dto.id,
        title: dto.title,
        youtubeId: dto.youtubeId,
        year: dto.year,
        direction: dto.direction
    });
});

export interface Movie extends ReturnType<typeof buildMovie> {}

export interface MovieDTO {
    id: string;
    title: string;
    youtubeId: string;
    year: number;
    direction: string;
}
