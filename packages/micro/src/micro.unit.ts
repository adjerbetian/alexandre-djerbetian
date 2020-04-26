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
        const line1 = "    a    ";
        const line2 = "        b    ";
        const text = [line1, line2].join("\n");

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a\n    b");
    });
    it("should ignore the empty lines", () => {
        const text = "\n\n    a    \n            \n";

        const result = trimCommonIndentation(text);

        expect(result).to.equal("a");
    });
});
