import { getFillings } from "@/books/rating";
import { describe, it, expect } from "vitest";

describe("getFillings", () => {
    it("should return a full filling when given 5", () => {
        expect(getFillings(5)).toEqual([1, 1, 1, 1, 1]);
    });
    it("should return an empty filling when given 0", () => {
        expect(getFillings(0)).toEqual([0, 0, 0, 0, 0]);
    });
    it("should return a partial filling when given 2", () => {
        expect(getFillings(2)).toEqual([1, 1, 0, 0, 0]);
    });
    it("should return the decimal filling when given 2.5", () => {
        expect(getFillings(2.5)).toEqual([1, 1, 0.5, 0, 0]);
    });
});
