import { BookDTO, buildBook } from "@alex/entities";
import { api } from "@/utils";

export async function fetchAll() {
    const dtos: BookDTO[] = await api.get("/books");
    return dtos.map((dto) => buildBook(dto));
}
export async function fetchBook(id: string) {
    const dto: BookDTO = await api.get(`/books/${id}`);
    return buildBook(dto);
}
