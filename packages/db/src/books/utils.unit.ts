import { expect } from "chai";
import { boldify } from "./utils";

describe("utils", () => {
    describe("boldify", () => {
        it("should surround the multiple bold texts by b tag", () => {
            expectBoldifyToEqual([
                "**bold** not bold **bold**",
                "<b>bold</b> not bold <b>bold</b>"
            ]);
        });
        it("should return the text when there is nothing to boldify", () => {
            expectBoldifyToEqual([`coucou`, `coucou`]);
        });
        it("should not boldify when the opening tag has no closing tag", () => {
            expectBoldifyToEqual(["**bold", "**bold"]);
        });
        it("should work on a complex example", () => {
            expectBoldifyToEqual([
                `<pre>
                    <code>
                        <span>not bold</span>
                        not bold **bold** not bold
                        <span>not bold</span>
                        <span>**not bold**</span>
                    </code>
                </pre>`,
                `<pre>
                    <code>
                        <span>not bold</span>
                        not bold <b>bold</b> not bold
                        <span>not bold</span>
                        <span><b>not bold</b></span>
                    </code>
                </pre>`
            ]);
        });

        function expectBoldifyToEqual([text, expected]: [string, string]) {
            expect(boldify(text)).to.equal(expected);
        }
    });
});
