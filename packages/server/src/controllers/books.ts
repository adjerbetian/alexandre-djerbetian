import { asControllers } from "./Controller";
import { Domain } from "../domain";

export function buildBookControllers(domain: Domain) {
    return asControllers({
        getAllBooks(req, res) {
            res.json(domain.books.getAllBooks());
        },
        getBook(req, res) {
            res.json(domain.books.getBook(req.params.id));
        }
    });
}
