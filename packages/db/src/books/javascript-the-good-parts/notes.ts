import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    pre: `
        This book is famous in Javascript, so I thought I should read it.
        
        This book didn't bring much to me. It is aimed at javascript beginners,
        but I think beginners would be disappointed too.
    `,
    good: `
        I will be honest, there is not much that I liked. But still, some clarifications on how javascript
        actually works were nice. Basically, this book gives a historical understanding of how Javascript worked
        before ES6, and it kinda explains why ES6 sometimes seems strange (no private methods for instance).

        The invocation patterns of chapter 4 about functions is very interesting.

        The size of this book is also appreciable (it's short). Even if I didn't learn so much,
        it was quick to read, so I have no regrets.
    `,
    lessGood: `
        The author sounds a bit arrogant:
         
        > This is not a book for dummies *p&nbsp;xi*
        > If you want to learn more about the bad parts and how to use them badly, consult any other JavaScript book *p3*
        
        The quotes of Shakespeare at the beginning of every chapter also sound ridiculous sometimes,
        because they are  completely out of context.

        I also didn't like his usage of what he calls "*railroads diagrams*", which are formal
        representations of how the language works / could be parsed. If it might be intellectually interesting
        as a exercise, as a reader it's super boring and don't bring anything.

        Finally, this book is now old, and today's JavaScript can be very different, with ES6 for instance.
    `
};
