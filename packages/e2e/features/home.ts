describe("Home page", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    describe("nav bar", () => {
        it("should have my name (in the nav bar)", () => {
            cy.title().should("equal", "Alexandre Djerbetian");
            cy.contains("Alexandre Djerbetian");
        });
        it("should have a link to my resume", () => {
            cy.contains("Resume");
        });
    });
});
