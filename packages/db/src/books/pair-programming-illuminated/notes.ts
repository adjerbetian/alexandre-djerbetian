import { NotesDBModel } from "../dbModel";

export const notes: NotesDBModel = {
    chapters: [
        "Preface",
        "Introduction",
        "The Seven Myths of Pair Programming",
        "The Seven Synergistic Behaviors of Pair Programming",
        "Overcoming Management Resistance to Pair Programming",
        "Gaining Support and Acceptance from Your Peers",
        "Transitioning to Pair Programming by Choice",
        "Problem, Problems",
        "Workplace Layout",
        "Pair Rotation: Communication, Knowledge Management, and Training",
        "Other Issues to Consider",
        "Tips 'n Tricks",
        "Expert-Expert Pairing",
        "Expert-Average Pairing",
        "Expert-Novice Pairing",
        "Novice-Novice Pairing",
        "Extrovert-Extrovert Pairing",
        "Extrovert-Introvert Pairing",
        "Introvert-Introvert Pairing",
        "Gender Nonissue",
        "Culture Nonissue",
        "The Professional Driver Problem",
        '"My Partner Is a Total Loser" and Other Excess Ego Problems',
        '"My Partner Is SO Smart" and Other Too Little Ego Problems',
        "Pair Programming in a Software Process Case Study: Extreme Programming (XP)",
        "Pair Programming in a Software Process Case Study: Collaborative Software Process (CSP)",
        "Moving Ahead, Going Beyond",
        "Seven Habits of Effective Pair Programmers",
        "Appendix A.  Pair Programming Tutorial",
        "Appendix B.  An Economic Analysis of Pair Programming",
        "Appendix C.  Pair Programming in the Classroom",
        "Appendix D.  An Introduction to Test Driven Development"
    ],
    pre: `
        Interesting, but not mind blowing. I feel like I could summarize the core of the book in a few lines,
        and the rest is mostly blabla.
    `,
    good: `
        It's nice to have some figures on Pair Programming as it gives confidence in what otherwise would be just intuitive beliefs.
    `,
    lessGood: `
        This book is not concise and to the point. It repeats a lot of the same ideas, and sometimes even in the same unit (example:
        p21-p24: repetition that PP makes you not read your email).

        It also lacks real advice on how to practice PP: how much time before switching, how many breaks and how
        often etc. This books is more an academic essay than a inspiring book on how to spread the technique to new comers.
    `
};
