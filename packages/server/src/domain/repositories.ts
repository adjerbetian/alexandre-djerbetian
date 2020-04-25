import { Movie } from "entities";

export interface Repositories {
    movieRepository: MovieRepository;
}

export interface MovieRepository {
    fetchAll(): Movie[];
    fetchById(id: string): Movie;
}
