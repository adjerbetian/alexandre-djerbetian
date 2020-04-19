import { Movie } from "entities";
import { MovieRepository } from "./repositories";

export function buildMovieUseCases(movieRepository: MovieRepository) {
    return {
        getAllMovies(): Movie[] {
            return movieRepository.fetchAll();
        }
    };
}
