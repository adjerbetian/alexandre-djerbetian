import { expect } from "chai";
import { createSandbox, SinonFakeTimers } from "sinon";
import {
    buildPromiseObserver,
    pAll,
    sleep,
    toArray,
    trimCommonIndentation
} from "./micro";

const sandbox = createSandbox();

beforeEach(() => sandbox.restore());

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
describe("buildPromiseObserver", () => {
    it("should set the done to true when the promise is done", async () => {
        const promise = sleep(10);

        const observer = buildPromiseObserver(promise);

        let done = observer.isDone();
        expect(done).to.be.false;

        await observer;

        done = observer.isDone();
        expect(done).to.be.true;
    });
});
describe("pAll", () => {
    let clock: SinonFakeTimers;

    beforeEach(() => {
        clock = sandbox.useFakeTimers();
    });

    it("should wait for all the promises before returning", async () => {
        const times = [10, 20, 30];

        const observer = buildPromiseObserver(
            pAll(times, async (time) => sleep(time))
        );

        expect(observer.isDone()).to.be.false;

        await clock.tickAsync(10);
        expect(observer.isDone()).to.be.false;

        await clock.tickAsync(10);
        expect(observer.isDone()).to.be.false;

        await clock.tickAsync(10);
        expect(observer.isDone()).to.be.true;
    });
    it("should return the results of the promises", async () => {
        const values = [10, 20, 30];

        const results = await pAll(values, async (v) => v);

        expect(results).to.deep.equal(values);
    });
    it("should pass indices to the callback", async () => {
        const values = [10, 20, 30];

        const results = await pAll(values, async (v, i) => i);

        expect(results).to.deep.equal([0, 1, 2]);
    });
});
describe("toArray", () => {
    it("should return the array filtered of falsy values", () => {
        expect(toArray(["", "a", "b", null])).to.deep.equal(["a", "b"]);
    });
    it("should return an array containing the given value", () => {
        expect(toArray("value")).to.deep.equal(["value"]);
        expect(toArray({ a: 2 })).to.deep.equal([{ a: 2 }]);
        expect(toArray(true)).to.deep.equal([true]);
    });
    it("should return an array when given falsy values", () => {
        expect(toArray(undefined)).to.deep.equal([]);
        expect(toArray(null)).to.deep.equal([]);
        expect(toArray("")).to.deep.equal([]);
        expect(toArray(false)).to.deep.equal([]);
    });
});
