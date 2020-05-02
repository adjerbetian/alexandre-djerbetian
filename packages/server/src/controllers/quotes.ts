import { asControllers } from "./Controller";
import { Domain } from "../domain";

export function buildQuoteControllers(domain: Domain) {
    return asControllers({
        getAllQuotes(req, res) {
            res.json(domain.quotes.getAllQuotes(10));
        }
    });
}
