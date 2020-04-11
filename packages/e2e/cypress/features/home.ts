describe("Home page", () => {
    it("should print the welcome message", () => {
        cy.visit("/");

        cy.contains("Welcome to Your Vue.js App");
    });
});
