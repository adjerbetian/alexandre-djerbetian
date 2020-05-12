import { Domain } from "./useCases";
import { asControllers } from "../../utils";
import { µ } from "@alex/micro";

export function buildControllers(domain: Domain) {
    return asControllers({
        getAllBooks(req, res) {
            res.json(domain.getAllBooks());
        },
        getBook(req, res) {
            res.json(domain.getBook(req.params.id));
        },
        getAllBooksWithQuotes(req, res) {
            res.json(domain.getAllBooksWithQuotes());
        },
        getAllQuotes(req, res) {
            const bookIds = µ.toArray(req.query.books as string | string[]);
            const quotes = domain.getAllQuotes({
                limit: 10,
                books: bookIds
            });
            res.json(quotes);
        },
        getQuote(req, res) {
            res.json(domain.getQuote(req.params.id));
        }
    });
}
