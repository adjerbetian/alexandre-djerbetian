import { buildBook, Book } from "entities";
import * as db from "db";
import { BookDBModel } from "db";
import { BookRepository } from "../domain";
import { NotFound } from "./errors";

export const bookRepository: BookRepository = {
    fetchAll() {
        return db.books.map((dbModel) => buildEntity(dbModel));
    },
    fetchById(id: string) {
        const dbModel = db.books.find((it) => it.id === id);
        if (!dbModel) throw new NotFound(id);

        return buildEntity(dbModel);
    }
};

function buildEntity(dbModel: BookDBModel): Book {
    return buildBook({
        ...dbModel,
        notes: dbModel.notes || {}
    });
}
