import { api } from "@/utils";
import type { BookDTO, QuoteDTO } from "@alex/entities";
import { buildBook, buildQuote } from "@alex/entities";

export async function fetchAll({ books = [] }: { books?: string[] }) {
    const dtos: QuoteDTO[] = await api.get("/quotes", { query: { books } });
    return dtos.map((dto) => buildQuote(dto));
}
export async function fetchQuote(id: string) {
    const dto: QuoteDTO = await api.get(`/quotes/${id}`);
    return buildQuote(dto);
}
export async function fetchAllBooks() {
    const dtos: BookDTO[] = await api.get(`/quotes/books`);
    return dtos.map((dto) => buildBook(dto));
}
