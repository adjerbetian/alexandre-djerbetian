import { Domain } from "../domain";
import { buildBookControllers } from "./books";
import { buildQuoteControllers } from "./quotes";

export function buildControllers(domain: Domain) {
    return {
        books: buildBookControllers(domain),
        quotes: buildQuoteControllers(domain)
    };
}
