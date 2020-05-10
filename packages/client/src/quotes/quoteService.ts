import { QuoteDTO, buildQuote } from "@alex/entities";
import { api } from "@/utils";

export async function fetchAll({ books = [] }: { books?: string[] }) {
    const dtos: QuoteDTO[] = await api.get("/quotes", { query: { books } });
    return dtos.map((dto) => buildQuote(dto));
}
export async function fetchQuote(id: string) {
    const dto: QuoteDTO = await api.get(`/quotes/${id}`);
    return buildQuote(dto);
}
