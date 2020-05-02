describe("Quotes page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/quotes");
    });

    it("should be accessible from the home page", () => {
        cy.visit("/");

        cy.contains("Quotes").click();

        cy.url().should("include", "/quotes");
    });
    it("should display the title", () => {
        cy.contains("h1", "Some quotes");
    });
    it("should display only 10 quotes on the page", () => {
        cy.get(".quote").should("have.length", 10);
    });
    it("should include the best quotes first, and print their caption", () => {
        cy.contains("Clean code reads like well-written prose.")
            .closest(".quote")
            .should("have.id", "clean-code-p8-bis")
            .within(() => {
                cy.contains("Clean Code - chapter 1 - Clean Code, p8");
            });

        cy.get("#clean-code-pxxvi").should("not.exist");
    });
});
