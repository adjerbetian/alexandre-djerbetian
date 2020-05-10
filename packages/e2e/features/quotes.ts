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
        it("should have one filter per book", () => {
            cy.contains("div", "Filters").within(() => {
                cy.contains("Clean Code");
                cy.contains("The Clean Coder");
                cy.contains("Clean Architecture");
                cy.contains("Refactoring");
                cy.contains("The Mythical Man-Month");
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

            clickOnFilter("Clean Architecture");
            cy.location("search").should("equal", "?books=refactoring&books=clean-architecture");

            clickOnFilter("Refactoring");
            cy.location("search").should("equal", "?books=clean-architecture");

            clickOnFilter("Clean Architecture");
            cy.location("search").should("be.empty");
        });
        it("should check the right filters when loading a page with a book query", () => {
            cy.visit("/quotes?books=refactoring&books=clean-architecture");

            checkboxFor("refactoring").should("be.checked");
            checkboxFor("clean-architecture").should("be.checked");
            checkboxFor("clean-code").should("not.be.checked");
        });
        it("should uncheck/recheck the right filter when navigating back and forth", () => {
            clickOnFilter("Clean Architecture");
            checkboxFor("clean-architecture").should("be.checked");

            cy.go("back");
            checkboxFor("clean-architecture").should("not.be.checked");

            cy.go("forward");
            checkboxFor("clean-architecture").should("be.checked");
        });
        it.skip("should not show quotes from Clean Code when filtering for Refactoring", () => {
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
