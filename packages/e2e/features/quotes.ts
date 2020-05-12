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
            .within(() =>
                cy.contains("Clean Code - chapter 1 - Clean Code, p8")
            );
    });
    it("should include the best quotes first (and not print the less good quotes)", () => {
        cy.contains("Clean code reads like well-written prose.");
        cy.contains(
            "There are two parts to learning craftsmanship: knowledge and work."
        ).should("not.exist");
    });
    describe("book filters", () => {
        it("should have one filter per book which have quotes", () => {
            cy.contains("div", "Filters").within(() => {
                cy.contains("Clean Code");
                cy.contains("Refactoring");
                cy.contains("Design Patterns");

                cy.contains("The Clean Coder").should("not.exist");
                cy.contains("Clean Architecture").should("not.exist");
            });
        });
        it("should check the filter when clicking on the filter", () => {
            clickOnFilter("Refactoring");
            checkboxFor("refactoring").should("be.checked");

            clickOnFilter("Refactoring");
            checkboxFor("refactoring").should("not.be.checked");
        });
        // prettier-ignore
        it("should change the url when filtering on a book", () => {
            clickOnFilter("Refactoring");
            cy.location("search").should("equal", "?books=refactoring");

            clickOnFilter("Clean Code");
            cy.location("search").should("equal", "?books=refactoring&books=clean-code");

            clickOnFilter("Refactoring");
            cy.location("search").should("equal", "?books=clean-code");

            clickOnFilter("Clean Code");
            cy.location("search").should("be.empty");
        });
        it("should check the right filters when loading a page with a book query", () => {
            cy.visit("/quotes?books=refactoring&books=clean-code");

            checkboxFor("refactoring").should("be.checked");
            checkboxFor("clean-code").should("be.checked");
            checkboxFor("design-patterns").should("not.be.checked");
        });
        it("should uncheck/recheck the right filter when navigating back and forth", () => {
            clickOnFilter("Refactoring");
            checkboxFor("refactoring").should("be.checked");

            cy.go("back");
            checkboxFor("refactoring").should("not.be.checked");

            cy.go("forward");
            checkboxFor("refactoring").should("be.checked");
        });
        it("should not show quotes from Clean Code when filtering for Refactoring", () => {
            cy.contains("Clean Code - chapter 1");

            cy.contains("div", "Filters").within(() =>
                cy.contains("Refactoring").click()
            );

            cy.contains("Clean Code - chapter 1").should("not.exist");
        });

        function clickOnFilter(name: string) {
            cy.contains("div", "Filters").within(() =>
                cy.contains(name).click()
            );
        }
        function checkboxFor(name: string) {
            return cy.get(`input[value=${name}]`);
        }
    });
});
