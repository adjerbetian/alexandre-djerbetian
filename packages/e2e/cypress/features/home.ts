describe("Home page", () => {
    it("should print my name", () => {
        cy.visit("/");

        cy.title().should("equal", "Alexandre Djerbetian");
        cy.contains("Alexandre Djerbetian");
    });
});
