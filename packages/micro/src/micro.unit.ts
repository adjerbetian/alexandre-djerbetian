import { expect } from "chai";
import { trimCommonIndentation } from "./micro";

describe("trimCommonIndentation", () => {
    it("should trim a single line", () => {
        const text = "    a    ";

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a");
    });
    it("should trim a two line with same indentation", () => {
        const line1 = "    a    ";
        const line2 = "    b    ";
        const text = [line1, line2].join("\n");

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a\nb");
    });
    it("should trim a two line with same indentation", () => {
        // prettier-ignore
        const text = [
            "    a    ",
            "        b    ",
        ].join("\n");

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a\n    b");
    });
    it("should remove the empty lines at the beginning and at the end", () => {
        // prettier-ignore
        const text = [
            "",
            "",
            "    a    ",
            "",
        ].join("\n");

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a");
    });
    it("should ignore the ident of the empty lines", () => {
        // prettier-ignore
        const text = [
            "    a    ",
            "",
            "             ",
            "        b    "
        ].join("\n");

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a\n\n\n    b");
    });
});
