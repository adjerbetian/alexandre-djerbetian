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
    it("display the title", () => {
        cy.contains("h1", "List of directed short movies");
    });
});
