import { µ } from "@alex/micro";
import { asControllers } from "./Controller";
import { Domain } from "../domain";

export function buildQuoteControllers(domain: Domain) {
    return asControllers({
        getAllQuotes(req, res) {
            const bookIds = µ.toArray(req.query.books as string | string[]);
            const quotes = domain.quotes.getAllQuotes({
                limit: 10,
                books: bookIds
            });
            res.json(quotes);
        },
        getQuote(req, res) {
            const quote = domain.quotes.getQuote(req.params.id);
            res.json(quote);
        }
    });
}
