import { buildBook } from "entities";
import { BookRepository } from "../domain";
import * as db from "../db";

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
