import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    pre: `
        I learned a lot while reading this book. But one has to be warned: it's only when you have worked with
        legacy code that you can understand what this book can bring you.

        I first tried to read this book before having worked on a tangled messy legacy code. It wasn't exiting:
        solving problems you haven't even seen once... nope, not exciting.

        But once you face a real mess, then you understand what Martin Feather talk about, and even gets passionating!
    `,
    good: `
        A lot, a lot of good insights and code examples to tackle so many situations. Of course you won't
        remember then all (at least I didn't) but the logic is always the same and at the end, you almost manage
        to guess what will come.

        My favorite chapter are:
        - 6 - I Don't Have Much Time and I Have to Change It
        - 12 - I Need to Make Many Changes in One Area
        - 13 - I Need to Make a Change, but I Don't Know What Tests to Write
        - 20 - This Class Is Too Big and I Don't Want It to Get Any Bigger
        - 21 - I'm Changing the Same Code All Over the Place
    `,
    lessGood: `
        Unfortunately, it looks like this book was not released with care. The book has a lot of printing "*bugs*"
        which are annoying. One page that doesn't continue the text of the previous page, or a paragraph that repeats
        itself, or wrong positioning of the side black box.
    `
};
