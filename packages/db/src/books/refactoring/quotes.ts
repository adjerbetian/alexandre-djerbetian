import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { java, joinStyles } from "../utils";

export const chapters = [
    "Preface",
    "Refactoring, a First Example",
    "Principles in Refactoring",
    "Bad Smells in Code",
    "Building Tests",
    "Toward a Catalog of Refactorings",
    "Composing Methods",
    "Moving Features Between Objects",
    "Organizing Data",
    "Simplifying Conditional Expressions",
    "Making Method Calls Simpler",
    "Dealing with Generalization",
    "Big Refactorings",
    "Refactoring, Reuse, and Reality",
    "Refactoring Tools",
    "Putting It All Together"
];

export const quotes: QuoteDBModel[] = [
    {
        id: "any-fool-can-write-code-that-a-computer-can-understand",
        chapter: 1,
        page: "15",
        content: `
            <p>
                <strong>Is renaming worth the effort? Absolutely.</strong>
                Good code should communicate what it is doing clearly, and
                variable names are a key to clear code. <strong>Never be afraid to 
                change the names of things to improve clarity.</strong> With good 
                find and replace tools, it is usually not difficult. Strong 
                typing and testing will highlight anything you miss. Remember
            </p>

            ${createTip(`
                <strong>Any fool can write code that a computer can understand. 
                Good programmers write code that humans can understand.</strong>                
            `)}

            <p>
                Code that communicates its purpose is very important. I often 
                refactor just when I'm reading some code. <strong>That way as I gain
                understanding about the program, I embed that understanding into 
                the code for later so I don't forget what I learned.</strong>
            </p>
        `,
        tags: [
            quoteTags.Naming,
            quoteTags.Refactoring,
            quoteTags.Clarity,
            quoteTags.CodingHabits,
            quoteTags.Inspiring
        ],
        rating: 5
    },
    {
        id: "refactoring-definition",
        chapter: 2,
        page: "53",
        content: `
            <h3>Defining Refactoring</h3>
            
            ${createTip(`
                Refactoring (noun): a change made to the internal
                structure of software to make it easier to understand
                and cheaper to modify without changing its observable
                behavior.
            `)}
        `,
        tags: [quoteTags.Refactoring, quoteTags.Definition],
        rating: 2
    },
    {
        id: "refactoring-two-hats",
        chapter: 2,
        page: "54",
        content: `
            <h3>The two hats</h3>
            <p>
                [...] When you use refactoring to develop software, you
                divide your time between two distinct activities: adding
                function and refactoring. <strong>When you add function, 
                you shouldn't be changing existing code;</strong> you are 
                just adding new capabilities. You can measure your
                progress by adding tests and getting the tests to work.
                <strong>When you refactor, you make a point of not adding
                function; you only restructure the code.</strong> You don't 
                add any tests (unless you find a case you missed earlier); 
                you only change tests when you absolutely need to in order 
                to cope with a change in an interface.
            </p>
            <p>
                As you develop software, you probably find yourself swapping
                hats frequently. You start by trying to add a new function,
                and you realize this would be much easier if the code were
                structured differently. So you swap hats and refactor for a
                while. Once the code is better structured, you swap hats and
                add the new function. Once you get the new function working,
                you realize you coded it in a way that's awkward to
                understand, so you swap hats again and refactor. <strong>All 
                this might take only ten minutes, but during this time you 
                should always be aware of which hat you're wearing.</strong>
            </p>
        `,
        tags: [
            quoteTags.Refactoring,
            quoteTags.CodingHabits,
            quoteTags.Tests,
            quoteTags.Efficiency,
            quoteTags.TaskSeparation,
            quoteTags.Common
        ],
        rating: 5
    },
    {
        id: "Im-just-a-good-programmer-with-great-habits",
        chapter: 2,
        page: "57",
        content: `
            <h3>Refactoring Helps You Find Bugs</h3>
            <p>
                Help in understanding the code also helps me spot bugs. I
                admit I'm not terribly good at finding bugs. Some people can
                read a lump of code and see bugs, I cannot. However, I find
                that if I refactor code, I work deeply on understanding what
                the code does, and I put that new understanding right back
                into the code. By clarifying the structure of the program, I
                clarify certain assumptions I've made, to the point at which
                even I can't avoid spotting the bugs.
            </p>
            <p>
                It reminds me of a statement Kent Beck often makes about
                himself, <strong>"I'm not a great programmer; I'm just a good 
                programmer with great habits."</strong> Refactoring helps me 
                be much more effective at writing robust code.
            </p>
        `,
        tags: [
            quoteTags.Bugs,
            quoteTags.Refactoring,
            quoteTags.Clarity,
            quoteTags.CodingHabits,
            quoteTags.Inspiring,
            quoteTags.Efficiency
        ],
        rating: 4
    },
    {
        id: "when-should-you-refactor",
        chapter: 2,
        page: "57",
        content: `
            <h3>When Should You Refactor?</h3>
            <p>
                [...] In almost all cases, I'm opposed to setting aside time
                for refactoring. <strong>In my view refactoring is not an 
                activity you set aside time to do.</strong> Refactoring is 
                something you do all the time in little bursts. You don't 
                decide to refactor, you refactor because you want to do 
                something else, and refactoring helps you do that other thing.
            </p>
        `,
        tags: [
            quoteTags.Refactoring,
            quoteTags.TaskSeparation,
            quoteTags.CodingHabits,
            quoteTags.Behaviour,
            quoteTags.Efficiency
        ],
        rating: 4
    },
    {
        id: "refactor-when-you-need-to-fix-a-bug",
        chapter: 2,
        page: "58",
        content: `
            <h3>Refactor When You Need to Fix a Bug</h3>
            <p>
                <strong>In fixing bugs much of the use of refactoring comes from
                making code more understandable.</strong> As I look at the code 
                trying to understand it, I refactor to help improve my 
                understanding. Often I find that this active process of working 
                with the code helps in finding the bug. <strong>One way to look 
                at it is that if you do get a bug report, it's a sign you need 
                refactoring, because the code was not clear enough for you to 
                see there was a bug.</strong>
            </p>
        `,
        tags: [
            quoteTags.Refactoring,
            quoteTags.Bugs,
            quoteTags.Clarity,
            quoteTags.CodingHabits
        ],
        rating: 4
    },
    {
        id: "refactor-as-you-do-a-code-review",
        chapter: 2,
        page: "59",
        content: `
            <h3>Refactor As You Do a Code Review</h3>
            <p>
                Some organizations do regular code reviews; those that don't
                would do better if they did. <strong>Code reviews help spread 
                knowledge through a development team.</strong> Reviews help 
                more experienced developers pass knowledge to less experienced 
                people. They help more people understand more aspects of a 
                large software system. <strong>They are also very important in 
                writing clear code. My code may look clear to me but not to my 
                team.</strong> [...]
            </p>
        `,
        tags: [quoteTags.Team],
        rating: 2
    },
    {
        id: "why-refactoring-works",
        chapter: 2,
        page: "60",
        content: `
            <h3>Why Refactoring Works (<i>by Kent Beck</i>)</h3>
            <p>
                Programs have two kinds of value: what they can do for you
                today and what they can do for you tomorrow. [...]
            </p>
            <p>
                I know enough to do today's work. I don't know enough to do
                tomorrow's. But if I only work for today, I won't be able to
                work tomorrow at all.
            </p>
            <p>
                Refactoring is one way out of the bind. When you find that
                yesterday's decision doesn't make sense today, you change
                the decision. Now you can do today's work. Tomorrow, some of
                your understanding as of today will seem naive, so you'll
                change that, too.
            </p>
        `,
        tags: [quoteTags.Refactoring, quoteTags.Definition],
        rating: 3
    },
    {
        id: "refactoring-and-performance",
        chapter: 2,
        page: "69",
        content: `
            <h3>Refactoring and Performance</h3>
            <p>
                A common concern with refactoring is the effect it has on
                the performance of a program. To make the software easier to
                understand, you often make changes that will cause the
                program to run more slowly. This is an important issue. I'm
                not one of the school of thought that ignores performance in
                favor of design purity or in hopes of faster hardware.
                Software has been rejected for being too slow, and faster
                machines merely move the goalposts. Refactoring certainly
                will make software go more slowly, but it also makes the
                software more amenable to performance tuning. <strong>The 
                secret to fast software, in all but hard real-time contexts,
                is to write tunable software first and then to tune it for 
                sufficient speed.</strong>
            </p>
            <p>
                I've seen three general approaches to writing fast software.
                The most serious of these is time budgeting, used often in
                hard real-time systems. In this situation, as you decompose
                the design you give each component a budget for
                resources—time and footprint. That component must not exceed
                its budget, although a mechanism for exchanging budgeted
                times is allowed. Such a mechanism focuses hard attention on
                hard performance times. It is essential for systems such as
                heart pacemakers, in which late data is always bad data.
                <strong>This technique is overkill for other kinds of systems,
                such as the corporate information systems with which I usually 
                work.</strong>
            </p>
            <p>
                The second approach is the constant attention approach. With
                this approach every programmer, all the time, does whatever
                he or she can to keep performance high. <strong>This is a 
                common approach and has intuitive attraction, but it does not 
                work very well. Changes that improve performance usually make 
                the program harder to work with. This slows development. This 
                would be a cost worth paying if the resulting software were 
                quicker, but usually it is not. The performance improvements 
                are spread all around the program, and each improvement is made 
                with a narrow perspective of the program's behavior.</strong>
            </p>
            <p>
                The interesting thing about performance is that if you analyze 
                most programs, you find that they waste most of their time in 
                a small fraction of the code. <strong>If you optimize all the 
                code equally, you end up with 90 percent of the optimizations 
                wasted, because you are optimizing code that isn't run much. 
                The time spent making the program fast, the time lost because 
                of lack of clarity, is all wasted time.</strong>
            </p>
            <p>
                The third approach to performance improvement takes advantage 
                of this 90 percent statistic. <strong>In this approach you 
                build your program in a well-factored manner without paying 
                attention to performance until you begin a performance 
                optimization stage, usually fairly late in development.</strong>
                During the performance optimization stage, you follow a
                specific process to tune the program. You begin by running
                the program under a profiler that monitors the program and
                tells you where it is consuming time and space. This way you
                can find that small part of the program where the performance 
                hot spots lie. Then you focus on those performance hot spots 
                and use the same optimizations you would use if you were using 
                the constant attention approach. <strong>But because you are 
                focusing your attention on a hot spot, you are having much more 
                effect for less work.</strong> Even so you remain cautious. As 
                in refactoring you make the changes in small steps. After each 
                step you compile, test, and rerun the profiler. If you haven't 
                improved performance, you back out the change. You continue the 
                process of finding and removing hot spots until you get the 
                performance that satisfies your users. [...]
            </p>
            <p>
                Having a well-factored program helps with this style of
                optimization in two ways. First, it gives you time to spend on 
                performance tuning. Because you have well-factored code, you can
                add function more quickly. This gives you more time to focus on 
                performance. (Profiling ensures you focus that time on the right
                place.) Second, with a well-factored program you have finer 
                granularity for your performance analysis. Your profiler leads 
                you to smaller parts of the code, which are easier to tune.
                <strong>Because the code is clearer, you have a better 
                understanding of your options and of what kind of tuning will 
                work.</strong>
            </p>
            <p>
                I've found that refactoring helps me write fast software. It
                slows the software in the short term while I'm refactoring,
                but it makes the software easier to tune during
                optimization. I end up well ahead.
            </p>
        `,
        tags: [
            quoteTags.Refactoring,
            quoteTags.Clarity,
            quoteTags.Common,
            quoteTags.Optimization,
            quoteTags.BadCode,
            quoteTags.Efficiency
        ],
        rating: 5
    },
    {
        id: "good-programmers-rarely-write-clean-code-the-first-time",
        chapter: 2,
        page: "71",
        content: `
            <h3>Where Did Refactoring Come From?</h3>
            <p>
                I've not succeeded in pinning down the real birth of the term 
                refactoring. Good programmers certainly have spent at least some 
                time cleaning up their code. They do this because they have 
                learned that clean code is easier to change than complex and 
                messy code, and <strong>good programmers know that they rarely 
                write clean code the first time around.</strong>
            </p>
        `,
        tags: [quoteTags.Refactoring, quoteTags.History, quoteTags.Inspiring],
        rating: 4
    },
    {
        id: "long-methods",
        chapter: 3,
        page: "76",
        content: `
            <h3>Long Method</h3>
            <p>
                [...] How do you identify the clumps of code to extract? A good 
                technique is to look for comments. They often signal this kind 
                of semantic distance. A block of code with a comment that tells 
                you what it is doing can be replaced by a method whose name is 
                based on the comment. <strong>Even a single line is worth 
                extracting if it needs explanation.</strong>
            </p>
            <p>
                Conditionals and loops also give signs for extractions. [...]
                <strong>With loops, extract the loop and the code within the 
                loop into its own method.</strong>
            </p>
        `,
        tags: [
            quoteTags.LongMethod,
            quoteTags.Extraction,
            quoteTags.Refactoring
        ],
        rating: 4
    },
    {
        id: "extract-method",
        chapter: 6,
        page: "110",
        content: `
            <h3>Motivation [for using Extract Method]</h3>
            <p>
                <i>Extract Method</i> is one of the most common refactorings I 
                do. I look at a method that is too long or look at code that 
                needs a comment to understand its purpose. I then turn that 
                fragment of code into its own method.
            </p>
            <p>
                I prefer short, well-named methods for several reasons.
                First, it increases the chances that other methods can use a
                method when the method is finely grained. Second, it allows
                the higher-level methods to read more like a series of
                comments. Overriding also is easier when the methods are
                finely grained.
            </p>
            <p>
                <strong>It does take a little getting used to if you are used 
                to seeing larger methods. And small methods really work only 
                when you have good names</strong>, so you need to pay attention 
                to naming. People sometimes ask me what length I look for in a 
                method. To me length is not the issue. The key is the semantic 
                distance between the method name and the method body. <strong>If 
                extracting improves clarity, do it, even if the name is longer 
                than the code you have extracted</strong>
            </p>
        `,
        tags: [
            quoteTags.Extraction,
            quoteTags.Common,
            quoteTags.Clarity,
            quoteTags.Naming,
            quoteTags.LongMethod,
            quoteTags.Refactoring
        ],
        rating: 4
    },
    {
        id: "replace-temp-with-query",
        chapter: 6,
        page: "120",
        content: `
            <h3>Replace Temp with Query</h3>
            ${java(`
                double basePrice = _quantity * _itemPrice;
                if (basePrice > 1000)
                    return basePrice * 0.95;
                else
                    return basePrice * 0.98;
            `)}
            ${arrowDown()}
            ${java(`
                if (basePrice() > 1000)
                    return basePrice() * 0.95;
                else
                    return basePrice() * 0.98;
                ...
                double basePrice() {
                    return _quantity * _itemPrice;
                }
            `)}
            <p>
                [...] <strong>You may be concerned about performance in this 
                case. As with other performance issues, let it slide for the
                moment. Nine times out of ten, it won't matter.</strong>
                When it does matter, you will fix the problem during
                optimization. With your code better factored, you will often
                find more powerful optimizations, which you would have
                missed without refactoring. If worse comes to worse, it's
                very easy to put the temp back.
            </p>
        `,
        tags: [
            quoteTags.Common,
            quoteTags.Clarity,
            quoteTags.Optimization,
            quoteTags.Code,
            quoteTags.Extraction,
            quoteTags.Refactoring
        ],
        rating: 4
    },
    {
        id: "Introduce-explaining-variable",
        chapter: 6,
        page: "124",
        content: `
            <h3>Introduce Explaining Variable</h3>
            ${java(`
                if ( (platform.toUpperCase().indexOf("MAC") > -1) &&
                      (browser.toUpperCase().indexOf("IE") > -1) &&
                       wasInitialized() && resize > 0 )
                {
                    // do something
                }
            `)}
            ${arrowDown()}
            ${java(`
                final boolean isMacOs     = platform.toUpperCase().indexOf("MAC") > -1
                final boolean isIEBrowser = browser.toUpperCase().indexOf("IE")  > -1;
                final boolean wasResized  = resize > 0;

                if (isMacOs && isIEBrowser && wasInitialized() && wasResized) {
                    // do something
                }
            `)}
            <p>
                <i>Introduce Explaining Variable</i> is a very common 
                refactoring, but I confess I don't use it that much. <strong>I 
                almost always prefer to use <i>Extract Method</i> if I can.</strong>
                A temp is useful only within the context of one method. A method 
                is useable throughout the object and to other objects. There are
                times, however, when local variables make it difficult to use 
                <i>Extract Method</i>. That's when I use <i>Introduce Explaining 
                Variable</i>.
            </p>
        `,
        tags: [
            quoteTags.Common,
            quoteTags.Clarity,
            quoteTags.Code,
            quoteTags.Extraction,
            quoteTags.Refactoring
        ],
        rating: 4
    },
    {
        id: "decompose-conditional",
        chapter: 9,
        page: "239",
        content: `
            <h3>Decompose Conditional</h3>
            <p>
                Suppose I'm calculating the charge for something that has
                separate rates for winter and summer:
            </p>
            ${java(`
                if (date.before (SUMMER_START) || date.after(SUMMER_END))
                    charge = quantity * _winterRate + _winterServiceCharge;
                else charge = quantity * _summerRate;"
            `)}
            <p>I extract the conditional and each leg as follows:</p>
            ${java(`
                if (notSummer(date))
                    charge = winterCharge(quantity);
                else charge = summerCharge (quantity);

                private boolean notSummer(Date date) {
                    return date.before (SUMMER_START) || date.after(SUMMER_END);
                }

                private double summerCharge(int quantity) {
                    return quantity * _summerRate;
                }

                private double winterCharge(int quantity) {
                    return quantity * _winterRate + _winterServiceCharge;
                }
            `)}
            <p>
                [...] Many programmers don't extract the condition parts in
                situations such as this. The conditions often are quite short, 
                so it hardly seems worth it. <strong>Although the condition is 
                often short, there often is a big gap between the intention of 
                the code and its body.</strong> Even in this little case, 
                reading notSummer(date) conveys a clearer message to me than 
                does the original code. With the original I have to look at the 
                code and figure out what it is doing. It's not difficult to do 
                that here, but even so the extracted method reads more like a 
                comment.
            </p>
            <p>
                [...] <strong>Extracting a condition is one of the most useful 
                things you can do to clarify your code. It replaces a statement
                of what you are doing with why you are doing it.</strong>
            </p>
        `,
        tags: [
            quoteTags.Code,
            quoteTags.Clarity,
            quoteTags.Extraction,
            quoteTags.Common,
            quoteTags.Refactoring
        ],
        rating: 4
    },
    {
        id: "replace-conditional-with-gard-clauses",
        chapter: 9,
        page: "250",
        content: `
            <h3>Replace Nested Conditional with Guard Clauses</h3>
            ${java(`
                double getPayAmount() {
                    double result;
                    if (_isDead) result = deadAmount();
                    else {
                        if (_isSeparated) result = separatedAmount();
                        else {
                            if (_isRetired) result = retiredAmount();
                            else result = normalPayAmount();
                        };
                    }
                    return result;
                };
            `)}
            ${arrowDown()}
            ${java(`
                double getPayAmount() {
                    if (_isDead) return deadAmount();
                    if (_isSeparated) return separatedAmount();
                    if (_isRetired) return retiredAmount();
                    return normalPayAmount();
                };
            `)}
            <p>
                The key point about <i>Replace Nested Conditional with Guard 
                Clauses</i> is one of emphasis. If you are using an if-then-else 
                construct you are giving equal weight to the if leg and the else 
                leg. This communicates to the reader that the legs are equally 
                likely and important. Instead the guard clause says, "This is 
                rare, and if it happens, do something and get out."
            </p>
        `,
        tags: [
            quoteTags.Clarity,
            quoteTags.Common,
            quoteTags.Code,
            quoteTags.Refactoring
        ],
        rating: 4
    },
    {
        id: "rename-method-not-right-the-first-time",
        chapter: 10,
        page: "273",
        content: `
            <h3>Rename Method - Motivation</h3>
            <p>
                An important part of the code style I am advocating is
                <strong>small methods to factor complex processes. Done badly, 
                this can lead you on a merry dance to find out what all the 
                little methods do. The key to avoiding this merry dance is 
                naming the methods.</strong> Methods should be named in a way 
                that communicates their intention. A good way to do this is to 
                think what the comment for the method would be and turn that 
                comment into the name of the method.
            </p>
            <p>
                Life being what it is, <strong>you won't get your names right 
                the first time.</strong> In this situation you may well be 
                tempted to leave it—after all it's only a name. That is the work 
                of the evil demon Obfuscatis; don't listen to him. <strong>If 
                you see a badly named method, it is imperative that you change 
                it. Remember your code is for a human first and a computer 
                second.</strong> Humans need good names. Take note of when you 
                have spent ages trying to do something that would have been 
                easier if a couple of methods had been better named. 
                <strong>Good naming is a skill that requires practice; improving
                this skill is the key to being a truly skillful programmer.</strong>
                The same applies to other aspects of the signature. If 
                reordering parameters clarifies matters, do it [...].
            </p>
        `,
        tags: [
            quoteTags.Refactoring,
            quoteTags.Extraction,
            quoteTags.Naming,
            quoteTags.LongMethod,
            quoteTags.Clarity,
            quoteTags.CodingHabits,
            quoteTags.Efficiency
        ],
        rating: 4
    },
    {
        id: "refactoring-p409",
        chapter: 15,
        page: "409",
        content: `
            <h3>Putting It All Together (<i>by Kent Beck</i>)</h3>
            <p>
                Now you have all the pieces of the puzzle. You've learned
                the refactorings. You've studied the catalog. You've
                practiced all of the checklists. You've gotten good at
                testing, so you aren't afraid. Now you may think you know
                how to refactor. Not yet.
            </p>
            <p>
                The list of techniques is only the beginning. It is the gate
                you must pass through. Without the techniques, you can't
                manipulate the design of running programs. With them, you
                still can't, but at least you can start.
            </p>
            <p>
                Why are all these wonderful techniques really only the
                beginning? Because you don't yet know when to use them and
                when not to, when to start and when to stop, when to go and
                when to wait. It is the rhythm that makes for refactoring,
                not the individual notes.
            </p>
            <p>
                How will you know when you are really getting it? You'll
                know <strong>when you start to calm down</strong>. When you
                feel absolute confidence that no matter how screwed up
                someone left it, you can make the code better, enough better
                to keep making progress.
            </p>
            <p>
                Mostly, though, you'll know you're getting it when you can
                stop with confidence. Stopping is the strongest move in the
                refactorer's repertoire. You see a big goal—a host of
                subclasses can be eliminated. You begin to move toward that
                goal, each step small and sure, each step backed up by
                keeping all the tests running. You're getting close. You
                only have two methods to unify in each of the subclasses,
                and then they can go away.
            </p>
            <p>
                That's when it happens. You run out of gas. Maybe it's
                getting late and you are becoming fatigued. Maybe you were
                wrong in the first place and you can't really get rid of all
                of those subclasses. Maybe you don't have the tests to back
                you up. <strong>Whatever the cause, your confidence is gone. 
                You can't make the next step with certainty. You don't think 
                you will screw anything up, but you're not sure.</strong>
            </p>
            <p>
                <strong>That's when you stop.</strong> If the code is
                already better, integrate and release what you've done. If
                it isn't better, walk away. Flush it. Glad to have learned a
                lesson, pity it didn't work out. What's on for tomorrow?
            </p>
            <p>
                [...] You are likely to see new possibilities in your code, 
                even if you have worked with it for years, once you know about
                the smells and the refactorings that can sterilize them.
                <strong>You may even want to jump in and clean up every problem
                in sight. Don't.</strong> No manager wants to hear the team 
                say it has to stop for three months to clean up the mess it has 
                created. And, well, they shouldn't. <strong>A big refactoring 
                is a recipe for disaster.</strong>
            </p>
            <p>
                <strong>As ugly as the mess looks now, discipline yourself to
                nibble away at the problem. When you are going to add some new 
                functionality to an area, take a few minutes to clean it up 
                first. If you have to add some tests before you can clean up 
                with confidence, add them. You'll be glad you did. Refactoring 
                first is less dangerous than adding new code. Touching the code 
                will remind you how it works. You'll get done faster, and 
                you'll have the satisfaction of knowing that the next time you 
                pass this way, the code will look better than it did this time.
                </strong>
            </p>
            <p>
                Never forget the two hats. When you refactor, you will
                inevitably discover cases in which the code doesn't work
                right. You'll be absolutely certain of it. <strong>Resist 
                temptation.</strong> When you are refactoring, your goal is to 
                leave the code computing exactly the same answers it was when 
                you found it. Nothing more, nothing less. <strong>Keep a list 
                (I always have an index card beside my computer) of things to 
                change later — test cases to add or change, unrelated 
                refactorings, documents to write, diagrams to draw. That way 
                you won't lose those thoughts, but you won't let them mess up 
                what you are doing now.</strong>
            </p>
        `,
        tags: [
            quoteTags.Refactoring,
            quoteTags.TaskSeparation,
            quoteTags.CodingHabits,
            quoteTags.Behaviour,
            quoteTags.Efficiency,
            quoteTags.Story
        ],
        rating: 3
    }
];

function createTip(message: string) {
    const margin = 10;
    const styles = joinStyles({
        display: "flex",
        "border-top": "1px solid #ccc",
        "border-bottom": "1px solid #ccc",
        "justify-content": "space-between",
        padding: `${margin}px`
    });

    return `
        <div style="${styles}">
            <img 
                style="display: block; margin: ${margin}px" 
                alt="Tip"
                title="Tip"
                height="50"
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Noun_Project_lightbulb_icon_1263005_cc.svg" 
            />
            <div style="margin: ${margin}px">${message}</div>
        </div>
    `;
}
function arrowDown() {
    return `<p style="padding-left: 50px; font-size: 1.5rem">⇓</p>`;
}
