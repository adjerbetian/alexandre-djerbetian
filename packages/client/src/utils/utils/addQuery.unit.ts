import { addQuery } from "./addQuery";

describe("addQuery", () => {
    it("should add the value to the query", () => {
        const result = addQuery("http://localhost/path", {
            book: "refactoring"
        });

        expect(result).toEqual("http://localhost/path?book=refactoring");
    });
    it("should add the array values to the query", () => {
        const result = addQuery("http://localhost/path", {
            books: ["refactoring", "clean-code"]
        });

        expect(result).toEqual(
            "http://localhost/path?books=refactoring&books=clean-code"
        );
    });
    it("should not do anything when given an empty query", () => {
        const result = addQuery("http://localhost/path", {});

        expect(result).toEqual("http://localhost/path");
    });
    it("should not do anything when given an empty array in the query", () => {
        const result = addQuery("http://localhost/path", { books: [] });

        expect(result).toEqual("http://localhost/path");
    });
});
