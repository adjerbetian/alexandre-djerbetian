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
    it("should print the quote's caption", () => {
        cy.contains("Clean code reads like well-written prose.")
            .closest(".quote")
            .within(() => {
                cy.contains("Clean Code - chapter 1 - Clean Code, p8");
            });
    });
    it("should include the best quotes first (and not print the less good quotes)", () => {
        cy.contains("Clean code reads like well-written prose.");
        cy.contains("There are two parts to learning craftsmanship: knowledge and work.").should("not.exist");
    });
});
