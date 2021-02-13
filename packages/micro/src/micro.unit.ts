import {
    buildPromiseObserver,
    pAll,
    retry,
    sleep,
    toArray,
    TooManyRetries,
    trimCommonIndentation,
} from "./micro";
import { expect, sandbox } from "./test/unit";
import { SinonFakeTimers } from "sinon";

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
describe("retry", () => {
    it("should retry the function as many times as required", async () => {
        const f = rejectNTimes(3, "result");

        expect(await retry(f)).to.equal("result");
    });
    it("should throw if the functions fails more than the max retry", async () => {
        const f = rejectNTimes(3, "result");

        await expect(retry(f, { max: 3 })).to.be.rejectedWith(TooManyRetries);
    });
    it("should not throw when the functions fails less than the max retry", async () => {
        const f = rejectNTimes(3, "result");

        expect(await retry(f, { max: 4 })).to.equal("result");
    });

    function rejectNTimes<T>(times: number, result: T) {
        let counter = 0;
        return async () => {
            if (counter++ < times) throw new Error("triggered failure");
            return result;
        };
    }
});
