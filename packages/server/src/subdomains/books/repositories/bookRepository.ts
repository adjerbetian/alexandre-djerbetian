import { Book, BookDTO, buildBook } from "@alex/entities";
import * as db from "@alex/db";
import { BookDBModel } from "@alex/db";
import { BookRepository } from "../useCases";
import { NotFound } from "../../../utils";
import { µ } from "@alex/micro";

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
        notes: buildNotes(dbModel.notes)
    });

    function buildNotes(notes: BookDBModel["notes"]): BookDTO["notes"] {
        return {
            pre: µ.trimCommonIndentation(notes?.pre || ""),
            good: µ.trimCommonIndentation(notes?.good || ""),
            lessGood: µ.trimCommonIndentation(notes?.lessGood || "")
        };
    }
}
