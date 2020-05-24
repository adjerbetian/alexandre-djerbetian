import { books } from "./books";

describe("books", () => {
    describe("quotes", () => {
        it("should all have a uniq id", () => {
            const uniqIds = new Set();
            const ids = books.flatMap((b) => b.quotes || []).map((q) => q.id);

            ids.forEach((id) => {
                if (uniqIds.has(id)) throw duplicatedId(id);
                uniqIds.add(id);
            });

            function duplicatedId(id: string) {
                return new Error(
                    `at least two quotes have the same id "${id}"`
                );
            }
        });
    });
});
