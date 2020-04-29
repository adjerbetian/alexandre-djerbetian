describe("Books page", () => {
    before(() => {
        cy.viewport(1920, 1080);
        cy.visit("/books");
    });

    it("should be accessible from the home page", () => {
        cy.visit("/");

        cy.contains("Books").click();

        cy.url().should("include", "/books");
    });
    it("should display the title", () => {
        cy.contains("h1", "Coding books library");
    });
    it("should display all the books", () => {
        cy.get(".book").should("have.length.greaterThan", 6);
    });
    it("should display the books title", () => {
        cy.contains("Clean Code");
        cy.contains("Test Driven Development");
    });
    it("should display the books ratings", () => {
        cy.contains("Clean Code").closest(".book").contains(".rating", 5);
        cy.contains("The Lean Startup").closest(".book").contains(".rating", 1.5);
    });
    it("should display the books main author", () => {
        cy.contains("Clean Code").closest(".book").contains(".author", "Robert C. Martin");
        cy.contains("The Lean Startup").closest(".book").contains(".author", "Erich Ries");
    });
});
