import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    pre: `
        This is the best introduction to coding I've read (it's also my first so I might be biased).
        This is the book that gave me the passion for craftsmanship and, well, *Clean Code*!

        I really recommend this book to anyone who codes on a regular basis, from software developers to
        research scientists.
    `,
    good: `
        - It goes deep into the basics and details of writing good code: names, functions etc.
        - It's full of concrete examples
        - It has good illustrating stories
        - It has two complementary parts:
            - one theoretical part, where techniques are treated individually
            - one practical part, where the author cleans messy code using the different techniques together

        My favorite chapters are
        - 1. Clean Code
        - 3. Functions
        - 6. Objects and Data Structures
        - 16. Refactoring SerialDate
    `,
    lessGood: `
            Some chapters are not as well written than others, 
            especially the chapters written by guest authors.
             
            Also, it doesn't mention *premature optimization*, although I think it's one 
            of the main habits that really lead to obscure code.
    `,
};
