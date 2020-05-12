import { buildStubFor, expect, Stub, generators } from "../test/unit";
import { buildMovieUseCases, MovieRepository } from "./movies";

describe("movies use cases", () => {
    let movieRepository: Stub<MovieRepository>;
    let useCases: ReturnType<typeof buildMovieUseCases>;

    beforeEach(() => {
        movieRepository = buildStubFor({
            fetchAll: true,
            fetchById: true
        });
        useCases = buildMovieUseCases({ movieRepository });
    });

    describe("getAllMovies", () => {
        it("should return all the movies", () => {
            const movies = [generators.generateMovie()];
            movieRepository.fetchAll.returns(movies);

            const result = useCases.getAllMovies();

            expect(result).to.deep.equal(movies);
        });
    });
});
