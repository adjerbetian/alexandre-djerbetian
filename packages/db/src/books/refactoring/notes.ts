import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    chapters: [
        "Preface",
        "Refactoring, a First Example",
        "Principles in Refactoring",
        "Bad Smells in Code",
        "Building Tests",
        "Toward a Catalog of Refactorings",
        "Composing Methods",
        "Moving Features Between Objects",
        "Organizing Data",
        "Simplifying Conditional Expressions",
        "Making Method Calls Simpler",
        "Dealing with Generalization",
        "Big Refactorings",
        "Refactoring, Reuse, and Reality",
        "Refactoring Tools",
        "Putting It All Together"
    ],
    pre: `
        Martin Fowler is a big name, and his book undeniably benefits from his renown. And the fact that Kent
        Beck also helped doesn't hurt...

        I'm eager to read the second edition!
    `,
    good: `
        - Chapter 2 (*Principles in Refactoring*) is a must read. It's very inspiring and full of good insights.
        - Reading all the diverse refactoring techniques gives ideas of what can be done.
        - A lot of inspiring thoughts are spread throughout the book.
    `,
    lessGood: `
        Although still very good, I think the book got a bit old. The refactoring steps are too detailed for me, and
        don't bring much value as IDEs natively integrate most of the main ideas today.
        
        But there is a second edition now! And in JS!!
    `
};
