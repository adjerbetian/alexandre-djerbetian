import { QuoteDTO, buildQuote } from "entities";
import { api } from "@/utils";

export async function fetchAll() {
    const dtos: QuoteDTO[] = await api.get("/quotes");
    return dtos.map((dto) => buildQuote(dto));
}
