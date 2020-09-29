import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";

export const chapters = [
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
    "Appendix D.  An Introduction to Test Driven Development",
];

export const quotes: QuoteDBModel[] = [
    {
        chapter: 1,
        page: "3",
        id: "driver-and-navigator",
        content: `
            <p>
                Pair programming is a style of programming in which <i>two</i>
                programmers work side by side at one computer, continually
                collaborating on the same design, algorithm, code, or test.
                <strong>One of the pair, called the <i>driver</i>, is typing at 
                the computer or writing down a design. The other partner, called
                the <i>navigator</i>, has many jobs, one of which is to observe 
                the work of the driver </strong>[...]. The navigator is the 
                strategic, long-range thinker. Any of us can be guilty of 
                straying off the path, but a simple, "Can you explain what 
                you're doing?" from the navigator can bring us back to earth. 
                The navigator has a much more objective point of view and can 
                better think strategically about the direction of the work. 
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Definition],
        rating: 3,
    },
    {
        id: "effective-pair-programming-is-very-active",
        chapter: 1,
        page: "4",
        content: `
            <p>
                An effective pair programming relationship is very active.
                <strong>The driver and the navigator communicate, if only 
                through guttural utterances (as in, "Huh?"), at least every 45 
                to 60 seconds. It's also very important to switch roles 
                periodically between the driver and the navigator.</strong>
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Behaviour, quoteTags.Team],
        rating: 3,
    },
    {
        id: "why-do-pair-programming",
        chapter: 1,
        page: "4",
        content: `
            <p>
                Now that you know about pair programming, you might be
                wondering why on earth someone would want to pair. We'll be
                telling you much more about these reasons throughout the
                book, but now we will give you a preview of the benefits of
                pair programming that we've seen, experienced, and heard
                about.
            </p>
            <ol>
                <li>
                    <strong>Quality.</strong> Pairs produce code with fewer
                    defects.
                </li>
                <li>
                    <strong>Time.</strong> As best we can tell, pairs
                    produce higher-quality code in about half the time as
                    individuals. This shortens your cycle time without
                    impacting your overall budget while giving you superior
                    quality.
                </li>
                <li>
                    <strong>Morale.</strong> Pair programmers are happier
                    programmers. This helps job retention because employees
                    who are having fun are less likely to leave.
                </li>
                <li>
                    <strong>Trust and Teamwork.</strong> Pair programmers
                    get to know their teammates much better, which builds
                    trust and improves teamwork.
                </li>
                <li>
                    <strong>Knowledge Transfer.</strong> Pair programmers,
                    particularly those who don't pair with the same person
                    all the time, know more about the overall system.
                </li>
                <li>
                    <strong>Enhanced learning.</strong> Pairs continually
                    learn by watching how their partners approach a task,
                    how they use language capabilities, and how they use the
                    development tools.
                </li>
            </ol>
            <p>
                These benefits apply not only to new code development, but
                overwhelmingly to code maintenance/enhancement too.
            </p>
        `,
        tags: [
            quoteTags.PairPrograming,
            quoteTags.Team,
            quoteTags.Efficiency,
            quoteTags.Motivation,
            quoteTags.Organisation,
            quoteTags.Bugs,
        ],
        rating: 4,
    },
    {
        id: "the-more-complex-the-task-the-greater-the-need-for-two-brains",
        chapter: 1,
        page: "9",
        content: `
            <p>
                We use the word <i>programming</i> to include all phases of the
                development process (design, debugging, testing, and so on), not
                just coding. So, pair programming would include pair design,
                pair debugging, pair testing, and so on. [...] We believe people
                should pair at any time during development, in particular when
                they are working on something that is complex. <strong>The more 
                complex the task, the greater the need for two brains.</strong>
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Definition],
        rating: 3,
    },
    {
        id: "pair-programming-is-not-for-all",
        chapter: 1,
        page: "9",
        content: `
            <p>
                We really believe that no one should be forced to pair program. 
                [...]
            </p>
            <p>
                <strong>Ultimately, pair programming is not for all.</strong>
                Solo programmers can always contribute to our teams.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Team, quoteTags.Behaviour],
        rating: 4,
    },
    {
        id: "pair-programming-is-fun",
        chapter: 2,
        page: "21",
        content: `
            <p>
                In our recent Web survey, we asked, "What have you found
                beneficial about pair programming?" The single most common
                response was, <strong>"It's a lot more fun!"</strong>
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Motivation],
        rating: 4,
    },
    {
        id: "pair-programming-prevents-wasting-time-on-mindless-tasks",
        chapter: 2,
        page: "22",
        content: `
            <p>
                When you're working alone, you can (intentionally or
                unintentionally) hide in your cube and waste time on mindless
                tasks. Simply the presence of another can draw us out of our
                tired, disgruntled mood and cause us to get to work.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Motivation],
        rating: 2,
    },
    {
        id: "strength-in-numbers",
        chapter: 2,
        page: "27",
        content: `
            <p>
                When we work with someone else, we can piece together enough
                knowledge to feel confident in what we're doing. <strong>And, 
                if it looks right to me and it looks right to you — guess what — 
                it's probably right! Strength in numbers!</strong>
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Inspiring],
        rating: 3,
    },
    {
        id: "the-earlier-the-cheaper",
        chapter: 2,
        page: "27",
        content: `
            <p>
                Inspections [= Code Reviews] were introduced more than 20
                years ago as a cost-effective means of detecting and
                removing defects from software. Results from empirical
                studies (Fagan 1976) consistently profess the effectiveness
                of reviews. However, most programmers do not find
                inspections enjoyable or satisfying. [...]
            </p>
            <p>
                The theory on why inspections are effective is based on the
                prominent knowledge that <strong>the earlier a defect is found 
                in a product, the cheaper it is to fix the defect</strong>. 
                With pair programming, this problem identification occurs
                on a minute-by-minute basis. [...] These continual reviews
                outperform traditional, formal reviews in their
                defect-removal speed. Additionally, they eliminate the
                programmer's distaste for reviews since the reviews are
                implicit in what is typically an enjoyable pair-programming
                session.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Team],
        rating: 2,
    },
    {
        id: "pair-programming-prevents-indispensable-people",
        chapter: 4,
        page: "41",
        content: `
            <p>
                Weinberg (1998) has a maxim, "<strong>If a programmer is 
                indispensable, get rid of him as quickly as possible.</strong>" 
                His contention is that a project should not be a house of
                cards that collapses when a single "key" person is removed.
            </p>
            <p>
                <strong>With pair programming, the project risk associated with
                losing this key programmer is reduced</strong> because there 
                are multiple people familiar with each part of the system. If 
                a pair works together consistently, then there are two people 
                familiar with this particular area of the program. If the pairs 
                rotate, many people can be familiar with each part.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Team],
        rating: 4,
    },
    {
        id: "organize-and-dont-just-let-do",
        chapter: 6,
        page: "51",
        content: `
            <p>
                [Developers] are more satisfied with using software development
                innovations if [...] <strong>they have decreased process control 
                in how to use that innovation</strong>. The findings of the 
                study indicate that in a complex task environment, such as 
                software development, decreases in personal control can result 
                in greater satisfaction. <strong>This was a particularly 
                interesting finding that would discourage an "if you want to 
                pair, go ahead and pair—I don't care" arrangement</strong>
                and encourage a more organized approach of pairing and possibly
                the rotation of pairs, still giving the employees the freedom to
                choose when to pair and what to do when they pair. Likewise it
                is not advisable for the manager to say, "Now that you
                understand the theory of pair programming, I will let each of
                your teams decide how best to practice it." This gives the
                developers too much process control leading to confusion on how
                best to implement the technique and the risk of different teams
                using disparate, and maybe conflicting, pair programming
                techniques. Thus the manager thinks he is giving the developers
                desired flexibility; instead, he is creating a confusing
                environment for practicing the technique. Some level of
                consistent organizational standards and procedures for
                implementing pair programming is essential.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Motivation, quoteTags.Team],
        rating: 3,
    },
    {
        id: "raise-your-own-problems",
        chapter: 4,
        page: "53",
        content: `
            <p>
                In presentations, bring up the negative things you have heard or
                anticipate what your detractors might say. If you don't bring
                these issues up, you are more vulnerable when someone else
                raises them.
            </p>
        `,
        tags: [quoteTags.Inspiring, quoteTags.Behaviour],
        rating: 3,
    },
    {
        id: "dont-use-finger-on-screens",
        chapter: 8,
        page: "71",
        content: `
            <h3>One Last Thing</h3>
            <p>
                The navigator should not point on the screen with a finger.
                You know how we programmers hate paw prints on our displays!
                Use a stylus instead.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Behaviour],
        rating: 3,
    },
    {
        id: "rotating-pairs-disseminate-knowledge",
        chapter: 9,
        page: "77",
        content: `
            <p>
                Good knowledge management techniques are important for employers
                and employees alike. Truly, it is not advantageous to have all
                knowledge in any area of a system known to only one person. For
                the employer, this is very risky because the loss of one or a
                few individuals can be debilitating. And employees like to take
                some time off without being bothered with technical questions or
                problems. By rotating pairs, knowledge is disseminated;
                <strong>employers reduce risk, and employees can relax when out 
                of the office</strong>.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Team, quoteTags.Business],
        rating: 3,
    },
    {
        id: "pair-programming-and-code-reviews",
        chapter: 10,
        page: "86",
        content: `
            <p>
                we've heard of several organizations that do not produce
                life/safety critical systems that have substituted pair reviews
                for code reviews; pair programming is a continual code review
                itself. However, as we discuss in Chapter 26, a piece of
                research that still must be done is a formal experiment to
                assess the effectiveness of code reviewing pair programmed code.
                It is likely that pair programmed code does not need to be
                reviewed. However, we are not qualified to declare that just
                yet.
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Team],
        rating: 3,
    },
    {
        id: "xp-and-bduf",
        chapter: 24,
        page: "174",
        content: `
            <p>
                XP does not produce big design documents before getting started.
                XP'ers call this BDUF for "big design up front" and believe that
                the development of these documents is not cost-effective.
                <strong>The idea here is that software engineers change their 
                minds about how they will implement something once they try it 
                and once they get feedback on completed work.</strong>
                If you skip the documentation step, you will start producing
                software assets that have value to your customer, not just to
                your documents. Surely there will be rework and refactoring
                because of the lack of up-front design, but there will be less
                time spent reworking and refactoring than would have gone into
                the BDUF. <strong>In addition, you will have assets, not 
                paper.</strong> After a release is completed, some XP teams also 
                create some bare-bones documentation that records what they did 
                do, not what they planned to do.
            </p>
        `,
        tags: [quoteTags.History],
        rating: 4,
    },
    {
        chapter: 26,
        page: "195",
        id: "pair-programming-is-not-only-with-two-developers",
        content: `
            <p>
                <strong>The pairs don't need to be comprised of two code 
                developers.</strong> In the scenario in the first chapter, 
                the privacy expert paired with the Web form designer, ensuring 
                that the forms did not violate any privacy policies. User 
                interface specialists or Web page artists/designers can pair 
                with programmers. (After all, some of us who were given the 
                ability to program were slighted in the artistic part of the 
                brain.) Jim Coplien reports, "At Mediagenix, a tester sometimes 
                pairs with a developer as the tester drives with tests, and the 
                developer fixes bugs. This makes it possible to circumvent the 
                project's formal bug reporting bureaucracy, reducing the time to 
                a stable load" (2002). Last, we've heard many reports of 
                developers pairing with customers, which has the added advantage 
                of real-time requirements clarification.
            </p>
        `,
        tags: [quoteTags.PairPrograming],
        rating: 3,
    },
    {
        id: "colocated-teams-perform-better",
        chapter: 26,
        page: "197",
        content: `
            <p>
                What if pairs cannot be physically next to each other?
                <strong>It has been established that distance does matter</strong>
                (Olson and Olson 2000); colocated teams perform better.
                Therefore it is predicted that face-to-face pair programmers
                will outperform distributed pair programmers in terms of sheer
                productivity.
            </p>
        `,
        tags: [quoteTags.PairPrograming],
        rating: 2,
    },
    {
        chapter: 27,
        page: "203",
        id: "take-breaks",
        content: `
            <h3>Habit 1: Take breaks</h3>
            <p>
                [...] At a minimum, each hour stand up, stretch, and look at
                something more than three feet away!
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Behaviour],
        rating: 2,
    },
    {
        chapter: 28,
        page: "211",
        id: "try-pair-programming-first",
        content: `
            <p>
                <strong>[People] are often resistant to trying pair programming 
                but then are quite enthusiastic once they've actually tried 
                it.</strong>
            </p>
        `,
        tags: [quoteTags.PairPrograming, quoteTags.Motivation],
        rating: 4,
    },
];
