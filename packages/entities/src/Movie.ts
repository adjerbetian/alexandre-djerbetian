export function buildMovie(dto: MovieDTO): Movie {
    return Object.freeze(dto);
}

export interface Movie extends Readonly<MovieDTO> {}

export interface MovieDTO {
    id: string;
    title: string;
    youtubeId: string;
    year: number;
    direction: string;
}
