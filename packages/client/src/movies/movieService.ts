import { buildMovie, MovieDTO } from "@alex/entities";
import { api } from "@/utils";

export async function fetchAllMovies() {
    const dtos: MovieDTO[] = await api.get("/movies");
    return dtos.map((dto) => buildMovie(dto));
}
export async function fetchMovie(id: string) {
    const dto: MovieDTO = await api.get(`/movies/${id}`);
    return buildMovie(dto);
}
