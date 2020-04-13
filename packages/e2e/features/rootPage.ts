describe("Root page", () => {
    it("should print my name", () => {
        cy.visit("/");

        cy.title().should("equal", "Alexandre Djerbetian");
        cy.contains("Alexandre Djerbetian");
    });
    it("should allow to go to the home page", () => {
        cy.contains("Enter").click();
        cy.location("pathname").should("eq", "/home");
    });
});
