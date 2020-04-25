import { Movie } from "entities";
import { MovieRepository } from "./repositories";

interface Dependencies {
    movieRepository: MovieRepository;
}

export function buildMovieUseCases({ movieRepository }: Dependencies) {
    return {
        getAllMovies(): Movie[] {
            return movieRepository.fetchAll();
        }
    };
}
