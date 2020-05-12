import { Movie } from "@alex/entities";

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

export type MovieUseCases = ReturnType<typeof buildMovieUseCases>;
export interface MovieRepository {
    fetchAll(): Movie[];
    fetchById(id: string): Movie;
}
interface Dependencies {
    movieRepository: MovieRepository;
}
