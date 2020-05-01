describe("Book page", () => {
    before(() => {
        cy.viewport(1920, 1080);
        cy.visit(`/books/clean-code`);
    });

    it("should be accessible from the books page", () => {
        cy.visit("/books");

        cy.contains("Clean Code").click();

        cy.url().should("include", "/books/clean-code");
    });
    it("should display the book infos", () => {
        cy.contains("h1", "Clean Code");
        cy.contains("Author: Robert C. Martin");
        cy.contains("Year: 2008");
        itShouldHaveHaveTheRating(5);
    });
});

function itShouldHaveHaveTheRating(rating: number) {
    cy.get("[data-test-id=star-1]").should("have.length", rating);
    cy.get("[data-test-id=star-0]").should("have.length", 5 - rating);
}
