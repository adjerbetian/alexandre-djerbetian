describe("Videos page", () => {
    before(() => {
        cy.viewport(1920, 1080);
        cy.visit("/videos");
    });

    it("should be accessible from the home page", () => {
        cy.visit("/");

        cy.contains("Videos").click();

        cy.url().should("include", "/videos");
    });
    it("should display the title", () => {
        cy.contains("h1", "Videos about coding");
        cy.contains("Here is a selection of videos I recommend.");
    });
    it("should display the videos", () => {
        cy.get(".video").should("have.length.greaterThan", 3);

        cy.contains("Clean Architecture");
    });
});
