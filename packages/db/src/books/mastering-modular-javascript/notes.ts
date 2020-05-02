import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    pre: `The book is interesting, but not mind blowing.`,
    good: `The first chapter makes a very good history of modules in JS.`,
    lessGood: `
        ## Missing references

        It's one of the only books I read that doesn't reference enough what it refers to. It's a pity because
        some of the introduced concepts are not new and are not better explained here than in the original books.

        Examples:
        - p70: *gard clauses* - no references to *Refactoring*
        - p72: discussion about *extract method* and *introduce explanatory variable* - no reference to the same discussion in *Refactoring*
        - p75: *step down rule* - no reference to *Clean Code*
        
        ## Not so much about modules

        The book lacks real examples on full modules, and on the contrary has a lot examples on low level
        language techniques.

        For example, the book has a whole part on treating long methods by extracting variables or functions,
        flattening callbacks or promise chains etc. Those topics are very important indeed, but they are not
        what we are looking for when reading a book on *modules*. I feel it's off topic.
    `
};

/*
- 113: "you'll seldom have to use inheritance"
- 114: revealing modules (at least 2nd paragraph)
- 115-118: factory function example
- 123: first paragraph
- 136: large current side
 */
