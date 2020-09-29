import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    pre: `
        This book is very famous and I have seen it many time referenced. But I was disappointed, maybe
        because my expectations were too high.
        
        This book has really aged a lot, and almost nothing is relevant today. Strangely, the 20th anniversary edition 
        made the book even worse because the added parts are just blabla, and it doesn't fix the previous parts. 
    `,
    good: `
        The only advantage I see is that it's interesting historically speaking. This book shows
        where we come from and how much the software techniques have changed since then.
        It shows how much what we have now was not granted, as the author advocates the complete 
        opposite of what is now considered good practice.
    `,
    lessGood: `
        - what the author recommends as a team organization is outdated and even wrong
            - it advocates a very top-down approach of work, in opposition of Agile
            - it advocates all the techniques of *Bid Design Up Front* and of the
              Waterfall approach in general (the author recognizes that's a mistake in additional chapter 19)
        - the examples are taken on computers I didn't hear about (*OS/360*, *IBM 709* etc.)
        - some concerns about code are just too old. For instance the author considers memory to be expensive
          and therefore advises to use monolithic programs rather than small functions in order to reduce
          space complexity.
        - the advised code examples are just horrible. They are the very examples of what people shouldn't do.
          Lot's of comments, variable names with one letter etc.
        - the additional chapters for the anniversary edition are a lot of blabla. Looks like it hasn't been written
          to be read, but to make the book bigger.
            - chapter 17 is a chapter in which the author takes his revenge on his detractors. Not
              interesting, and that doesn't glorify the author. I was really pissed while reading it,
              complete loss of time.
            - chapter 18 is useless and unreadable
    `,
};
