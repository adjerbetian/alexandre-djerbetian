export function buildMovie(dto: MovieDTO): Movie {
    return Object.freeze({
        id: dto.id,
        title: dto.title,
        youtubeId: dto.youtubeId,
        year: dto.year,
        direction: dto.direction
    });
}

export interface Movie extends Readonly<MovieDTO> {}

export interface MovieDTO {
    id: string;
    title: string;
    youtubeId: string;
    year: number;
    direction: string;
}
