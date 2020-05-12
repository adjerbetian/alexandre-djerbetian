describe("Quote page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/quotes/the-boy-scout-rule");
    });

    it("should be accessible from the quotes page", () => {
        cy.visit("/quotes");

        cy.contains("The Boy Scout Rule")
            .closest(".quote")
            .within(() => {
                cy.contains("Clean Code - chapter 1 - Clean Code, p14").click();
                cy.url().should("include", "/quotes/the-boy-scout-rule");
            });
    });
    it("should print the quote", () => {
        cy.contains("The Boy Scout Rule");
        cy.contains("Leave the campground cleaner than you found it.");
    });
});
