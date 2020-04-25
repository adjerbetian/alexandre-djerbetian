import _ from "lodash";
import { buildMovie, Movie, MovieDTO } from "entities";

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
        ...overrides
    });
}
