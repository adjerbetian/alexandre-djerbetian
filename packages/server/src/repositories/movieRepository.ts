import { buildMovie } from "entities";
import { MovieRepository } from "../domain";
import * as db from "../db";

export const movieRepository: MovieRepository = {
    fetchAll() {
        return db.movies.map((dbModel) => buildMovie(dbModel));
    }
};
