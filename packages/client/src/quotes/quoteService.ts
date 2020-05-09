import { QuoteDTO, buildQuote } from "@alex/entities";
import { api } from "@/utils";

export async function fetchAll() {
    const dtos: QuoteDTO[] = await api.get("/quotes");
    return dtos.map((dto) => buildQuote(dto));
}
export async function fetchQuote(id: string) {
    const dto: QuoteDTO = await api.get(`/quotes/${id}`);
    return buildQuote(dto);
}
