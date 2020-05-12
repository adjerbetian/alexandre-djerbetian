import { buildMovie } from "@alex/entities";
import * as db from "@alex/db";
import { MovieRepository } from "./movies";
import { NotFound } from "../../utils";

export const movieRepository: MovieRepository = {
    fetchAll() {
        return db.movies.map((dbModel) => buildMovie(dbModel));
    },
    fetchById(id) {
        const dbModel = db.movies.find((it) => it.id === id);
        if (!dbModel) throw new NotFound(id);

        return buildMovie(dbModel);
    }
};
