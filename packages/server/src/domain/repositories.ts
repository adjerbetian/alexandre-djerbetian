import { Movie, Video } from "entities";

export interface Repositories {
    movieRepository: MovieRepository;
    videoRepository: VideoRepository;
}

export interface MovieRepository {
    fetchAll(): Movie[];
    fetchById(id: string): Movie;
}
export interface VideoRepository {
    fetchAll(): Video[];
}
