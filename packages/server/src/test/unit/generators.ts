import type { buildMovie, Movie, MovieDTO } from "@alex/entities";
import _ from "lodash";

export const generateIndex = (() => {
    let index = _.random(1, 100);
    return () => index++;
})();

export function generateMovie(overrides: Partial<MovieDTO> = {}): Movie {
    const index = generateIndex();

    return buildMovie({
        id: `movie-${index}`,
        direction: "direction",
        title: `movie ${index}`,
        year: 2005,
        youtubeId: `youtube-${index}`,
        ...overrides,
    });
}
