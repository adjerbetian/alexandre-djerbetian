import { buildBook, BookDTO } from "entities";
import { api } from "@/services/api";

export async function fetchAll() {
    const dtos: BookDTO[] = await api.get("/books");
    return dtos.map((dto) => buildBook(dto));
}
