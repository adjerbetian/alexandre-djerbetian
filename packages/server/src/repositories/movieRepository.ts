import { buildMovie } from "entities";
import * as db from "db";
import { MovieRepository } from "../domain";
import { NotFound } from "./errors";

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
