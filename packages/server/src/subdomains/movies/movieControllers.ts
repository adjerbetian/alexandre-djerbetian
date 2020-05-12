import { asControllers } from "../../utils";
import { MovieUseCases } from "./movies";

export function buildMovieControllers(useCases: MovieUseCases) {
    return asControllers({
        getAllMovies(req, res) {
            res.json(useCases.getAllMovies());
        },
        getMovie(req, res) {
            res.json(useCases.getMovie(req.params.id));
        }
    });
}
