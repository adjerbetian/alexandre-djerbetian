describe("Movies page", () => {
    before(() => {
        cy.viewport(1920, 1080);
        cy.visit("/movies");
    });

    it("should be accessible from the home page", () => {
        cy.visit("/");

        cy.contains("Short movies").click();

        cy.url().should("include", "/movies");
    });
    it("should display the title", () => {
        cy.contains("h1", "List of directed short movies");
    });
    it("should display all the movies", () => {
        cy.get(".movie").should("have.length", 6);

        cy.contains("Chaque homme doit inventer son chemin");
        cy.contains("Le monde à l'envers");
        cy.contains("Royale with Cheese");
        cy.contains("120 ans d'histoire");
        cy.contains("The snowman and the Bee");
        cy.contains("Maxi Best Of");
    });
});
