describe("Book page", () => {
    beforeEach(() => {
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
    it("should display the authors in plural when there are several authors", () => {
        cy.visit(`/books/refactoring`);
        cy.contains("Authors: Martin Fowler, Kent Beck");
        itShouldHaveHaveTheRating(4);
    });
    it("should display the reviews", () => {
        cy.contains("h2", "General review")
            .closest(".review")
            .within(() => {
                cy.contains("For me, this is the best introduction to coding");
            });
        cy.contains("h2", "What I especially liked")
            .closest(".review")
            .within(() => {
                cy.contains(
                    "It goes deep into the basics and details of writing good code"
                );
            });
        cy.contains("h2", "What I liked less")
            .closest(".review")
            .within(() => {
                cy.contains(
                    "Some chapters are not as well written than others"
                );
            });
    });
});

function itShouldHaveHaveTheRating(rating: number) {
    cy.get("[data-test-id=star-1]").should("have.length", rating);
    cy.get("[data-test-id=star-0]").should("have.length", 5 - rating);
}
