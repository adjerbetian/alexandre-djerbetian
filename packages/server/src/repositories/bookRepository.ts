import { buildBook } from "entities";
import * as db from "db";
import { BookRepository } from "../domain";

export const bookRepository: BookRepository = {
    fetchAll() {
        return db.books.map((dbModel) =>
            buildBook({
                ...dbModel,
                notes: dbModel.notes || {}
            })
        );
    }
};
