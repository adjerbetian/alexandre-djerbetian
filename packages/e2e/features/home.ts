describe("Home page", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("/");
    });

    describe("nav bar", () => {
        it("should have my name (in the nav bar)", () => {
            cy.title().should("equal", "Alexandre Djerbetian");
            cy.contains("Alexandre Djerbetian");
        });
        it("should display the navbar", () => {
            itShouldContainTheNavbar();
        });
    });
    describe("on mobile", () => {
        beforeEach(() => {
            cy.viewport(411, 731);
            cy.reload();
        });

        it("should display the navbar", () => {
            itShouldContainTheNavbar();
        });
    });
    function itShouldContainTheNavbar() {
        expectTextToBeVisible("Resume");
        expectTextToBeVisible("Blog");
        expectTextToBeVisible("Library");
        expectTextToBeVisible("Quotes");
        expectTextToBeVisible("Videos");
        expectTextToBeVisible("Short movies");
    }
    function expectTextToBeVisible(text: string) {
        cy.contains(text).should("be.visible");
    }
});
