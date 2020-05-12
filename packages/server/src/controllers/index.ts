import { Domain } from "../domain";
import { buildVideoControllers } from "./videos";
import { buildBookControllers } from "./books";
import { buildQuoteControllers } from "./quotes";

export function buildControllers(domain: Domain) {
    return {
        videos: buildVideoControllers(domain),
        books: buildBookControllers(domain),
        quotes: buildQuoteControllers(domain)
    };
}
