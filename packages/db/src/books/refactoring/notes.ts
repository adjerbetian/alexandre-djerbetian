import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
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
