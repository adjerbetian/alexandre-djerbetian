describe("Movie page", () => {
    const movie = getMovie();

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit(`/movies/${movie.id}`);
    });

    it("should be accessible from the movies page", () => {
        cy.visit("/movies");

        cy.contains(movie.title).click();

        cy.url().should("include", `/movies/${movie.id}`);
    });
    it("should display the movie info", () => {
        cy.contains("h1", movie.title);
        cy.contains(movie.direction);
        cy.contains(movie.year);
    });
    it("should include the youtube video", () => {
        cy.get("iframe").its("0.src").should("include", movie.youtubeId);
    });
});

function getMovie() {
    return {
        direction: "Alexandre Djerbetian & Vladimir Kovalevsky",
        id: "chaque-homme-doit-inventer-son-chemin",
        title: "Chaque homme doit inventer son chemin",
        year: 2012,
        youtubeId: "uE2uYQ8dmzQ",
    };
}
