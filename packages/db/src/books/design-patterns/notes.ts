import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    pre: `
        This book is a bible, or at least is considered such. I indeed think it's fundamental. But beware
        though, it's not an easy book as it looks more like an encyclopedia than like a story.
        
        I hope I will have time to reproduce those Design Patterns in TypeScript.
    `,
    good: `
        This book give the fundamentals about Design Patterns. Most importantly, it puts names on concepts, and
        that is maybe even more important than the patterns themselves and sometimes you might have found them
        yourself.

        I also liked that the discussion of each patterns are quite objectives with good pros and cons.
    `,
    lessGood: `
        I think the sections "Known Uses" are useless.

        Another negative aspect maybe is that the book doesn't address functional patterns that could be used in
        JS for instance.
    `,
};
