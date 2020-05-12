import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { java } from "../utils";

export const chapters = [
    "Introduction",
    "Clean Code",
    "Meaningful Names",
    "Functions",
    "Comments",
    "Formatting",
    "Objects and Data Structures",
    "Error Handling",
    "Boundaries",
    "Unit Tests",
    "Classes",
    "Systems",
    "Emergence",
    "Concurrency",
    "Successive Refinement",
    "JUnit Internals",
    "Refactoring SerialDate",
    "Smells and Heuristics",
    "Appendix A: Concurrency II",
    "Appendix B: org.jfree.date.SerialDate",
    "Appendix C: Cross References of Heuristics",
    "Epilogue"
];

export const quotes: QuoteDBModel[] = [
    {
        id: "learning-craftsmanship-is-like-riding-a-bicycle",
        chapter: 0,
        page: "xxvi",
        content: `
            <p>
                <strong>There are two parts to learning craftsmanship: knowledge
                and work.</strong> You must gain the knowledge of principles,
                patterns, practices, and heuristics that a craftsman knows, and 
                you must also grind that knowledge into your fingers, eyes, and
                gut by working hard and practicing.
            </p>
            <p>
                <strong>I can teach you the physics of riding a bicycle.</strong>
                Indeed, the classical mathematics is relatively
                straightforward. Gravity, friction, angular momentum, center
                of mass, and so forth, can be demonstrated with less than a
                page full of equations. Given those formulae I could prove
                to you that bicycle riding is practical and give you all the
                knowledge you needed to make it work. <strong>And you’d still 
                fall down the first time you climbed on that bike.</strong>
            </p>
            <p>
                <strong>Coding is no different.</strong> We could write down
                all the “feel good” principles of clean code and then trust
                you to do the work (in other words, let you fall down when
                you get on the bike), but then what kind of teachers would
                that make us, and what kind of student would that make you?
            </p>
            <p>
                No. That’s not the way this book is going to work.
            </p>
            <p>
                Learning to write clean code is <i>hard work</i>. It
                requires more than just the knowledge of principles and
                patterns. You must <i>sweat</i> over it. You must practice
                it yourself, and watch yourself fail. You must watch others
                practice it and fail. You must see them stumble and retrace
                their steps. You must see them agonize over decisions and
                see the price they pay for making those decisions the wrong
                way.
            </p>
        `,
        tags: [
            quoteTags.Motivation,
            quoteTags.PersonalHabits,
            quoteTags.Inspiring,
            quoteTags.Efficiency,
            quoteTags.Comparison
        ],
        rating: 2
    },
    {
        id: "cost-of-bad-code",
        chapter: 1,
        page: "3",
        content: `
            <h3>Bad Code</h3>
            <p>
                [...] They had rushed the product to market and had made a
                huge mess in the code. As they added more and more features,
                the code got worse and worse until they simply could not
                manage it any longer. <strong><i>It was the bad code that 
                brought the company down</i></strong>.
            </p>
            <p>
                If you have experienced even one small part of the story I
                just told, then you already know that <strong>spending time keeping
                your code clean is not just cost effective; it’s a matter of
                professional survival.</strong>
            </p>
        `,
        tags: [quoteTags.BadCode, quoteTags.Inspiring, quoteTags.Efficiency],
        rating: 5
    },
    {
        id: "bad-code-is-our-fault",
        chapter: 1,
        page: "5",
        content: `
            <p>
                Why does this happen to code? Why does good code rot so quickly
                into bad code? We have lots of explanations for it. We complain
                that the requirements changed in ways that thwart the original
                design. We bemoan the schedules that were too tight to do things
                right. We blather about stupid managers and intolerant customers
                and useless marketing types and telephone sanitizers. <strong>But the
                fault, dear Dilbert, is not in our stars, but in ourselves. We 
                are unprofessional.</strong>
            </p>
        `,
        tags: [
            quoteTags.BadCode,
            quoteTags.PersonalHabits,
            quoteTags.Motivation,
            quoteTags.Common,
            quoteTags.Inspiring,
            quoteTags.Efficiency
        ],
        rating: 5
    },
    {
        id: "take-the-time-to-go-fast",
        chapter: 1,
        page: "6",
        content: `
            <p>
                Programmers face a conundrum of basic values. All developers
                with more than a few years experience know that previous
                messes slow them down. And yet all developers feel the
                pressure to make messes in order to meet deadlines. In
                short, <strong>they don’t take the time to go fast!</strong>
            </p>
            <p>
                True professionals know that the second part of the
                conundrum is wrong. You will not make the deadline by making
                the mess. Indeed, the mess will slow you down instantly, and
                will force you to miss the deadline. <strong>The <i>only</i> way to make
                the deadline—the only way to go fast—is to keep the code as 
                clean as possible at all times.</strong>
            </p>
        `,
        tags: [
            quoteTags.Common,
            quoteTags.BadCode,
            quoteTags.CodingHabits,
            quoteTags.PersonalHabits,
            quoteTags.Inspiring,
            quoteTags.Efficiency
        ],
        rating: 5
    },
    {
        id: "clean-code-is-like-painting",
        chapter: 1,
        page: "6",
        content: `
            <p>
                The bad news is that writing clean code is a lot like painting a
                picture. Most of us know when a picture is painted well or
                badly. But being able to recognize good art from bad does not
                mean that we know how to paint. <strong>So too being able to recognize 
                clean code from dirty code does not mean that we know how to write
                clean code!</strong>
            </p>
        `,
        tags: [quoteTags.BadCode, quoteTags.Behaviour, quoteTags.Comparison],
        rating: 4
    },
    {
        id: "clean-code-does-one-thing-well",
        chapter: 1,
        page: "8",
        content: `
            <p>
                [...] <strong>clean code does one thing well</strong>. It is no
                accident that there are so many principles of software design
                that can be boiled down to this simple admonition. Writer after
                writer has tried to communicate this thought.
                <strong>Bad code tries to do too much</strong>, it has muddled
                intent and ambiguity of purpose. Clean code is <i>focused</i>
                Each function, each class, each module exposes a single-minded
                attitude that remains entirely undistracted, and unpolluted, by
                the surrounding details.
            </p>
        `,
        tags: [
            quoteTags.BadCode,
            quoteTags.Clarity,
            quoteTags.Common,
            quoteTags.Inspiring
        ],
        rating: 4
    },
    {
        id: "clean-code-reads-like-well-written-prose",
        chapter: 1,
        page: "8",
        content: `
            <p>
                <strong>"<i>Clean code reads like well-written prose.</i>"</strong>
                [citation of Grady Booch]
            </p>
        `,
        tags: [
            quoteTags.Clarity,
            quoteTags.Definition,
            quoteTags.Inspiring,
            quoteTags.Comparison
        ],
        rating: 5
    },
    {
        id: "code-without-tests-is-not-clean",
        chapter: 1,
        page: "9",
        content: `
            <p>
                Dave [Thomas] ties cleanliness to tests! Ten years ago this
                would have raised a lot of eyebrows. But the discipline of Test
                Driven Development has made a profound impact upon our industry
                and has become one of our most fundamental disciplines. Dave is
                right. <strong>Code, without tests, is not clean.</strong> No matter how 
                elegant it is, no matter how readable and accessible, if it hath
                not tests, it be unclean.
            </p>
        `,
        tags: [quoteTags.Tests, quoteTags.TDD],
        rating: 3
    },
    {
        id: "clean-code-read-as-expected",
        chapter: 1,
        page: "11",
        content: `
            <p>
                <strong>"<i>You know you are working on clean code when each routine
                you read turns out to be pretty much what you expected.</i>"</strong>
                [citation of Ward Cunningham]
            </p>
        `,
        tags: [quoteTags.Clarity, quoteTags.Inspiring],
        rating: 3
    },
    {
        id: "clean-code-looks-ridiculously-simple",
        chapter: 1,
        page: "12",
        content: `
            <p>
                <strong>Programs that are <i>that</i> clean are so profoundly well written 
                that you don’t even notice it. The designer makes it look 
                ridiculously simple like all exceptional designs.</strong>
            </p>
        `,
        tags: [quoteTags.Clarity, quoteTags.Inspiring],
        rating: 3
    },
    {
        id: "clean-makes-the-langage-made-for-problem",
        chapter: 1,
        page: "12",
        content: `
            <p>
                And what about Ward [Cunningham]’s notion of beauty? We’ve all
                railed against the fact that our languages weren’t designed for
                our problems. But Ward’s statement puts the onus back on us. He
                says that beautiful code <i>makes the language look like it was 
                made for the problem</i>! So it’s our responsibility to make the 
                language look simple! Language bigots everywhere, beware! It is 
                not the language that makes programs appear simple. <strong>It is the 
                programmer that make the language appear simple!</strong>
            </p>
        `,
        tags: [quoteTags.Clarity, quoteTags.Inspiring],
        rating: 2
    },
    {
        id: "if-you-want-your-code-to-be-easy-to-write-make-it-easy-to-read",
        chapter: 1,
        page: "14",
        content: `
            <p>
                Indeed, the ratio of time spent reading vs. writing is well
                over 10:1. We are <i>constantly</i> reading old code as part
                of the effort to write new code.

                Because this ratio is so high, we want the reading of code
                to be easy, even if it makes the writing harder. Of course
                there’s no way to write code without reading it, so <i>making 
                it easy to read actually makes it easier to write</i>.

                There is no escape from this logic. You cannot write code if
                you cannot read the surrounding code. The code you are
                trying to write today will be hard or easy to write
                depending on how hard or easy the surrounding code is to
                read. So if you want to go fast, if you want to get done
                quickly, <strong>if you want your code to be easy to write, make 
                it easy to read.</strong>
            </p>
        `,
        tags: [quoteTags.Efficiency, quoteTags.Clarity],
        rating: 3
    },
    {
        id: "the-boy-scout-rule",
        chapter: 1,
        page: "14",
        content: `
            <h3>The Boy Scout Rule</h3>
            <p>
                It’s not enough to write the code well. The code has to be
                kept clean over time. We’ve all seen code rot and degrade as
                time passes. So we must take an active role in preventing
                this degradation.
            </p>
            <p>
                The Boy Scouts of America have a simple rule that we can
                apply to our profession.
            </p>
            <p>
                <strong><i>Leave the campground cleaner than you found it.</i></strong>
            </p>
            <p>
                If we all checked-in our code a little cleaner than when we
                checked it out, the code simply could not rot. The cleanup
                doesn’t have to be something big. Change one variable name
                for the better, break up one function that’s a little too
                large, eliminate one small bit of duplication, clean up one
                composite if statement.
            </p>
            <p>
                Can you imagine working on a project where the code simply
                got better as time passed? Do you believe that any other
                option is professional? Indeed, isn’t continuous improvement
                an intrinsic part of professionalism?
            </p>
        `,
        tags: [
            quoteTags.Inspiring,
            quoteTags.Definition,
            quoteTags.Behaviour,
            quoteTags.CodingHabits,
            quoteTags.Comparison
        ],
        rating: 5
    },
    {
        id: "practice-son-practice",
        chapter: 1,
        page: "15",
        content: `
            <p>
                Remember the old joke about the concert violinist who got lost
                on his way to a performance? He stopped an old man on the corner
                and asked him how to get to Carnegie Hall. The old man looked at
                the violinist and the violin tucked under his arm, and said:
                “Practice, son. Practice!”
            </p>
        `,
        tags: [
            quoteTags.Behaviour,
            quoteTags.Inspiring,
            quoteTags.Humor,
            quoteTags.Comparison
        ],
        rating: 3
    },
    {
        id: "good-names-dont-require-comments",
        chapter: 2,
        page: "18",
        content: `
            <p>
                The name of a variable, function, or class, should answer all
                the big questions. It should tell you why it exists, what it
                does, and how it is used. <strong>If a name requires a comment, then
                the name does not reveal its intent.</strong>
            </p>
        `,
        tags: [quoteTags.Naming, quoteTags.Clarity],
        rating: 4
    },
    {
        id: "names-should-reveal-the-intent-explicitly",
        chapter: 2,
        page: "18",
        content: `
            <p>
                Choosing names that reveal intent can make it much easier to
                understand and change code. What is the purpose of this code?
            </p>
            ${java(`
                public List<int[]> getThem() {
                    List<int[]> list1 = new ArrayList<int[]>();
                    for (int[] x : theList)
                            if (x[0] == 4)
                                list1.add(x);
                    return list1;
                }
            `)}
            <p>
                Why is it hard to tell what this code is doing? There are no
                complex expressions. Spacing and indentation are reasonable.
                There are only three variables and two constants mentioned.
                There aren’t even any fancy classes or polymorphic methods,
                just a list of arrays (or so it seems).
            </p>
            <p>
                <strong>The problem isn’t the simplicity of the code but the implicity
                of the code</strong> (to coin a phrase): the degree to which the context
                is not explicit in the code itself. The code implicitly requires
                that we know the answers to questions such as:
            </p>
            <p>
                1. What kinds of things are in \`theList\`?
                2. What is the significance of the zeroth subscript of an item in \`theList\`?
                3. What is the significance of the value 4?
                4. How would I use the list being returned?
            </p>
        `,
        tags: [quoteTags.Naming, quoteTags.Code],
        rating: 3
    },
    {
        id: "clarity-is-king",
        chapter: 2,
        page: "25",
        content: `
                One difference between a smart programmer and a professional
                programmer is that the professional understands that
                <i>clarity is king</i>. Professionals use their powers for good
                and write code that others can understand.
        `,
        tags: [quoteTags.Clarity, quoteTags.Inspiring],
        rating: 4
    },
    {
        id: "small-and-even-smaller",
        chapter: 3,
        page: "34",
        content: `
            <h3>Small!</h3>
            <p>
                <strong>The first rule of functions is that they should be small.
                The second rule of functions is that they should be smaller 
                than that.</strong> This is not an assertion that I can justify. 
                I can’t provide any references to research that shows that 
                very small functions are better. What I can tell you is that 
                for nearly four decades I have written functions of all different
                sizes. I’ve written several nasty 3,000-line abominations.
                I’ve written scads of functions in the 100 to 300 line
                range. And I’ve written functions that were 20 to 30 lines
                long. What this experience has taught me, through long trial
                and error, is that functions should be very small.
            </p>
            <p>
                In the eighties we used to say that a function should be no
                bigger than a screen-full. Of course we said that at a time
                when VT100 screens were 24 lines by 80 columns, and our
                editors used 4 lines for administrative purposes. Nowadays
                with a cranked-down font and a nice big monitor, you can fit
                150 characters on a line and a 100 lines or more on a
                screen. Lines should not be 150 characters long. Functions
                should not be 100 lines long. <strong>Functions should hardly ever 
                be 20 lines long.</strong>
            </p>
            <p>
                How short should a function be? In 1999 I went to visit Kent
                Beck at his home in Oregon. We sat down and did some
                programming together. At one point he showed me a cute
                little Java/Swing program that he called Sparkle. It
                produced a visual effect on the screen very similar to the
                magic wand of the fairy godmother in the movie Cinderella.
                As you moved the mouse, the sparkles would drip from the
                cursor with a satisfying scintillation, falling to the
                bottom of the window through a simulated gravitational field.
                When Kent showed me the code, I was struck by how small all
                the functions were. I was used to functions in Swing
                programs that took up miles of vertical space. <strong>Every function 
                in this program was just two, or three, or four lines long.</strong>
                Each was transparently obvious. Each told a story. And each
                led you to the next in a compelling order. That’s how short
                your functions should be!
            <p>
        `,
        tags: [
            quoteTags.Clarity,
            quoteTags.CodingHabits,
            quoteTags.Definition,
            quoteTags.LongMethod
        ],
        rating: 4
    },
    {
        id: "boundary-tension",
        chapter: 8,
        page: "114",
        content: `
            <p>
                There is a natural tension between the provider of an interface
                and the user of an interface. Providers of third-party packages
                and frameworks strive for broad applicability so they can work
                in many environments and appeal to a wide audience. Users, on
                the other hand, want an interface that is focused on their
                particular needs. This tension can cause problems at the
                boundaries of our systems.
            </p>
        `,
        tags: [quoteTags.Structure],
        rating: 3
    },
    {
        id: "boundary-interface",
        chapter: 8,
        page: "115",
        content: `
            <p>
                No user of Sensors would care one bit if generics were used
                or not. <strong>That choice has become (and always should be) an
                implementation detail.</strong>
            </p>
            ${java(`
                public class Sensors {
                    private Map sensors = new HashMap();

                    public Sensor getById(String id) {
                        return (Sensor) sensors.get(id);
                    }

                    //snip
                }
            `)}
            <p>
                <strong>The interface at the boundary (Map) is hidden.</strong>
                It is able to evolve with very little impact on the rest of
                the application. The use of generics is no longer a big
                issue because the casting and type management is handled
                inside the Sensors class.
            </p>
            <p>
                <strong>This interface is also tailored and constrained to meet
                the needs of the application.</strong> It results in code that is 
                easier to understand and harder to misuse. The Sensors class 
                can enforce design and business rules.
            </p>
        `,
        tags: [
            quoteTags.Structure,
            quoteTags.Common,
            quoteTags.Code,
            quoteTags.Dependency
        ],
        rating: 3
    },
    {
        id: "learning-tests",
        chapter: 8,
        page: "116",
        content: `
            <p>
                Learning the third-party code is hard. Integrating the
                third-party code is hard too. Doing both at the same time is
                doubly hard. What if we took a different approach? Instead
                of experimenting and trying out the new stuff in our
                production code, we could write some tests to explore our
                understanding of the third-party code. Jim Newkirk calls
                such tests <strong><i>learning tests.</i></strong>
            </p>
            <p>
                In learning tests we call the third-party API, as we expect
                to use it in our application. We’re essentially doing
                controlled experiments that check our understanding of that
                API. The tests focus on what we want out of the API.
            </p>
            <p>
                [...] Not only are learning tests free, they have a positive
                return on investment. <strong>When there are new releases of the 
                third-party package, we run the learning tests to see whether 
                there are behavioral differences.</strong>
            </p>
            <p>
                Whether you need the learning provided by the learning tests
                or not, a clean boundary should be supported by a set of
                outbound tests that exercise the interface the same way the
                production code does. <strong>Without these boundary tests to ease 
                the migration, we might be tempted to stay with the old version 
                longer than we should.</strong>
            </p>
        `,
        tags: [
            quoteTags.Dependency,
            quoteTags.Tests,
            quoteTags.CodingHabits,
            quoteTags.Definition
        ],
        rating: 4
    },
    {
        id: "the-three-laws-of-tdd",
        chapter: 9,
        page: "122",
        content: `
            <h3>The Three Laws of TDD</h3>
            <p>
                By now everyone knows that TDD asks us to write unit tests
                first, before we write production code. But that rule is
                just the tip of the iceberg. Consider the following three
                laws:
            </p>
            <p>
                <strong>First Law</strong> You may not write production code
                until you have written a failing unit test.
            </p>
            <p>
                <strong>Second Law</strong> You may not write more of a unit
                test than is sufficient to fail, and not compiling is
                failing.
            </p>
            <p>
                <strong>Third Law</strong> You may not write more production
                code than is sufficient to pass the currently failing test.
            </p>
            <p>
                These three laws lock you into a cycle that is perhaps
                thirty seconds long. The tests and the production code are
                written together, with the tests just a few seconds ahead of
                the production code.
            </p>
        `,
        tags: [
            quoteTags.Tests,
            quoteTags.CodingHabits,
            quoteTags.Definition,
            quoteTags.TDD
        ],
        rating: 3
    },
    {
        id: "keeping-tests-clean",
        chapter: 9,
        page: "123",
        content: `
            <h3>Keeping Tests Clean</h3>
            <p>
                Some years back I was asked to coach a team who had
                explicitly decided that their test code should not be
                maintained to the same standards of quality as their
                production code. They gave each other license to break the
                rules in their unit tests. “Quick and dirty” was the
                watchword. Their variables did not have to be well named,
                their test functions did not need to be short and
                descriptive. Their test code did not need to be well
                designed and thoughtfully partitioned. So long as the test
                code worked, and so long as it covered the production
                code, it was good enough.
            </p>
            <p>
                Some of you reading this might sympathize with that
                decision. Perhaps, long in the past, you wrote tests of the
                kind that I wrote for that Timer class. It’s a huge step
                from writing that kind of throw-away test, to writing a
                suite of automated unit tests. So, like the team I was
                coaching, you might decide that having dirty tests is better
                than having no tests.
            </p>
            <p>
                What this team did not realize was that having dirty tests
                is equivalent to, if not worse than, having no tests. The
                problem is that tests must change as the production code
                evolves. The dirtier the tests, the harder they are to
                change. The more tangled the test code, the more likely it
                is that you will spend more time cramming new tests into the
                suite than it takes to write the new production code. As you
                modify the production code, old tests start to fail, and the
                mess in the test code makes it hard to get those tests to
                pass again. So the tests become viewed as an ever-increasing
                liability.
            </p>
            <p>
                From release to release the cost of maintaining my team’s
                test suite rose. Eventually it became the single biggest
                complaint among the developers. When managers asked why
                their estimates were getting so large, the developers blamed
                the tests. In the end they were forced to discard the test
                suite entirely. But, without a test suite they lost the
                ability to make sure that changes to their code base worked
                as expected. Without a test suite they could not ensure that
                changes to one part of their system did not break other
                parts of their system. So their defect rate began to rise.
                As the number of unintended defects rose, they started to
                fear making changes. They stopped cleaning their production
                code because they feared the changes would do more harm than
                good. Their production code began to rot. In the end they
                were left with no tests, tangled and bug-riddled production
                code, frustrated customers, and the feeling that their
                testing effort had failed them.
            </p>
            <p>
                In a way they were right. Their testing effort had failed
                them. But it was their decision to allow the tests to be
                messy that was the seed of that failure. Had they kept their
                tests clean, their testing effort would not have failed. I
                can say this with some certainty because I have participated
                in, and coached, many teams who have been successful with
                clean unit tests.
            </p>
            <p>
                The moral of the story is simple: <strong><i>Test code is just as 
                important as production code</i></strong>. It is not a second-class 
                citizen. It requires thought, design, and care. It must be 
                kept as clean as production code.
            </p>
        `,
        tags: [
            quoteTags.Inspiring,
            quoteTags.Tests,
            quoteTags.Clarity,
            quoteTags.BadCode,
            quoteTags.Story
        ],
        rating: 5
    },
    {
        id: "tests-give-confidence",
        chapter: 9,
        page: "124",
        content: `
            <p>
                It is <i>unit tests</i> that keep our code flexible,
                maintainable, and reusable. The reason is simple.
                <strong>If you have tests, you do not fear making changes 
                to the code!</strong> Without tests every change is a possible bug. 
                No matter how flexible your architecture is, no matter how nicely
                partitioned your design, without tests you will be reluctant
                to make changes because of the fear that you will introduce
                undetected bugs.
            </p>
            <p>
                [...] So if your tests are dirty, then your ability to change your
                code is hampered, and you begin to lose the ability to
                improve the structure of that code. The dirtier your tests,
                the dirtier your code becomes. <strong>Eventually you lose the tests, 
                and your code rots.</strong>
            </p>
        `,
        tags: [
            quoteTags.Inspiring,
            quoteTags.Tests,
            quoteTags.Clarity,
            quoteTags.BadCode
        ],
        rating: 5
    }
];
