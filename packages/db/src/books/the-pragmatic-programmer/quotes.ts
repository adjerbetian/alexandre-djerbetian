import { QuoteDBModel, Rating } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { cpp, joinStyles } from "../utils";

export const chapters = [
    "PREFACE ",
    "A PRAGMATIC PHILOSOPHY ",
    "A PRAGMATIC APPROACH ",
    "THE BASIC TOOLS ",
    "PRAGMATIC PARANOIA ",
    "BEND, OR BREAK ",
    "WHILE YOU ARE CODING ",
    "BEFORE THE PROJECT ",
    "PRAGMATIC PROJECTS "
];

export const quotes: QuoteDBModel[] = [
    {
        id: "the-gardener-story",
        chapter: 0,
        page: "xxi",
        content: `
            <h3>It’s a Continuous Process</h3>

            <blockquote>
                <p>
                    A tourist visiting England’s Eton College asked the gardener 
                    how he got the lawns so perfect. “That’s easy,” he replied, 
                    “You just brush off the dew every morning, mow them every 
                    other day, and roll them once a week.”
                </p>
                <p>
                    “Is that all?” asked the tourist.
                </p>
                <p>
                    “Absolutely,” replied the gardener. “Do that for 500 years 
                    and you’ll have a nice lawn, too.”
                </p>
            </blockquote>
        `,
        tags: [
            quoteTags.Humor,
            quoteTags.PersonalHabits,
            quoteTags.Inspiring,
            quoteTags.Story
        ],
        rating: Rating.VeryGood
    },
    {
        id: "the-broken-window",
        chapter: 1,
        page: "5",
        content: `
            <h3>Software Entropy</h3>
            <p>
                There are many factors that can contribute to software rot.
                <strong>The most important one seems to be the psychology, or
                culture, at work on a project</strong>. Even if you are a team 
                of one, your project’s psychology can be a very delicate thing. 
                Despite the best laid plans and the best people, a project can 
                still experience ruin and decay during its lifetime. Yet there 
                are other projects that, despite enormous difficulties and 
                constant setbacks, successfully fight nature’s tendency toward 
                disorder and manage to come out pretty well.
            </p>
            <p>
                What makes the difference?
            </p>
            <p>
                In inner cities, some buildings are beautiful and clean, while 
                others are rotting hulks. Why? Researchers in the field of crime 
                and urban decay discovered a fascinating trigger mechanism, one 
                that very quickly turns a clean, intact, inhabited building into 
                a smashed and abandoned derelict.
            </p>
            <p>
                <strong>A broken window.</strong>
            </p>
            <p>
                <strong>One broken window, left unrepaired for any substantial
                length of time, instills in the inhabitants of the building a 
                sense of abandonment — a sense that the powers that be don’t 
                care about the building</strong>. So another window gets broken. 
                People start littering. Graffiti appears. Serious structural 
                damage begins. In a relatively short space of time, the building 
                becomes damaged beyond the owner’s desire to fix it, and the 
                sense of abandonment becomes reality.
            </p>
            ${tip("TIP 4", "Don’t Live with Broken Windows")}
            <p>
                Don’t leave “broken windows” (bad designs, wrong decisions,
                or poor code) unrepaired. <strong>Fix each one as soon as it is 
                discovered</strong>. [...]
            </p>

            <h3>Putting Out Fires</h3>
            <p>
                By contrast, there’s the story of an obscenely rich acquaintance 
                of Andy’s. His house was immaculate, beautiful, loaded with 
                priceless antiques, objets d’art, and so on. One day, a tapestry 
                that was hanging a little too close to his living room fireplace 
                caught on fire. The fire department rushed in to save the 
                day—and his house. But before they dragged their big, dirty 
                hoses into the house, they stopped—with the fire raging—to roll 
                out a mat between the front door and the source of the fire.
            </p>
            <p>
                They didn’t want to mess up the carpet.
            </p>
            <p>
                A pretty extreme case, to be sure, but that’s the way it must be 
                with software. One broken window — a badly designed piece of code, 
                a poor management decision that the team must live with for the 
                duration of the project — is all it takes to start the decline.
                <strong>If you find yourself working on a project with quite a
                few broken windows, it’s all too easy to slip into the mindset 
                of “All the rest of this code is crap, I’ll just follow suit.”
                </strong> It doesn’t matter if the project has been fine up to 
                this point. In the original experiment leading to the “Broken
                Window Theory,” an abandoned car sat for a week untouched. But 
                once a single window was broken, the car was stripped and turned 
                upside down within hours.
            </p>
            <p>
                By the same token, <strong>if you find yourself on a team and a 
                project where the code is pristinely beautiful—cleanly written, 
                well designed, and elegant—you will likely take extra special 
                care not to mess it up, just like the firefighters.</strong> 
                Even if there’s a fire raging (deadline, release date, trade 
                show demo, etc.), you don’t want to be the first one to make a 
                mess.
            </p>
        `,
        tags: [
            quoteTags.PersonalHabits,
            quoteTags.Clarity,
            quoteTags.Common,
            quoteTags.Team,
            quoteTags.BadCode,
            quoteTags.Inspiring,
            quoteTags.Efficiency,
            quoteTags.Story,
            quoteTags.Comparison
        ],
        rating: Rating.ToBeRememberedByHeart
    },
    {
        id: "bad-code-requires-lots-of-comments",
        chapter: 2,
        page: "29",
        content: `
            <p>
                <b>Documentation in code</b>. Programmers are taught to comment
                their code: good code has lots of comments. Unfortunately, they
                are never taught <i>why</i> code needs comments: <strong>bad 
                code <i>requires</i> lots of comments</strong>.
            </p>
        `,
        tags: [quoteTags.Clarity, quoteTags.Common, quoteTags.BadCode],
        rating: Rating.Good
    },
    {
        id: "the-line-class-example",
        chapter: 2,
        page: "30",
        content: `
            <p>Let’s look at a class representing a line:</p>
            ${cpp(`
                class Line {
                  public:
                    Point start;
                    Point end;
                    double length;
                };
            `)}
            <p>
                At first sight, this class might appear reasonable. A line
                clearly has a start and end, and will always have a length
                (even if it’s zero). But we have duplication. The length is
                defined by the start and end points: change one of the points 
                and the length changes. It’s better to make the length a 
                calculated field:
            </p>
            ${cpp(`
                class Line {
                  public:
                    Point start;
                    Point end;
                    double length() { return start.distanceTo(end); }
                };
            `)}
            <p>
                <strong>Later on in the development process, you may choose to
                violate the DRY principle for performance reasons</strong>. 
                Frequently this occurs when you need to cache data to avoid 
                repeating expensive operations. The trick is to localize the 
                impact. The violation is not exposed to the outside world: only 
                the methods within the class have to worry about keeping things 
                straight.
            </p>
            ${cpp(`
                class Line {
                  private:
                    bool changed;
                    double length;
                    Point start;
                    Point end;
                  public:
                    void setStart(Point p) { start = p; changed = true; }
                    void setEnd(Point p) { end = p; changed = true; }
                    Point getStart(void) { return start; }
                    Point getEnd(void) { return end; }
                    double getLength() {
                      if (changed) {
                        length = start.distanceTo(end);
                        changed = false;
                      }
                      return length;
                    }
                };
            `)}
            <p>
                This example also illustrates an important issue for
                object-oriented languages such as Java and C++. <strong>Where
                possible, always use accessor functions to read and write the
                attributes of objects. It will make it easier to add
                functionality, such as caching, in the future.</strong>
            </p>
        `,
        tags: [
            quoteTags.Structure,
            quoteTags.Common,
            quoteTags.CodingHabits,
            quoteTags.Optimization,
            quoteTags.OO
        ],
        rating: Rating.VeryGood
    },
    {
        id: "the-helicopter-story",
        chapter: 2,
        page: "34",
        content: `
            <h3>A Nonorthogonal System</h3>
            <p>
                You’re on a helicopter tour of the Grand Canyon when the pilot, 
                who made the obvious mistake of eating fish for lunch, suddenly 
                groans and faints. Fortunately, he left you hovering 100 feet 
                above the ground. You rationalize that the collective pitch 
                lever 2 controls overall lift, so lowering it slightly will 
                start a gentle descent to the ground. However, when you try it, 
                you discover that life isn’t that simple. The helicopter’s nose 
                drops, and you start to spiral down to the left. 
                <strong>Suddenly you discover that you’re flying a system where
                every control input has secondary effects</strong>. Lower the 
                left-hand lever and you need to add compensating backward 
                movement to the right-hand stick and push the right pedal. But 
                then each of these changes affects all of the other controls 
                again. Suddenly you’re juggling an unbelievably complex system, 
                where every change impacts all the other inputs. Your workload 
                is phenomenal: your hands and feet are constantly moving, trying 
                to balance all the interacting forces.
            </p>
            <p>
                Helicopter controls are decidedly not orthogonal.
            </p>
            <p>
                [...] If you’re brought into a project where people are 
                desperately struggling to make changes, and where every change 
                seems to cause four other things to go wrong, remember the 
                nightmare with the helicopter. The project probably is not 
                orthogonally designed and coded. It’s time to refactor.
            </p>
            <p>
                And, if you’re a helicopter pilot, don’t eat the fish...
            </p>
        `,
        tags: [
            quoteTags.Humor,
            quoteTags.Structure,
            quoteTags.BadCode,
            quoteTags.Efficiency,
            quoteTags.Story,
            quoteTags.Dependency,
            quoteTags.Comparison
        ],
        rating: Rating.Good
    },
    {
        id: "there-are-no-final-decisions",
        chapter: 2,
        page: "45",
        content: `
            <h3>Reversibility</h3>
            <p>
                [...] Suppose you decide, early in the project, to use a
                relational database from vendor A. Much later, during
                performance testing, you discover that the database is simply 
                too slow, but that the object database from vendor B is faster. 
                With most conventional projects, you’d be out of luck. Most of 
                the time, calls to third-party products are entangled throughout 
                the code. <strong>But if you really abstracted the idea of a 
                database out—to the point where it simply provides persistence 
                as a service — then you have the flexibility to change horses in 
                midstream.</strong>
            </p>
            <p>
                Similarly, suppose the project begins as a client-server model, 
                but then, late in the game, marketing decides that servers are 
                too expensive for some clients, and they want a stand-alone 
                version. How hard would that be for you? <strong>Since it’s just 
                a deployment issue, it shouldn’t take more than a few 
                days.</strong> If it would take longer, then you haven’t thought 
                about reversibility. The other direction is even more 
                interesting. What if the stand-alone product you are making 
                needs to be deployed in a client-server or n-tier fashion? That
                shouldn’t be hard either.
            </p>
            <p>
                <strong>The mistake lies in assuming that any decision is cast
                in stone</strong> — and in not preparing for the contingencies 
                that might arise. Instead of carving decisions in stone, think 
                of them more as being written in the sand at the beach. A big 
                wave can come along and wipe them out at any time.
            </p>
            ${tip("TIP 14", "There Are No Final Decisions")}
        `,
        tags: [
            quoteTags.Structure,
            quoteTags.CodingHabits,
            quoteTags.Abstraction,
            quoteTags.Common,
            quoteTags.BadCode,
            quoteTags.Dependency
        ],
        rating: Rating.VeryGood
    },
    {
        id: "units-of-duration",
        chapter: 2,
        page: "65",
        content: `
            <h3>How Accurate Is Accurate Enough?</h3>
            <p>
                [...] One of the interesting things about estimating is that the 
                units you use make a difference in the interpretation of the 
                result. If you say that something will take about 130 working 
                days, then people will be expecting it to come in pretty close. 
                However, if you say “Oh, about six months,” then they know to 
                look for it any time between five and seven months from now. 
                Both numbers represent the same duration, but “130 days” 
                probably implies a higher degree of accuracy than you feel. We 
                recommend that you scale time estimates as follows:
            </p>
            ${buildTable(
                ["Duration", "Quote estimate in"],
                [
                    [`1–15 days`, `days`],
                    [`3–8 weeks`, `weeks`],
                    [`8–30 weeks`, `months`],
                    [`30+ weeks`, `think hard before giving an estimate`]
                ]
            )}
        `,
        tags: [quoteTags.Team, quoteTags.Organisation, quoteTags.Behaviour],
        rating: Rating.Good
    },
    {
        id: "the-pragmatic-programmer-p72",
        chapter: 3,
        page: "72",
        content: `
            <p>
                Many new programmers make the mistake of adopting a single power
                tool, such as a particular integrated development environment
                (IDE), and never leave its cozy interface. This really is a
                mistake. We need to be comfortable beyond the limits imposed by
                an IDE. The only way to do this is to keep the basic tool set
                sharp and ready to use.
            </p>
        `,
        tags: [
            quoteTags.PersonalHabits,
            quoteTags.Behaviour,
            quoteTags.Efficiency
        ],
        rating: Rating.Interesting
    },
    {
        id: "the-power-of-text",
        chapter: 3,
        page: "74",
        content: `
            <h3>The Power of Text</h3>
            <p>
                Since <i>larger</i> and <i>slower</i> aren’t the most frequently 
                requested features from users, why bother with plain text? What 
                <i>are</i> the benefits?
            </p>
            <ul>
                <li>Insurance against obsolescence</li>
                <li>Leverage</li>
                <li>Easier testing</li>
            </ul>
        `,
        tags: [quoteTags.Clarity],
        rating: Rating.VeryGood
    },
    {
        id: "where-the-word-bug-comes-from",
        chapter: 3,
        page: "90",
        content: `
            <p>
                The word bug has been used to describe an “object of terror”
                ever since the fourteenth century. Rear Admiral Dr. Grace
                Hopper, the inventor of COBOL, is credited with observing the
                first computer bug—literally, a moth caught in a relay in an
                early computer system. When asked to explain why the machine
                wasn’t behaving as intended, a technician reported that there
                was “a bug in the system,” and dutifully taped it — wings and
                all—into the log book.
            </p>
        `,
        tags: [
            quoteTags.History,
            quoteTags.Bugs,
            quoteTags.Humor,
            quoteTags.Story
        ],
        rating: Rating.Interesting
    },
    {
        id: "fix-the-problem-not-the-blame",
        chapter: 3,
        page: "91",
        content: `
            ${tip("TIP 24", "Fix the Problem, Not the Blame")}
            <p>
                It doesn’t really matter whether the bug is your fault or 
                someone else’s. It is still your problem.
            </p>
        `,
        tags: [quoteTags.Team, quoteTags.Bugs, quoteTags.Behaviour],
        rating: Rating.Good
    },
    {
        id: "dont-panic",
        chapter: 3,
        page: "91",
        content: `
            <p>
                Before you start debugging, it’s important to adopt the right 
                mindset. You need to turn off many of the defenses you use each 
                day to protect your ego, tune out any project pressures you may 
                be under, and get yourself comfortable. Above all, remember the 
                first rule of debugging:
            </p>
            ${tip("TIP 25", "Don’t Panic")}
        `,
        tags: [quoteTags.Behaviour, quoteTags.Bugs, quoteTags.Efficiency],
        rating: Rating.Good
    },
    {
        id: "rubber-ducking",
        chapter: 3,
        page: "95",
        content: `
            <h3>Rubber Ducking</h3>
            <p>
                A very simple but particularly useful technique for finding the 
                cause of a problem is simply to explain it to someone else. The 
                other person should look over your shoulder at the screen, and 
                nod his or her head constantly (like a rubber duck bobbing up 
                and down in a bathtub). <strong>They do not need to say a word; 
                the simple act of explaining, step by step, what the code is 
                supposed to do often causes the problem to leap off the screen 
                and announce itself.</strong>
            </p>
        `,
        tags: [quoteTags.Behaviour, quoteTags.Team, quoteTags.Efficiency],
        rating: Rating.VeryGood
    },
    {
        id: "pragmatic-paranoia",
        chapter: 4,
        page: "107",
        content: `
            <h3>Pragmatic Paranoia</h3>
            <p>
                Everyone knows that they personally are the only good driver on 
                Earth. The rest of the world is out there to get them, blowing 
                through stop signs, weaving between lanes, not indicating turns, 
                talking on the telephone, reading the paper, and just generally 
                not living up to our standards. So we drive defensively. We look 
                out for trouble before it happens, anticipate the unexpected, 
                and never put ourselves into a position from which we can’t 
                extricate ourselves.
            </p>
            <p>
                The analogy with coding is pretty obvious. We are constantly
                interfacing with other people’s code — code that might not live 
                up to our high standards — and dealing with inputs that may or 
                may not be valid. So we are taught to code defensively. If 
                there’s any doubt, we validate all information we’re given. We 
                use assertions to detect bad data. We check for consistency, put 
                constraints on database columns, and generally feel pretty good 
                about ourselves.
            </p>
            <p>
                But Pragmatic Programmers take this a step further. 
                <strong><i>They don’t trust themselves, either</i></strong>. 
                Knowing that no one writes perfect code, including themselves, 
                Pragmatic Programmers code in defenses against their own 
                mistakes.
            </p>
        `,
        tags: [
            quoteTags.Humor,
            quoteTags.Behaviour,
            quoteTags.Team,
            quoteTags.Tests,
            quoteTags.Comparison
        ],
        rating: Rating.VeryGood
    },
    {
        id: "leave-assertions-turned-on",
        chapter: 4,
        page: "123",
        content: `
            <h3>Leave Assertions Turned On</h3>
            <p>
                There is a common misunderstanding about assertions, promulgated 
                by the people who write compilers and language environments. It 
                goes something like this:
            </p>
            <blockquote>
                Assertions add some overhead to code. Because they check for
                things that should never happen, they’ll get triggered only by a 
                bug in the code. Once the code has been tested and shipped, they 
                are no longer needed, and should be turned off to make the code 
                run faster. Assertions are a debugging facility.
            </blockquote>
            <p>
                There are two patently wrong assumptions here. <strong>First, 
                they assume that testing finds all the bugs</strong>. In 
                reality, for any complex program you are unlikely to test even a 
                miniscule percentage of the permutations your code will be put 
                through. Second, the optimists are forgetting that your program 
                runs in a dangerous world. During testing, rats probably won’t 
                gnaw through a communications cable, someone playing a game 
                won’t exhaust memory, and log files won’t fill the hard drive. 
                These things might happen when your program runs in a production
                environment. Your first line of defense is checking for any
                possible error, and your second is using assertions to try to 
                detect those you’ve missed.
            </p>
            <p>
                <strong>Turning off assertions when you deliver a program to 
                production is like crossing a high wire without a net because 
                you once made it across in practice</strong>. There’s dramatic 
                value, but it’s hard to get life insurance.
            </p>
            <p>
                <strong>Even if you <i>do</i> have performance issues, turn off
                only those assertions that really hit you.</strong>
            </p>
        `,
        tags: [
            quoteTags.Humor,
            quoteTags.Behaviour,
            quoteTags.Bugs,
            quoteTags.Tests,
            quoteTags.Efficiency
        ],
        rating: Rating.Good
    },
    {
        id: "use-exceptions-for-exceptional-problems",
        chapter: 4,
        page: "127",
        content: `
            <h3>
                What <i>Is</i> Exceptional?
            </h3>
            <p>
                For example, if your code tries to open a file for reading and 
                that file does not exist, should an exception be raised?
            </p>
            <p>
                Our answer is, “It depends.” If the file should have been there, 
                then an exception is warranted. Something unexpected happened — 
                a file you were expecting to exist seems to have disappeared.
                <strong>On the other hand, if you have no idea whether the file
                should exist or not, then it doesn’t seem exceptional if you 
                can’t find it, and an error return is appropriate.</strong>
            </p>
            ${tip("TIP 34", "Use Exceptions for Exceptional Problems")}
            <p>
                Why do we suggest this approach to exceptions? Well, an 
                exception represents an immediate, nonlocal transfer of control 
                — it’s a kind of cascading goto. <strong>Programs that use 
                exceptions as part of their normal processing suffer from all 
                the readability and maintainability problems of classic 
                spaghetti code</strong>. These programs break encapsulation: 
                routines and their callers are more tightly coupled via 
                exception handling.
            </p>
        `,
        tags: [quoteTags.ErrorHandling, quoteTags.Structure, quoteTags.Clarity],
        rating: Rating.VeryGood
    },
    {
        id: "finish-what-you-start",
        chapter: 4,
        page: "129",
        content: `
            ${tip("TIP 35", "Finish What You Start")}
            <p>
                This tip is easy to apply in most circumstances. It simply means 
                that the routine or object that allocates a resource should be 
                responsible for deallocating it. Let’s see how it applies by 
                looking at an example of some bad code — an application that 
                opens a file, reads customer information from it, updates a 
                field, and writes the result back. We’ve eliminated error 
                handling to make the example clearer.
            </p>
            ${cpp(`
                void readCustomer(const char *fName, Customer *cRec) {
                    cFile = fopen(fName, "r+");
                    fread(cRec, sizeof(*cRec), 1, cFile);
                }
                void writeCustomer(Customer *cRec) {
                    rewind(cFile);
                    fwrite(cRec, sizeof(*cRec), 1, cFile);
                    fclose(cFile);
                }
                void updateCustomer(const char *fName, double newBalance) {
                    Customer cRec;
                    readCustomer(fName, &cRec);
                    cRec.balance = newBalance;
                    writeCustomer(&cRec);
                }
            `)}
            <p>
                [...] The finish what you start tip tells us that, ideally, the 
                routine that allocates a resource should also free it. We can 
                apply it here by refactoring the code slightly:
            </p>
            ${cpp(`
                void readCustomer(FILE * cFile, Customer * cRec) {
                    fread(cRec, sizeof(*cRec), 1, cFile);
                }
                void writeCustomer(FILE *cFile, Customer *cRec) {
                    rewind(cFile);
                    fwrite(cRec, sizeof(*cRec), 1, cFile);
                }
                void updateCustomer(const char *fName, double newBalance) {
                    FILE *cFile;
                    Customer cRec;
                    cFile = fopen(fName, "r+");           // >---
                    readCustomer(cFile, &cRec);           //     |
                    if (newBalance >= 0.0) {              //     |
                        cRec.balance = newBalance;        //     |
                        writeCustomer(cFile, &cRec);      //     |
                    }                                     //     |
                    fclose(cFile);                        // <---
                }
            `)}
        `,
        tags: [quoteTags.Code, quoteTags.Structure, quoteTags.Common],
        rating: Rating.VeryGood
    },
    {
        id: "law-of-demeter-for-functions",
        chapter: 5,
        page: "141",
        content: `
            <h3>Law of Demeter for functions</h3>
            ${
                //prettier-ignore
                buildDemeterTable([
                    [
                        [
                            `class Demeter {`,
                            `private:`,
                            `    A *a;`,
                            `    int func();`,
                            `public:`,
                            `    //...`,
                            `    void example(B& b);`,
                            `}`
                        ],
                        `The Law of Demeter for functions states that any method of an object should call only methods belonging to:`
                    ],
                    [`void Demeter::example(B& b) {`],
                    [`    C c;`                     ],
                    [`    int f = func();`          , `&larr; itself`],
                    [`    b.invert();`              , `&larr; any parameters that were passed in to the method`],
                    [`    a = new A();`             ],
                    [`    a->setActive();`          , `&larr; any objects it created`],
                    [`    c.print();`               , `&larr; any directly held component objects`],
                    [`}`]
                ])
            }
        `,
        tags: [
            quoteTags.Definition,
            quoteTags.Code,
            quoteTags.Structure,
            quoteTags.Clarity,
            quoteTags.Dependency,
            quoteTags.OO
        ],
        rating: 4
    },
    {
        id: "model-view-controller",
        chapter: 5,
        page: "159",
        content: `
            <h3>Model-View-Controller</h3>
            <p>
                Suppose you have a spreadsheet application. In addition to the 
                numbers in the spreadsheet itself, you also have a graph that 
                displays the numbers as a bar chart and a running total dialog 
                box that shows the sum of a column in the spreadsheet.
            </p>
            <p>
                Obviously, we don’t want to have three separate copies of the 
                data. So we create a model—the data itself, with common
                operations to manipulate it. Then we can create separate views 
                that display the data in different ways: as a spreadsheet, as a 
                graph, or in a totals box. Each of these views may have its own 
                controller. The graph view may have a controller that allows you 
                to zoom in or out, or pan around the data, for example. None of 
                this affects the data itself, just that view. This is the key 
                concept behind the Model-View-Controller (MVC) idiom: separating 
                the model from both the GUI that represents it and the controls 
                that manage the view.
            </p>
            <p>
                By doing so, you can take advantage of some interesting
                possibilities. You can support multiple views of the same data 
                model. You can use common viewers on many different data models. 
                You can even support multiple controllers to provide 
                nontraditional input mechanisms.
            </p>
            ${tip("TIP 42", "Separate Views from Models")}
            <p>
                By loosening the coupling between the model and the
                view/controller, you buy yourself a lot of flexibility at low 
                cost.
            </p>
        `,
        tags: [
            quoteTags.Structure,
            quoteTags.Definition,
            quoteTags.Efficiency,
            quoteTags.Dependency
        ],
        rating: Rating.Good
    },
    {
        id: "be-wary-of-premature-optimization",
        chapter: 6,
        page: "182",
        content: `
            <p>
                <strong>Also be wary of premature optimization. It’s always a 
                good idea to make sure an algorithm really is a bottleneck 
                before investing your precious time trying to improve 
                it.</strong>
            </p>
        `,
        tags: [quoteTags.Common, quoteTags.Optimization, quoteTags.Efficiency],
        rating: Rating.Good
    },
    {
        id: "software-is-more-like-gardening",
        chapter: 6,
        page: "184",
        content: `
            <p>
                Unfortunately, the most common metaphor for software development
                is building construction. [...] Rather than construction,
                <strong>software is more like gardening</strong> — it is more
                organic than concrete. You plant many things in a garden
                according to an initial plan and conditions. Some thrive, others
                are destined to end up as compost. You may move plantings
                relative to each other to take advantage of the interplay of
                light and shadow, wind and rain. Overgrown plants get split or
                pruned, and colors that clash may get moved to more
                aesthetically pleasing locations. You pull weeds, and you
                fertilize plantings that are in need of some extra help. You
                constantly monitor the health of the garden, and make
                adjustments (to the soil, the plants, the layout) as needed.
            </p>
        `,
        tags: [
            quoteTags.Definition,
            quoteTags.Inspiring,
            quoteTags.Story,
            quoteTags.Comparison
        ],
        rating: Rating.VeryGood
    },
    {
        id: "refactor-early-refactor-often",
        chapter: 6,
        page: "185",
        content: `
            <p>
                So you go to your boss or client and say, “This code works, but 
                I need another week to refactor it.”
            </p>
            <p>
                We can’t print their reply.
            </p>
            <p>
                Time pressure is often used as an excuse for not refactoring. 
                But this excuse just doesn’t hold up: fail to refactor now, and 
                there’ll be a far greater time investment to fix the problem 
                down the road—when there are more dependencies to reckon with. 
                Will there be more time available then? Not in our experience.
            </p>
            <p>
                You might want to explain this principle to the boss by using a 
                medical analogy: think of the code that needs refactoring as a 
                “growth.” Removing it requires invasive surgery. You can go in 
                now, and take it out while it is still small. Or, you could wait 
                while it grows and spreads—but removing it then will be both 
                more expensive and more dangerous. Wait even longer, and you may 
                lose the patient entirely.
            </p>
            ${tip("TIP 47", "Refactor Early, Refactor Often")}
            <p>
                Keep track of the things that need to be refactored. If you
                can’t refactor something immediately, make sure that it gets
                placed on the schedule. Make sure that users of the affected
                code know that it is scheduled to be refactored and how this
                might affect them.
            </p>
        `,
        tags: [
            quoteTags.Humor,
            quoteTags.Organisation,
            quoteTags.Refactoring,
            quoteTags.PersonalHabits,
            quoteTags.Efficiency,
            quoteTags.Story
        ],
        rating: Rating.VeryGood
    },
    {
        chapter: 6,
        page: "192",
        id: "location-of-unit-tests",
        content: `
            <h3>Writing Unit Tests</h3>
            <p>
                <strong>The unit tests for a module shouldn’t be shoved in some
                far-away corner of the source tree. They need to be conveniently 
                located.</strong> For small projects, you can embed the unit 
                test for a module in the module itself. For larger projects, we 
                suggest moving each test into a subdirectory. <strong>Either 
                way, remember that if it isn’t easy to find, it won’t be 
                used.</strong>
            </p>
        `,
        tags: [quoteTags.Tests, quoteTags.Structure, quoteTags.Efficiency],
        rating: Rating.Good
    },
    {
        id: "quality-is-a-team-issue",
        chapter: 8,
        page: "224",
        content: `
            <h3>No Broken Windows</h3>
            <p>
                <strong>Quality is a team issue.</strong> The most diligent
                developer placed on a team that just doesn’t care will find
                it difficult to maintain the enthusiasm needed to fix
                niggling problems. The problem is further exacerbated if the
                team actively discourages the developer from spending time
                on these fixes.
            </p>
            <p>
                <strong>Teams as a whole should not tolerate broken 
                windows</strong> — those small imperfections that no one fixes. 
                The team must take responsibility for the quality of the 
                product, supporting developers who understand the no broken 
                windows philosophy we describe in Software Entropy, page 4, and
                encouraging those who haven’t yet discovered it.
            </p>
            <p>
                Some team methodologies have a quality officer — someone to whom 
                the team delegates the responsibility for the quality of the 
                deliverable. <strong>This is clearly ridiculous: quality can 
                come only from the individual contributions of all team 
                members.</strong>
            </p>
        `,
        tags: [quoteTags.Team, quoteTags.Efficiency],
        rating: Rating.VeryGood
    },
    {
        chapter: 8,
        page: "238",
        id: "the-pragmatic-programmer-p238",
        content: `
            <p>
                [...] <strong>a good project may well have <i>more</i> test code 
                than production code</strong>. The time it takes to produce this 
                test code is worth the effort. It ends up being much cheaper in 
                the long run, and you actually stand a chance of producing a 
                product with close to zero defects.
            </p>
        `,
        tags: [quoteTags.Tests, quoteTags.Efficiency],
        rating: Rating.VeryGood
    }
];

function tip(title: string, content: string) {
    return `
        <div style="${divStyle()}">
            <h4 style="${h4Style()}">${title}</h4>
            <p style="${pStyle()}"><strong>${content}</strong></p>
        </div>
    `;

    function divStyle() {
        return joinStyles({
            ...centered(),
            border: `2px solid ${primary80()}`,
            "border-top": `6px solid ${primary80()}`,
            "border-radius": "10px",
            position: "relative",
            padding: "7px 25px"
        });
    }
    function h4Style() {
        return joinStyles({
            position: "absolute",
            top: "-20px",
            left: "25px",
            "font-size": "12px",
            "background-color": `${primary80()}`,
            padding: "3px 25px",
            "border-radius": "10px 10px 0 0"
        });
    }
    function pStyle() {
        return joinStyles({
            margin: "0"
        });
    }
}
function buildTable(head: string[], body: string[][]) {
    return `
        <table style="${tableStyle()}">
            <thead style="${headStyle()}">
                ${buildLine(head, "th")}
            </thead>
            <tbody>
                ${body.map((line) => buildLine(line))}
            </tbody>
        </table>
    `;

    function buildLine(content: string[], cellTag = "td") {
        return `
            <tr>
                ${content.map((v) => buildCell(v, cellTag))}
            </tr>
        `;
    }
    function buildCell(content: string, tag: string) {
        return `
            <${tag} style="${cellStyle()}">
                ${content}
            </${tag}>
        `;
    }

    function tableStyle() {
        return joinStyles({
            ...centered(),
            "border-top": `2px solid ${primary30()}`,
            "border-bottom": `2px solid ${primary30()}`
        });
    }
    function headStyle() {
        return joinStyles({
            "border-bottom": `1px solid ${primary30()}`
        });
    }
    function cellStyle() {
        return joinStyles({
            border: "none",
            padding: "5px 2px"
        });
    }
}
function centered() {
    return {
        margin: "25px auto",
        width: "70%",
        "max-width": "100%",
        "min-width": "min(300px, 100%)"
    };
}
function primary80() {
    return "#f0cec1";
}
function primary30() {
    return "#8e4024";
}

type DemeterLine = [string] | [string, string] | [string[], string];
function buildDemeterTable(content: DemeterLine[]) {
    return `
        <table style="max-width: 540px">
            ${content.map(buildLine).join("")}
        </table>
    `;

    function buildLine(line: [string] | [string, string] | [string[], string]) {
        if (line.length === 1) return buildCodeLine(line[0]);

        const [code, comment] = line;
        if (typeof code === "string") {
            return buildCodeWithCommentLine(code, comment);
        } else {
            return buildCodeBockWithComment(code, comment);
        }
    }
    function buildCodeLine(code: string) {
        return `
            <tr>
                <td colspan="2"><pre>${code}</pre></td>
            </tr>
        `;
    }
    function buildCodeWithCommentLine(code: string, comment: string) {
        return `
            <tr>
                <td><pre>${code}</pre></td>
                <td>${comment}</td>
            </tr>
        `;
    }
    function buildCodeBockWithComment(code: string[], comment: string) {
        const [first, ...rest] = code;
        //prettier-ignore
        return `
            <tr>
                <td><pre>${first}</pre></td>
                <td rowSpan="${code.length}">${comment}</td>
            </tr>
            ${rest.map((v) => `
                <tr>
                    <td><pre>${v}</pre></td>
                </tr>
            `).join("")}
        `;
    }
}
