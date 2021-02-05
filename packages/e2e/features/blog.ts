describe("Blog page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/blog");
    });

    it.skip("should be accessible from the home page", () => {
        cy.visit("/");

        cy.contains("Blog").click();

        cy.url().should("include", "/blog");
    });
    it("should display the title", () => {
        cy.contains("h1", "Blog");
    });
    it("should display all the articles", () => {
        cy.get(".article-preview").should("have.length", 1);

        cy.contains("Hire Good Tilers, Not Good Engineers");
    });
});
describe("Article page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/blog/hire-good-tilers");
    });

    it("should be accessible from the blog page", () => {
        cy.visit("/blog");

        cy.contains("Hire Good Tilers").click();

        cy.url().should("include", "/blog/hire-good-tilers");
    });
    it("should print the article", () => {
        cy.contains("Hire Good Tilers");
        cy.contains(
            "Let's say you're looking for a tiler for your new kitchen's floor."
        );
    });
});
