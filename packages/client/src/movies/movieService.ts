import { api } from "@/utils";
import type { MovieDTO } from "@alex/entities";
import { buildMovie } from "@alex/entities";

export async function fetchAllMovies() {
    const dtos: MovieDTO[] = await api.get("/movies");
    return dtos.map((dto) => buildMovie(dto));
}
export async function fetchMovie(id: string) {
    const dto: MovieDTO = await api.get(`/movies/${id}`);
    return buildMovie(dto);
}
