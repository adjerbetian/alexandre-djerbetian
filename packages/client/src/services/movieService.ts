import { Movie } from "entities";
import { api } from "@/services/api";

export async function fetchAllMovies(): Promise<Movie[]> {
    return api.get("/movies");
}
export async function fetchMovie(id: string) {
    return api.get(`/movies/${id}`);
}
