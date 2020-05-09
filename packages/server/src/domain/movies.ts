import { Movie } from "@alex/entities";
import { MovieRepository } from "./repositories";

interface Dependencies {
    movieRepository: MovieRepository;
}

export function buildMovieUseCases({ movieRepository }: Dependencies) {
    return {
        getAllMovies(): Movie[] {
            return movieRepository.fetchAll();
        },
        getMovie(id: string): Movie {
            return movieRepository.fetchById(id);
        }
    };
}
