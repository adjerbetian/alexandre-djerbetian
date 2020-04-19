import { asControllers } from "./Controller";
import { Domain } from "../domain";

export function buildMovieControllers(domain: Domain) {
    return asControllers({
        getAllMovies(req, res) {
            res.json(domain.movies.getAllMovies());
        }
    });
}
