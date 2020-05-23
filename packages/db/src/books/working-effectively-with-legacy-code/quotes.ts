import { QuoteDBModel, Rating } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { cpp, java, joinStyles, markdown, titled } from "../utils";

export const chapters = [
    "Preface",
    "Changing Software",
    "Working with Feedback",
    "Sensing and Separation",
    "The Seam Model",
    "Tools",
    "I Don't Have Much Time and I Have to Change It",
    "It Takes Forever to Make a Change",
    "How Do I Add a Feature?",
    "I Can't Get This Class into a Test Harness",
    "I Can't Run This Method in a Test Harness",
    "I Need to Make a Change. What Methods Should I Test?",
    "I Need to Make Many Changes in One Area",
    "I Need to Make a Change, but I Don't Know What Tests to Write",
    "Dependencies on Libraries Are Killing Me",
    "My Application Is All API Calls",
    "I Don't Understand the Code Well Enough to Change It",
    "My Application Has No Structure",
    "My Test Code Is in the Way",
    "My Project Is Not Object Oriented. How Do I Make Safe Changes?",
    "This Class Is Too Big and I Don't Want It to Get Any Bigger",
    "I'm Changing the Same Code All Over the Place",
    "I Need to Change a Monster Method and I Can't Write Tests for It",
    "How Do I Know That I'm Not Breaking Anything?",
    "We Feel OverwhelmedIt Isn't Going to Get Any Better",
    "Dependency-Breaking Techniques",
    "Appendix: Refactoring"
];

export const quotes: QuoteDBModel[] = [
    {
        id: "legacy-code-is-simply-code-without-tests",
        chapter: 0,
        page: "xvi",
        tags: [quoteTags.Definition, quoteTags.Tests],
        rating: Rating.Amazing,
        content: `
            <p>
                To me, <strong>legacy code is simply code without 
                tests</strong>. I've gotten some grief for this definition. What 
                do tests have to do with whether code is bad? To me, the answer 
                is straightforward, and it is a point that I elaborate 
                throughout the book:
            </p>
            ${boxed(`
                <p>
                    Code without tests is bad code. It doesn't matter how well 
                    written it is; it doesn't matter how pretty or 
                    object-oriented or well-encapsulated it is. With tests, we 
                    can change the behavior of our code quickly and verifiably. 
                    Without them, we really don't know if our code is getting 
                    better or worse.
                </p>
            `)}
            <p>
                You might think that this is severe. What about clean code?
                If a code base is very clean and well structured, isn't that
                enough? Well, make no mistake. I love clean code. I love it
                more than most people I know, but while clean code is good,
                it's not enough. Teams take serious chances when they try to
                make large changes without tests. It is like doing aerial
                gymnastics without a net.
            </p>
        `
    },
    {
        id: "dont-minimize-changes-in-code",
        chapter: 1,
        page: "8",
        tags: [
            quoteTags.Team,
            quoteTags.Refactoring,
            quoteTags.Common,
            quoteTags.CodingHabits,
            quoteTags.BadCode
        ],
        rating: Rating.VeryGood,
        content: `
            <p>
                Most teams that I've worked with have tried to manage risk in a 
                very conservative way. <strong>They minimize the number of 
                changes that they make to the code base.</strong> Sometimes this 
                is a team policy: "If it's not broke, don't fix it." At other 
                times, it isn't anything that anyone articulates. The developers 
                are just very cautious when they make changes. "What? Create 
                another method for that? No, I'll just put the lines of code 
                right here in the method, where I can see them and the rest of 
                the code. It involves less editing, and it's safer."
            </p>
            <p>
                It's tempting to think that we can minimize software problems by 
                avoiding them, but, unfortunately, <strong>it always catches up 
                with us</strong>. When we avoid creating new classes and methods, 
                the existing ones grow larger and harder to understand. When you 
                make changes in any large system, you can expect to take a 
                little time to get familiar with the area you are working with. 
                The difference between good systems and bad ones is that, in the
                good ones, you feel pretty calm after you've done that
                learning, and you are confident in the change you are about
                to make. In poorly structured code, the move from figuring
                things out to making changes feels like jumping off a cliff
                to avoid a tiger. You hesitate and hesitate. "Am I ready to
                do it? Well, I guess I have to."
            </p>
            <p>
                Avoiding change has other bad consequences. When people
                don't make changes often they get rusty at it. Breaking down
                a big class into pieces can be pretty involved work unless
                you do it a couple of times a week. When you do, it becomes
                routine. You get better at figuring out what can break and
                what can't, and it is much easier to do.
            </p>
            <p>
                The last consequence of avoiding change is fear.
                Unfortunately, many teams live with incredible fear of
                change and it gets worse every day. Often they aren't aware
                of how much fear they have until they learn better
                techniques and the fear starts to fade away.
            </p>
            <p>
                We've talked about how avoiding change is a bad thing, but
                what is our alternative? One alternative is to just try
                harder. <strong>Maybe we can hire more people so that there is 
                enough time for everyone to sit and analyze, to scrutinize all
                of the code and make changes the "right" way.</strong>
                Surely more time and scrutiny will make change safer. Or
                will it? After all of that scrutiny, will anyone know that
                they've gotten it right?
            </p>
        `
    },
    {
        id: "about-edit-and-pray",
        chapter: 2,
        page: "9",
        tags: [quoteTags.CodingHabits, quoteTags.Tests],
        rating: Rating.VeryGood,
        content: `
            <p>
                Changes in a system can be made in two primary ways. <strong>I 
                like to call them <i>Edit and Pray</i> and <i>Cover and 
                Modify</i>. Unfortunately, <i>Edit and Pray</i> is pretty much 
                the industry standard.</strong> When you use <i>Edit and 
                Pray</i>, you carefully plan the changes you are going to make, 
                you make sure that you understand the code you are going to 
                modify, and then you start to make the changes. When you're 
                done, you run the system to see if the change was enabled, and 
                then you poke around further to make sure that you didn't break 
                anything. The poking around is essential. When you make your 
                changes, you are hoping and praying that you'll get them right, 
                and you take extra time when you are done to make sure that you
                did.
            </p>
            <p>
                Superficially, <i>Edit and Pray</i> seems like "working with
                care," a very professional thing to do. The "care" that you take 
                is right there at the forefront, and you expend extra care when 
                the changes are very invasive because much more can go wrong.
                <strong>But safety isn't solely a function of care. I don't
                think any of us would choose a surgeon who operated with a 
                butter knife just because he worked with care.</strong>
                Effective software change, like effective surgery, really
                involves deeper skills. Working with care doesn't do much for 
                you if you don't use the right tools and techniques.
            </p>
            <p>
                <i>Cover and Modify</i> is a different way of making changes. 
                The idea behind it is that it is possible to work with a 
                <i>safety net</i> when we change software. [...] When we have a 
                good set of tests around a piece of code, we can make changes 
                and find out very quickly whether the effects were good or bad. 
                We still apply the same care, but with the feedback we get, we 
                are able to make changes more carefully.
            </p>
        `
    },
    {
        id: "what-is-a-unit-test",
        chapter: 2,
        page: "13",
        tags: [quoteTags.Tests, quoteTags.Optimization, quoteTags.Definition],
        rating: Rating.VeryGood,
        content: `
            <p>
                In the industry, people often go back and forth about whether 
                particular tests are unit tests. Is a test really a unit test if 
                it uses another production class? I go back to the two 
                qualities: <strong>Does the test run fast? Can it help us 
                localize errors quickly?</strong> Naturally, there is a 
                continuum. Some tests are larger, and they use several classes 
                together. In fact, they may seem to be little integration tests. 
                By themselves, they might seem to run fast, but what happens 
                when you run them all together? When you have a test that 
                exercises a class along with several of its collaborators, it 
                tends to grow. If you haven't taken the time to make a class 
                separately instantiable in a test harness, how easy will it be 
                when you add more code? It never gets easier. People put it off. 
                Over time, the test might end up taking as long as 1/10th of a
                second to execute.
            </p>
            ${boxed(`
                <p>
                    A unit test that takes 1/10th of a second to run is a slow 
                    unit test.
                </p>
            `)}
            <p>
                Yes, I'm serious. At the time that I'm writing this, 1/10th of a 
                second is an eon for a unit test. Let's do the math. If you have 
                a project with 3,000 classes and there are about 10 tests 
                apiece, that is 30,000 tests. How long will it take to run all 
                of the tests for that project if they take 1/10th of a second 
                apiece? Close to an hour. That is a long time to wait for 
                feedback. You don't have 3,000 classes? Cut it in half. That is 
                still a half an hour. On the other hand, what if the tests take 
                1/100th of a second apiece? Now we are talking about 5 to 10 
                minutes. <strong>When they take that long, I make sure that I 
                use a subset to work with, but I don't mind running them all
                every couple of hours.</strong>
            </p>
        `
    },
    {
        id: "the-legacy-code-dilemma",
        chapter: 2,
        page: "16",
        tags: [quoteTags.Tests, quoteTags.Architecture],
        rating: Rating.Good,
        content: `
            ${boxed(`
                <h3>The Legacy Code Dilemma</h3>
                <p>
                    When we change code, we should have tests in place. To put
                    tests in place, we often have to change code.
                </p>
            `)}
        `
    },
    {
        id: "breaking-dependencies-can-leave-scars",
        chapter: 2,
        page: "18",
        tags: [quoteTags.Dependency, quoteTags.Clarity, quoteTags.Comparison],
        rating: Rating.Good,
        content: `
            ${boxed(`
                <p>
                    When you break dependencies in legacy code, you often have
                    to suspend your sense of aesthetics a bit. Some dependencies
                    break cleanly; others end up looking less than ideal from a
                    design point of view. <strong>They are like the incision 
                    points in surgery: There might be a scar left in your code 
                    after your work, but everything beneath it can get 
                    better.</strong>
                </p>
                <p>
                    If later you can cover code around the point where you broke
                    the dependencies, you can heal that scar, too.
                </p>
            `)}
        `
    },
    {
        id: "seam",
        chapter: 4,
        page: "41",
        tags: [
            quoteTags.Tests,
            quoteTags.Definition,
            quoteTags.Dependency,
            quoteTags.Code,
            quoteTags.OO
        ],
        rating: Rating.Interesting,
        content: `
            ${boxed(`
                <h3>Seam</h3>
                <p>
                    A seam is a place where you can alter behavior in your
                    program without editing in that place. [...]
                </p>
            `)}
            <p>
                In object-oriented languages, not all method calls are
                seams. Here is an example of a call that isn't a seam:
            </p>
            ${java(`
                public class CustomSpreadsheet extends Spreadsheet
                {
                    public Spreadsheet buildMartSheet() {
                        ...
                        Cell cell = new FormulaCell(this, "A1", "=A2+A3");
                        ...
                        **cell.Recalculate();**
                        ...
                    }
                    ...
                }
            `)}
            <p>
                In this code, we're creating a cell and then using it in the
                same method. <strong>Is the call to <code>Recalculate</code> 
                an object seam? No.</strong> There is no enabling point. We 
                can't change which <code>Recalculate</code> method is called 
                because the choice depends on the class of the cell. The class 
                of the cell is decided when the object is created, and we can't 
                change it without modifying the method. What if the code looked 
                like this?
            </p>
            ${java(`
                public class CustomSpreadsheet extends Spreadsheet
                {
                    public Spreadsheet buildMartSheet(Cell cell) {
                        ...
                        **cell.Recalculate();**
                        ...
                    }
                    ...
                }
            `)}
            <p>
                Is the call to <code>cell.Recalculate</code> in
                <code>buildMartSheet</code> a seam now? Yes. We can create a
                <code>CustomSpreadsheet</code> in a test and call
                <code>buildMartSheet</code> with whatever kind of
                <code>Cell</code> we want to use. We'll have ended up
                varying what the call to <code>cell.Recalculate</code> does
                without changing the method that calls it. [...]
            </p>
            <p>
                Isn't this all rather indirect? If we don't like a dependency, 
                why don't we just go into the code and change it? Sometimes that 
                works, but in particularly nasty legacy code, <strong>often the 
                best approach is to do what you can to modify the code as little 
                as possible when you are getting tests in place</strong>. If you 
                know the seams that your language offers and how to use them, 
                you can often get tests in place more safely than you could 
                otherwise.
            </p>
        `
    },
    {
        id: "try-no-code-without-tests",
        chapter: 6,
        page: "58",
        tags: [quoteTags.Team, quoteTags.Tests],
        rating: Rating.Good,
        content: `
            <p>
                When I work with teams, I often start by asking them to take
                part in an experiment. For an iteration, we try to make no
                change to the code without having tests that cover the change.
                If anyone thinks that they can't write a test, they have to call
                a quick meeting in which they ask the group whether it is
                possible to write the test. <strong>The beginnings of those 
                iterations are terrible. People feel that they aren't getting 
                all the work done that they need to.</strong> But slowly, they 
                start to discover that they are revisiting better code. Their 
                changes are getting easier, and they know in their gut that this 
                is what it takes to move forward in a better way. It takes time 
                for a team to get over that hump, but if there is one thing that 
                I could instantaneously do for every team in the world, it would 
                be to give them that shared experience, that experience that you 
                can see in their faces: "Boy, we aren't going back to that 
                again."
            </p>
        `
    },
    {
        id: "sprout-method",
        chapter: 6,
        page: "59",
        tags: [
            quoteTags.Tests,
            quoteTags.Architecture,
            quoteTags.CodingHabits,
            quoteTags.LongMethod,
            quoteTags.Code
        ],
        rating: Rating.VeryGood,
        content: `
            <h3>Sprout Method</h3>
            <p>
                When you need to add a feature to a system and it can be 
                formulated completely as new code, <strong>write the code in a 
                new method</strong>. Call it from the places where the new 
                functionality needs to be. You might not be able to get those 
                call points under test easily, but <strong>at the very least, 
                you can write tests for the new code</strong>. Here is an 
                example.
            </p>
            ${java(`
                public class TransactionGate
                {
                    public void postEntries(List entries) {
                        for (Iterator it = entries.iterator(); it.hasNext(); ) {
                            Entry entry = (Entry)it.next();
                            entry.postDate();
                        }
                        transactionBundle.getListManager().add(entries);
                    }
                    ...
                }
            `)}
            <p>
                We need to add code to verify that none of the new entries are 
                already in <code>transactionBundle</code> before we post their 
                dates and add them. Looking at the code, it seems that this has 
                to happen at the beginning of the method, before the loop. But, 
                actually, it could happen inside the loop. We could change the 
                code to this:
            </p>
            ${java(`
                public class TransactionGate
                {
                    public void postEntries(List entries) {
                        List entriesToAdd = new LinkedList();
                        for (Iterator it = entries.iterator(); it.hasNext(); ) {
                            Entry entry = (Entry)it.next();
                            if (!transactionBundle.getListManager().hasEntry(entry) {
                                entry.postDate();
                                entriesToAdd.add(entry);
                            }
                        }
                        transactionBundle.getListManager().add(entriesToAdd);
                    }
                    ...
                }
            `)}
            <p>
                This seems like a simple change, but it was pretty invasive. How 
                do we know we got it right? There isn't any separation between 
                the new code we've added and the old code. <strong>Worse, we're 
                making the code a little muddier.</strong> We're mingling two 
                operations here: date posting and duplicate entry detection. 
                This method is rather small, but already it is a little less 
                clear, and we've also introduced a temporary variable. 
                Temporaries aren't necessarily bad, but sometimes they attract 
                new code. If the next change that we have to make involves work 
                with all nonduplicated entries before they are added, well, 
                there is only one place in the code that a variable like that 
                exists: right in this method. It will be tempting to just put 
                that code in the method also. Could we have done this in a 
                different way?
            </p>
            <p>
                Yes. We can treat duplicate entry removal as a completely
                separate operation. We can use <i>test-driven development</i> to 
                create a new method named <code>uniqueEntries</code>:
            </p>
            ${java(`
                public class TransactionGate
                {
                    ...
                    List uniqueEntries(List entries) {
                        List result = new ArrayList();
                        for (Iterator it = entries.iterator(); it.hasNext(); ) {
                            Entry entry = (Entry)it.next();
                            if (!transactionBundle.getListManager().hasEntry(entry) {
                                result.add(entry);
                            }
                        }
                        return result;
                    }
                    ...
                }
            `)}
            <p>
                It would be easy to write tests that would drive us toward
                code like that for this method. When we have the method, we
                can go back to the original code and add the call.
            </p>
            ${java(`
                public class TransactionGate
                {
                    ...
                    public void postEntries(List entries) {
                        **List entriesToAdd = uniqueEntries(entries);**
                        for (Iterator it = entriesToAdd.iterator(); it.hasNext(); ) {
                            Entry entry = (Entry)it.next();
                            entry.postDate();
                        }
                        transactionBundle.getListManager().add(**entriesToAdd**);
                    }
                    ...
                }
            `)}
            <p>
                We still have a new temporary variable here, but the code is
                much less cluttered. If we need to add more code that works
                with the nonduplicated entries, we can make a method for
                that code also and call it from here. If we end up with yet
                more code that needs to work with them, we can introduce a
                class and shift all of those new methods over to it. The net
                effect is that we end up keeping this method small and we
                end up with shorter, easier-to-understand methods overall.
            </p>
        `
    },
    {
        id: "static-methods-as-staging-area",
        chapter: 6,
        page: "62",
        tags: [quoteTags.Architecture, quoteTags.CodingHabits, quoteTags.OO],
        rating: Rating.VeryGood,
        content: `
            <p>
                I tend to look at static methods on classes as a staging area.
                Often <strong>after you have several statics and you notice that 
                they share some of the same variables, you are able to see that
                you can make a new class and move the statics over to the new 
                class as instance methods</strong>.
            </p>
        `
    },
    {
        id: "sprout-class",
        chapter: 6,
        page: "63",
        tags: [
            quoteTags.Tests,
            quoteTags.Architecture,
            quoteTags.CodingHabits,
            quoteTags.LongMethod,
            quoteTags.Code,
            quoteTags.OO
        ],
        rating: Rating.VeryGood,
        content: `
            <h3>Sprout Class</h3>
            <p>
                [...] Consider the case in which you have to make changes to a
                class, but there is just no way that you are going to be
                able to create objects of that class in a test harness in a
                reasonable amount of time, so there is no way to sprout a
                method and write tests for it on that class. [...]
            </p>
            <p>
                In these cases, you can create another class to hold your
                changes and use it from the source class. Let's look at a
                simplified example.
            </p>
            <p>
                Here is an ancient method on a C++ class called
                <code>QuarterlyReportGenerator</code>:
            </p>
            ${cpp(`
                std::string QuarterlyReportGenerator::generate()
                {
                    std::vector<Result> results = database.queryResults(beginDate, endDate);
                    std::string pageText;
                    pageText += "<html><head><title>"
                        "Quarterly Report"
                        "</title></head><body><table>";
                    if (results.size() != 0) {
                        for (std::vector<Result>::iterator it = results.begin();
                                it != results.end();
                                ++it) {
                            pageText += "<tr>";
                            pageText += "<td>" + it->department + "</td>";
                            pageText += "<td>" + it->manager + "</td>";
                            char buffer [128];
                            sprintf(buffer, "<td>$%d</td>", it->netProfit / 100);
                            pageText += std::string(buffer);
                            sprintf(buffer, "<td>$%d</td>", it->operatingExpense / 100);
                            pageText += std::string(buffer);
                            pageText += "</tr>";
                        }
                    } else {
                        pageText += "No results for this period";
                    }
                    pageText += "</table>";
                    pageText += "</body>";
                    pageText += "</html>";

                    return pageText;
                }
            `)}
            <p>
                Let's suppose that the change that we need to make to the
                code is to add a header row for the HTML table it's
                producing. The header row should look something like this:
            </p>
            ${cpp(`
                "<tr><td>Department</td><td>Manager</td><td>Profit</td><td>Expenses</td></tr>"
            `)}
            <p>
                Furthermore, let's suppose that this is a huge class and that it 
                would take about a day to get the class in a test harness, and 
                this is time that we just can't afford right now.
            </p>
            <p>
                We could formulate the change as a little class called
                <code>QuarterlyReportTableHeaderProducer</code> and develop
                it using <i>test-driven development</i>.
            </p>
            ${cpp(`
                using namespace std;

                class QuarterlyReportTableHeaderProducer
                {
                public:
                    string makeHeader();
                };

                string QuarterlyReportTableProducer::makeHeader()
                {
                    return "<tr><td>Department</td><td>Manager</td>"
                        "<td>Profit</td><td>Expenses</td>";
                }
            `)}
            <p>
                When we have it, we can create an instance and call it
                directly in <code>QuarterlyReportGenerator::generate()</code>:
            </p>
            ${cpp(`
                ...
                QuarterlyReportTableHeaderProducer producer;
                pageText += producer.makeHeader();
                ...
            `)}
            <p>
                <strong>I'm sure that at this point you're looking at this and
                saying, "He can't be serious. It's ridiculous to create a class 
                for this change!</strong> It's just a tiny little class that 
                doesn't give you any benefit in the design. It introduces a 
                completely new concept that just clutters the code." Well, at 
                this point, that is true. The only reason we're doing it is to 
                get out of a bad dependency situation, but let's take a closer 
                look.
            </p>
            <p>
                What if we'd named the class
                <code>QuarterlyReportTableHeaderGenerator</code> and gave it
                this sort of an interface?
            </p>
            ${cpp(`
                class QuarterlyReportTableHeaderGenerator
                {
                public:
                    string generate();
                };
            `)}
            <p>
                Now the class is part of a concept that we're familiar with.
                <code>QuarterlyReportTableHeaderGenerator</code> is a generator, 
                just like <code>QuarterlyReportGenerator</code>. They both have 
                <code>generate()</code> methods that return strings. We can 
                document that commonality in the code by creating an interface 
                class and having them both inherit from it:
            </p>
            ${cpp(`
                class HTMLGenerator
                {
                public:
                    virtual ~HTMLGenerator() = 0;
                    virtual string generate() = 0;
                };

                class QuarterlyReportTableHeaderGenerator : public HTMLGenerator
                {
                public:
                    ...
                    virtual string generate();
                    ...
                };

                class QuarterlyReportGenerator : public HTMLGenerator
                {
                public:
                    ...
                    virtual string generate();
                    ...
                };
            `)}
            <p>
                As we do more work, we might be able to get
                <code>QuarterlyReportGenerator</code> under test and change
                its implementation so that it does most of its work using
                generator classes.
            </p>
            <p>
                In this case, we were able to quickly fold the class into the 
                set of concepts that we already had in the application. In many 
                other cases, we can't, but <strong>that doesn't mean that we 
                should hold back</strong>. Some sprouted classes never fold back 
                into the main concepts in the application. Instead, they become 
                new ones. You might sprout a class and think that it is rather 
                insignificant to your design until you do something similar 
                someplace else and see the similarity. Sometimes you are able to 
                factor out duplicated code in the new classes, and often you 
                have to rename them, but don't expect it all to happen at once.
            </p>
            <p>
                <strong>The way that you look at a sprouted class when you first
                create it and the way that you look at it after a few months are 
                often significantly different.</strong> The fact that you have 
                this odd new class in your system gives you plenty to think 
                about. When you need to make a change close to it, you might 
                start to think about whether the change is part of the new 
                concept or whether the concept needs to change a little. This is 
                all part of the ongoing process of design.
            </p>
            <p>
                Essentially two cases lead us to <i>Sprout Class</i>. In one
                case, your changes lead you toward adding an entirely new
                responsibility to one of your classes. [...] The other case
                is the one we led off this chapter with. We have a small bit
                of functionality that we could place into an existing class,
                but we can't get the class into a test harness.
            </p>
        `
    },
    {
        id: "wrap-method",
        chapter: 6,
        page: "67",
        tags: [
            quoteTags.Architecture,
            quoteTags.CodingHabits,
            quoteTags.LongMethod,
            quoteTags.Code
        ],
        rating: Rating.VeryGood,
        content: `
            <h3>Wrap Method</h3>
            <p>
                Adding behavior to existing methods is easy to do, but
                <strong>often it isn't the right thing to do.</strong> When you 
                first create a method, it usually does just one thing for a 
                client. <strong>Any additional code that you add later is sort 
                of suspicious.</strong> Chances are, you're adding it just 
                because it has to execute at the same time as the code you're 
                adding it to. Back in the early days of programming, 
                <strong>this was named <i>temporal coupling</i>, and it is a 
                pretty nasty thing when you do it excessively.</strong> When you 
                group things together just because they have to happen at the 
                same time, the relationship between them isn't very strong.
                <strong>Later you might find that you have to do one of those
                things without the other, but at that point they might have 
                grown together.</strong> Without a seam, separating them can be 
                hard work.
            </p>
            <p>
                When you need to add behavior, you can do it in a not-so-tangled 
                way. One of the techniques that you can use is <i>Sprout 
                Method</i>, but there is another that is very useful at times. I 
                call it <i>Wrap Method</i>. Here is a simple example.
            </p>
            ${java(`
                public class Employee {
                    ...
                    public void pay() {
                        Money amount = new Money();
                        for (Iterator it = timecards.iterator(); it.hasNext(); ) {
                            Timecard card = (Timecard)it.next();
                            if (payPeriod.contains(date)) {
                                amount.add(card.getHours() * payRate);
                            }
                        }
                        payDispatcher.pay(this, date, amount);
                    }
                }
            `)}
            <p>
                In this method, we are adding up daily timecards for an employee 
                and then sending his payment information to a 
                <code>PayDispatcher</code>. Let's suppose that a new requirement 
                comes along. Every time that we pay an employee, we have to 
                update a file with the employee's name so that it can be sent 
                off to some reporting software. The easiest place to put the 
                code is in the pay method. After all, it has to happen at the 
                same time, right? What if we do this instead?
            </p>
            ${java(`
                public class Employee {
                    private void **dispatchPayment() {**
                        Money amount = new Money();
                        for (Iterator it = timecards.iterator(); it.hasNext(); ) {
                            Timecard card = (Timecard)it.next();
                            if (payPeriod.contains(date)) {
                                amount.add(card.getHours() * payRate);
                            }
                        }
                        payDispatcher.pay(this, date, amount);
                    }

                    public void pay() {
                        logPayment();
                        **dispatchPayment();**
                    }

                    private void logPayment() {
                        ...
                    }
                 }
            `)}
            <p>
                In the code, I've renamed <code>pay()</code> as
                <code>dispatchPayment()</code> and made it private. Next, I
                created a new <code>pay</code> method that calls it. Our new
                <code>pay()</code> method logs a payment and then dispatches
                payment. Clients who used to call pay() don't have to know
                or care about the change. They just make their call, and
                everything works out okay.
            </p>
            <p>
                This is one form of <i>Wrap Method</i>. We create a method
                with the name of the original method and have it delegate to
                our old code. We use this when we want to add behavior to
                existing calls of the original method. If every time a
                client calls <code>pay()</code> we want logging to occur,
                this technique can be very useful.
            </p>
            <p>
                There is another form of <i>Wrap Method</i> that we can use
                when we just want to add a new method, a method that no one
                calls yet. In the previous example, if we wanted logging to
                be explicit, we could add a <code>makeLoggedPayment</code>
                method to <code>Employee</code> like this:
            </p>
            ${java(`
                public class Employee {
                    public void makeLoggedPayment() {
                        logPayment();
                        pay();
                    }

                    public void pay() {
                        ...
                    }

                    private void logPayment() {
                        ...
                    }
                }
            `)}
            <p>
                Now users have the option of paying in either way. It was
                described by Kent Beck in <i>Smalltalk Patterns: Best 
                Practices</i> (Pearson Education, 1996).
            </p>
            <p>
                <i>Wrap Method</i> is a great way to introduce seams while
                adding new features. There are only a couple of downsides.
                The first is that the new feature that you add can't be
                intertwined with the logic of the old feature. It has to be
                something that you do either before or after the old feature.
                <strong>Wait, did I say that is bad? Actually, it isn't. Do it
                when you can.</strong> <strong>The second (and more real) 
                downside is that you have to make up a new name for the old code 
                that you had in the method.</strong> In this case, I named the 
                code in the <code>pay()</code> method 
                <code>dispatchPayment()</code>. That is a bit of a stretch, and, 
                frankly, I don't like the way the code ended up in this example. 
                The <code>dispatchPayment()</code> method is really doing more 
                than dispatching; it calculates pay also. If I had tests in 
                place, chances are, I'd extract the first part of 
                <code>dispatchPayment()</code> into its own method named 
                <code>calculatePay()</code> and make the <code>pay()</code> 
                method read like this:
            </p>
            ${java(`
                public void pay() {
                    logPayment();
                    Money amount = calculatePay();
                    dispatchPayment(amount);
                }
            `)}
            <p>
                That seems to separate all of the responsibilities well. [...]
            </p>
            <p>
                I usually use <i>Sprout Method</i> when the code I have in
                the existing method communicates a clear algorithm to the
                reader. I move toward <i>Wrap Method</i> when I think that
                the new feature I'm adding is as important as the work that
                was there before.
            </p>
        `
    },
    {
        id: "the-hard-part-is-the-initial-set-of-steps",
        chapter: 6,
        page: "75",
        tags: [
            quoteTags.CodingHabits,
            quoteTags.Inspiring,
            quoteTags.Motivation,
            quoteTags.Efficiency
        ],
        rating: Rating.Good,
        content: `
            <p>
                The biggest obstacle to improvement in large code bases is the
                existing code. "Duh," you might say. But I'm not talking about
                how hard it is to work in difficult code; I'm talking about what
                that code leads you to believe. <strong>If you spend most of 
                your day wading through ugly code, it's very easy to believe 
                that it will always be ugly and that any little thing that you 
                do to make it better is simply not worth it.</strong> You might 
                think, "What does it matter whether I make this little piece 
                nicer if 90 percent of the time I'll still being working with 
                murky slime? Sure, I can make this piece better, but what will 
                that do for me this afternoon? Tomorrow?" Well, if you look at 
                it that way, I'd have to agree with you. Not much. But if you
                consistently do these little improvements, your system will
                start to look significantly different over the course of a
                couple of months. At some point, you'll come to work in the
                morning expecting to sink your hands into some slime and
                discover, "Huh, this code looks pretty good. It looks like
                someone was in here refactoring recently." <strong>At that 
                point, when you feel the difference between good code and bad 
                code in your gut, you are a changed person.</strong> You might 
                even find yourself wanting to refactor far in excess of what you 
                need to get the job done, just to make your life easier. It 
                probably sounds silly to you if you haven't experienced it, but 
                I've seen it happen to teams over and over again. <strong>The 
                hard part is the initial set of steps because sometimes they 
                look silly.</strong> <strong>"What? Wrap a class just to add 
                this little feature? It looks worse than it did before. It's 
                more complicated." Yes, it is, for now. But when you really 
                start to break out those 10 or 15 responsibilities in that 
                wrapped class, it will look far more appropriate.</strong>
            </p>
        `
    },
    {
        id: "breaking-dependencies-and-build-time",
        chapter: 7,
        page: "85",
        tags: [quoteTags.Dependency, quoteTags.TechnologySpecific],
        rating: Rating.Interesting,
        content: `
            ${boxed(`
                <p>
                    When you introduce more interfaces and packages into your
                    design to break dependencies, the amount of time it takes to
                    rebuild the entire system goes up slightly. There are more
                    files to compile. But the average time for a make, a build
                    based on what needs to be recompiled, can go down
                    dramatically.
                </p>
            `)}
        `
    },
    {
        id: "tdd-lets-us-concentrate-on-one-thing-at-a-time",
        chapter: 8,
        page: "94",
        tags: [
            quoteTags.TDD,
            quoteTags.Refactoring,
            quoteTags.Efficiency,
            quoteTags.TaskSeparation
        ],
        rating: 3,
        content: `
            ${boxed(`
                <h3>TDD and Legacy Code</h3>
                <p>
                    One of the most valuable things about TDD is that it lets us
                    concentrate on one thing at a time. We are either writing
                    code or refactoring; we are never doing both at once.
                </p>
                <p>
                    That separation is particularly valuable in legacy code
                    because it lets us write new code independently of new code.
                </p>
                <p>
                    After we have written some new code, we can refactor to
                    remove any duplication between it and the old code.
                </p>
            `)}
        `
    },
    {
        id: "programming-by-difference",
        chapter: 8,
        page: "94",
        tags: [
            quoteTags.TDD,
            quoteTags.Refactoring,
            quoteTags.Architecture,
            quoteTags.Code,
            quoteTags.Naming,
            quoteTags.OO
        ],
        rating: Rating.Amazing,
        content: `
            <h3>Programming by Difference</h3>
            <p>
                In OO, [...] we can use inheritance to introduce features
                without modifying a class directly. After we've added the
                feature, we can figure out exactly how we really want the
                feature integrated.
            </p>
            <p>
                The key technique for doing this is something called
                <i>programming by difference</i>. It is a rather old technique 
                that was discussed and used quite a bit in the 1980s, but it 
                fell out of favor in the 1990s when many people in the OO 
                community noticed that inheritance can be rather problematic if 
                it is overused. <strong>But just because we use inheritance 
                initially doesn't mean that we have to keep it in 
                place.</strong> With the help of the tests, we can move easily 
                to other structures if the inheritance becomes problematic.
            </p>
            <p>
                Here's an example that shows how it works. We have a tested
                Java class called <code>MailForwarder</code> that is part of a 
                Java program that manages mailing lists. It has a method named
                <code>getFromAddress</code>. This is what it looks like:
            </p>
            ${java(`
                private InternetAddress getFromAddress(Message message) throws MessagingException {
                    Address [] from = message.getFrom ();
                    if (from != null && from.length > 0)
                        return new InternetAddress (from [0].toString ());
                    return new InternetAddress (getDefaultFrom());
                }
            `)}
            <p>
                The purpose of this method is to strip out the "from" address of 
                a received mail message and return it so that it can be used as 
                the "from" address of the message that is forwarded to list 
                recipients.
            </p>
            <p>
                It's used in only one place, these lines in a method named
                <code>forwardMessage</code>:
            </p>
            ${java(`
                MimeMessage forward = new MimeMessage (session);
                forward.setFrom (getFromAddress (message));
            `)}
            <p>
                What if we need to support mailing lists that are anonymous?
                [...] Do we have to modify <code>MessageForwarder</code> to add 
                this functionality? Not really—we could just subclass 
                <code>MessageForwarder</code> and make a class called
                <code>AnonymousMessageForwarder</code>. [...]
            </p>
            ${java(`
                public void testAnonymous () throws Exception {
                    MessageForwarder forwarder = new AnonymousMessageForwarder();
                    forwarder.forwardMessage (makeFakeMessage());
                    assertEquals ("anon-members@" + forwarder.getDomain(),
                        expectedMessage.getFrom ()[0].toString());
                }
            `)}
            <p>Then we subclass (see [figure below]).</p>
            ${figure(
                "working-effectively-with-legacy-code-p94-1.png",
                "Subclassing <code>MessageForwarder</code>.",
                { width: "280px" }
            )}
            <p>
                [...] What does that get us? Well, we've solved the problem, but
                we've added a new class to our system for some very simple
                behavior. Does it make sense to subclass a whole
                message-forwarding class just to change its "from" address?
                Not in the long term, but the thing that is nice is that it
                allows us to pass our test quickly. [...]
            </p>
            <p>
                What's the catch? Well, here it is: If we use this technique
                repeatedly and we don't pay attention to some key aspects of
                our design, it starts to degrade rapidly. To see what can
                happen, let's consider another change. We want to forward
                messages to the mailing list recipients, but we also want to
                send them via blind carbon copy (bcc) to some other people
                who can't be on the official mailing list. We can call them
                off-list recipients.
            </p>
            <p>
                It looks easy enough; we could subclass 
                <code>MessageForwarder</code> again and override its process 
                method so that it sends messages to that destination, as in 
                [figure below].
            </p>
            ${figure(
                "working-effectively-with-legacy-code-p94-2.png",
                "Subclassing for two differences.",
                { width: "580px" }
            )}
            <p>
                That could work fine except for one thing. <strong>What if we 
                need a <code>MessageForwarder</code> that does both 
                things</strong>: send all messages to off-list recipients and do 
                all forwarding anonymously?
            </p>
            <p>
                <strong>This is one of the big problems with using inheritance
                extensively. If we put features into distinct subclasses, we can 
                only have one of those features at a time.</strong>
            </p>
            <p>
                How can we get out of this bind? One way is to stop before 
                adding the offlist recipients feature and refactor so that it 
                can go in cleanly. Luckily, we have that test in place that we 
                wrote earlier. We can use it to verify that we preserve behavior 
                as we move to another scheme.
            </p>
            <p>
                For the anonymous forwarding feature, there is a way that we
                could've implemented it without subclassing. We could have
                chosen to make anonymous forwarding a configuration option.
                One way of doing this is to change the constructor of the
                class so that it accepts a collection of properties:
            </p>
            ${java(`
                Properties configuration = new Properties();
                configuration.setProperty("anonymous", "true");
                MessageForwarder forwarder = new MessageForwarder(configuration);
            `)}
            <p>
                [...] We don't need the <code>AnonymousMessageForwarder</code> 
                class any longer, so we can delete it. [...]
            </p>
            <p>
                Are we done? Not really. We've made the <code>getFrom</code> 
                method on <code>MessageForwarder</code> a little messy, but 
                because we have tests, we can very quickly do an extract method 
                to clean it up a little. Right now it looks like this:
            </p>
            ${java(`
                private InternetAddress getFromAddress(Message message)
                        throws MessagingException {

                    String fromAddress = getDefaultFrom();
                    if (configuration.getProperty("anonymous").equals("true")) {
                        fromAddress = "anon-members@" + domain;
                    }
                    else {
                        Address [] from = message.getFrom ();
                        if (from != null && from.length > 0)
                            fromAddress = from [0].toString ();
                    }
                    return new InternetAddress (fromAddress);
                }
            `)}
            <p>After some refactoring, it looks like this:</p>
            ${java(`
                private InternetAddress getFromAddress(Message message)
                        throws MessagingException {

                    String fromAddress = getDefaultFrom();
                    if (configuration.getProperty("anonymous").equals("true")) {
                        from = getAnonymousFrom();
                    }
                    else {
                        from = getFrom(Message);
                    }
                    return new InternetAddress (from);
                }
            `)}
            <p>
                That's a little cleaner but the anonymous mailing and off-list 
                recipient features are folded into the
                <code>MessageForwarder</code> now. Is this bad in light of the 
                <i>Single Responsibility Principle</i>? It can be. It depends on 
                how large the code related to a responsibility gets and how 
                tangled it is with the rest of the code. In this case, 
                determining whether the list is anonymous isn't that big of a 
                deal. The property approach allows us to move on in a nice way. 
                What can we do when there are many properties and the code of 
                the <code>MessageForwarder</code> starts to get littered with 
                conditional statements? One thing we can do is start to use a 
                class rather than a properties collection. What if we created a 
                class called <code>MailingConfiguration</code> and let it hold 
                the properties collection? (See Figure [below])
            </p>
            ${figure(
                "working-effectively-with-legacy-code-p94-3.png",
                "Delegating to MailingConfiguration.",
                { width: "500px" }
            )}
            <p>
                Looks nice, but isn't this overkill? It looks like the
                <code>MailingConfiguration</code> just does the same things
                that a properties collection does.
            </p>
            <p>
                <strong>What if we decided to move <code>getFromAddress</code>
                to the <code>MailingConfiguration</code> class?</strong> The 
                <code>MailingConfiguration</code> class could accept a message 
                and decide what "from" address to return. If the configuration 
                is set up for anonymity, it would return the anonymous mailing 
                "from" address. If it isn't, it could take the first address 
                from the message and return it. Our design would be as it 
                appears in [the figure below]. Notice that we don't have to have 
                method to get and set properties any longer.
                <code>MailingConfiguration</code> now supports higher-level
                functionality.
            </p>
            ${figure(
                "working-effectively-with-legacy-code-p94-4.png",
                "Moving behavior to MailingConfiguration.",
                { width: "500px" }
            )}
            <p>
                We could also start to add other methods to
                <code>MailingConfiguration</code>. For instance, if we want to 
                implement that off-list recipients feature, we can add a method 
                named <code>buildRecipientList</code> on the
                <code>MailingConfiguration</code> and let the
                <code>MessageForwarder</code> use it[...].
            </p>
            <p>
                With these changes, the name of the class isn't as nice as it 
                was. A configuration is usually a rather passive thing. This 
                class actively builds and modifies data for
                <code>MessageFowarders</code> at their request. If there isn't 
                another class with the same name in the system already, the name 
                <code>MailingList</code> might be a good fit.
                <code>MessageForwarders</code> ask mailing lists to calculate 
                from addresses and build recipient lists. We can say that it is 
                the responsibility of a mailing list to determine how messages 
                are altered. [The figure below] shows our design after the 
                renaming.
            </p>
            ${figure(
                "working-effectively-with-legacy-code-p94-5.png",
                "MailingConfiguration renamed as MailingList.",
                { width: "500px" }
            )}
            ${boxed(`
                <p>
                    There are many powerful refactorings, but <code>Rename 
                    Class</code> is the most powerful. It changes the way people 
                    see code and lets them notice possibilities that they might 
                    not have considered before.
                </p>
            `)}
        `
    },
    {
        id: "rename-class",
        chapter: 8,
        page: "101",
        tags: [quoteTags.Naming, quoteTags.Refactoring],
        rating: Rating.Good,
        content: `
            ${boxed(`
                <p>
                    There are many powerful refactorings, but <code>Rename 
                    Class</code> is the most powerful. It changes the way people 
                    see code and lets them notice possibilities that they might 
                    not have considered before.
                </p>
            `)}
        `
    },
    {
        id: "liskov-substitution-principle",
        chapter: 8,
        page: "102",
        tags: [quoteTags.Architecture, quoteTags.Clarity, quoteTags.OO],
        rating: Rating.VeryGood,
        content: `
            <p>
                The ${titled("LSP", `Liskov Substitution Principle`)} implies 
                that clients of a class should be able to use objects of a 
                subclass without having to know that they are objects of a 
                subclass. There aren't any mechanical ways to completely avoid 
                LSP violations. Whether a class is LSP conformant depends upon 
                the clients that it has and what they expect. However, some 
                rules of thumb help:
            </p>
            <ol>
                <li>
                    Whenever possible, avoid overriding concrete methods.
                </li>
                <li>
                    If you do, see if you can call the method you are overriding 
                    in the overriding method.
                </li>
            </ol>
            <p>
                [...] When we override concrete methods [...], we could be
                changing the meaning of some of the code that uses [it]. [...]
                <strong>In general, code gets confusing when we override 
                concrete methods too often.</strong> Someone can notice a 
                <code>MessageForwarder</code> reference in code, take a look at 
                the <code>MessageFowarder</code> class, and think that the code 
                it has for <code>getFromAddress</code> is executed. They might 
                have no idea that the reference is pointing to an
                <code>AnonymousMessageForwarder</code> and that its
                <code>getFromAddress</code> method is the one that is used.
                If we really wanted to keep the inheritance around, we could
                have made <code>MessageForwarder</code> abstract, given it
                an abstract method for <code>getFromAddress</code>, and let
                the subclasses provide concrete bodies. [The figure below]
                shows what the design would look like after these changes.
            </p>
            ${figure(
                "working-effectively-with-legacy-code-p102.png",
                "Normalized hierarchy",
                { width: "500px" }
            )}
            <p>
                I call this sort of hierarchy a <strong>normalized 
                hierarchy</strong>. In a normalized hierarchy, <strong>no class 
                has more than one implementation of a method</strong>. In other 
                words, none of the classes has a method that overrides a 
                concrete method it inherited from a superclass. When you ask the 
                question "How does this class do X?" you can answer it by going 
                to class X and looking. Either the method is there or it is 
                abstract and implemented in one of the subclasses. In a 
                normalized hierarchy you don't have to worry about subclasses 
                overriding behavior they inherited from their superclasses.
            </p>
        `
    },
    {
        id: "pass-null-in-tests",
        chapter: 9,
        page: "111",
        tags: [quoteTags.Tests],
        rating: 1,
        content: `
            ${boxed(`
                <h3>Pass Null</h3>
                <p>
                    When you are writing tests and an object requires a
                    parameter that is hard to construct, consider just passing
                    null instead. If the parameter is used in the course of your
                    test execution, the code will throw an exception and the
                    test harness will catch the exception. If you need behavior
                    that really requires an object, you can construct it and
                    pass it as a parameter at that point.
                </p>
                <p>
                    <i>Pass Null</i> is a very handy technique in some
                    languages. It works well in Java and C# and in just about
                    every language that throws an exception when null references
                    are used at runtime. <strong>This implies that it really 
                    isn't a great idea to do this in C and C++ unless you know 
                    that the runtime will detect null pointer errors.</strong>
                    If it doesn't, you'll just end up with tests that will crash
                    mysteriously, if you are lucky. If you are unlucky, your
                    tests will just be silently and hopelessly wrong. They will
                    corrupt memory as they run, and you'll never know.
                </p>
            `)}
        `
    },
    {
        id: "dont-over-use-interfaces",
        chapter: 9,
        page: "134",
        tags: [quoteTags.Dependency, quoteTags.Architecture, quoteTags.OO],
        rating: Rating.VeryGood,
        content: `
            <p>
                <strong>Interfaces are great for breaking dependencies, but when 
                we get to the point that we have nearly a one-to-one 
                relationship between classes and interfaces, the design gets
                cluttered.</strong> Don't get me wrong: If our backs are against 
                the wall, it would be fine to move toward this design, but if 
                there are other possibilities, we should explore them. 
                Fortunately, there are.
            </p>
        `
    },
    {
        id: "subverting-access-protection",
        chapter: 10,
        page: "141",
        tags: [quoteTags.Tests, quoteTags.BadCode],
        rating: Rating.Amazing,
        content: `
            ${boxed(`
                <h3>Subverting Access Protection</h3>
                <p>
                    In many OO languages newer than C++, we can use reflection
                    and special permissions to access private variables at
                    runtime. <strong>Although that can be handy, it is a bit of 
                    a cheat, really.</strong> It is very helpful when we want to 
                    break dependencies, but I don't like to keep tests that 
                    access private variables around in projects. <strong>That 
                    sort of subterfuge really prevents a team from noticing just 
                    how bad the code is getting.</strong> It might sound kind of 
                    sadistic, but the <strong>pain that we feel working in a 
                    legacy code base can be an incredible impetus to 
                    change</strong>. We can take the sneaky way out, but
                    <strong>unless we deal with the root causes, overly 
                    responsible classes and tangled dependencies, we are just 
                    delaying the bill</strong>. When everyone discovers just how 
                    bad the code has gotten, the costs to make it better will 
                    have gotten too ridiculous.
                </p>
            `)}
        `
    },
    {
        id: "command-query-separation",
        chapter: 10,
        page: "147",
        tags: [
            quoteTags.Clarity,
            quoteTags.Inspiring,
            quoteTags.CodingHabits,
            quoteTags.Common
        ],
        rating: Rating.VeryGood,
        content: `
            ${boxed(`
                <h3>Command/Query Separation</h3>
                <p>
                    <i>Command/Query Separation</i> is a design principle first
                    described by Bertrand Meyer. Simply put, it is this:
                    <strong>A method should be a command or a query, but not 
                    both.</strong> A command is a method that can modify the 
                    state of the object but that doesn't return a value. A query 
                    is a method that returns a value but that does not modify 
                    the object.
                </p>
                <p>
                    Why is this principle important? There are a number of
                    reasons, but the most primary is communication. <strong>If a 
                    method is a query, we shouldn't have to look at its body to 
                    discover whether we can use it several times in a row 
                    without causing some side effect.</strong>
                </p>
            `)}
        `
    },
    {
        id: "safety-first",
        chapter: 10,
        page: "150",
        tags: [quoteTags.Tests, quoteTags.Naming],
        rating: Rating.Amazing,
        content: `
            <p>
                Remember that it is okay to extract methods with poor names or
                poor structure to get tests in place. <strong>Safety 
                first.</strong> After the tests are in place, you can make the 
                code much cleaner.
            </p>
        `
    },
    {
        id: "encapsulation-is-a-tool-for-understanding",
        chapter: 11,
        page: "171",
        tags: [quoteTags.Tests, quoteTags.OO, quoteTags.Architecture],
        rating: Rating.VeryGood,
        content: `
            ${boxed(`
                <h3>Effects and Encapsulation</h3>
                <p>
                    One of the often-mentioned benefits of object orientation is
                    encapsulation. Many times when I show people the
                    dependency-breaking techniques in this book, they point out
                    that many of them break encapsulation. That's true. Many of
                    them do.
                </p>
                <p>
                    <strong>Encapsulation is important, but the reason why it is
                    important is more important. Encapsulation helps us reason 
                    about our code.</strong> In well-encapsulated code, there 
                    are fewer paths to follow as you try to understand it. For 
                    instance, if we add another parameter to a constructor to 
                    break a dependency as we do in the <i>Parameterize 
                    Constructor</i> refactoring, we have one more path to follow 
                    when we are reasoning about effects. Breaking encapsulation 
                    can make reasoning about our code harder, but it can make it 
                    easier if we end up with good explanatory tests afterward. 
                    When we have test cases for a class, we can use them to 
                    reason about our code more directly. We can also write new 
                    tests for any questions that we might have about the 
                    behavior of the code.
                </p>
                <p>
                    <strong>Encapsulation and test coverage aren't always at 
                    odds, but when they are, I bias toward test 
                    coverage.</strong> Often it can help me get more 
                    encapsulation later.
                </p>
                <p>
                    <strong>Encapsulation isn't an end in itself; it is a tool 
                    for understanding.</strong>
                </p>
            `)}
        `
    },
    {
        id: "higher-level-tests-should-not-be-a-substitute-for-unit-tests",
        chapter: 12,
        page: "173",
        tags: [quoteTags.Tests, quoteTags.Architecture, quoteTags.Common],
        rating: Rating.VeryGood,
        content: `
            <p>
                In some cases, it's easy to start writing tests for a class.
                But in legacy code, it's often difficult. Dependencies can
                be hard to break. When you've made a commitment to get
                classes into test harnesses to make work easier, one of the
                most infuriating things that you can encounter is a closely
                scattered change. You need to add a new feature to a system,
                and you find that you have to modify three or four closely
                related classes. Each of them would take a couple of hours
                to get under test. Sure, you know that the code will be
                better for it at the end, but do you really have to break
                all of those dependencies individually? Maybe not.
            </p>
            <p>
                <strong>Often it pays to test "one level back," to find a place
                where we can write tests for several changes at once.</strong>
                We can write tests at a single public method for changes in
                a number of private methods, or we can write tests at the
                interface of one object for a collaboration of several objects 
                that it holds. When we do this, we can test the changes we are 
                making, but <strong>we also give ourselves some "cover" for more 
                refactoring in the area</strong>. The structure of code below 
                the tests can change radically as long as the tests pin down 
                their behavior.
            </p>
            ${boxed(`
                <p>
                    Higher-level tests can be useful in refactoring. Often
                    people prefer them to finely grained tests at each class
                    because they think that change is harder when lots of
                    little tests are written against an interface that has
                    to change. In fact, changes are often easier than you
                    would expect because you can make changes to the tests
                    and then make changes to the code, moving the structure
                    along in small safe increments.
                </p>
                <p>
                    <strong>While higher-level tests are an important tool, they
                    shouldn't be a substitute for unit tests. Instead, they 
                    should be a first step toward getting unit tests in 
                    place.</strong>
                </p>
            `)}
        `
    },
    {
        id: "intersection-points-in-tests",
        chapter: 12,
        page: "178",
        tags: [quoteTags.Tests, quoteTags.Architecture, quoteTags.Common],
        rating: Rating.VeryGood,
        content: `
            ${boxed(`
                <p>
                    <strong>In general, it is a good idea to pick
                    ${titled(
                        `<i>interception points</i>`,
                        `An interception 
                    point is simply a point in your program where you can detect
                    the effects of a particular change.`
                    )} that are very close 
                    to your change points</strong>, for a couple of reasons. The 
                    first reason is safety. Every step between a change point 
                    and an interception point is like a step in a logical 
                    argument. Essentially, we are saying, "We can test here 
                    because this affects this and that affects this other thing, 
                    which affects this thing that we are testing." <strong>The 
                    more steps you have in the argument, the harder it is to 
                    know that you have it right.</strong> Sometimes the only way 
                    you can be sure is by writing tests at the <i>interception 
                    point</i> and then going back to the change point to alter 
                    the code a little bit and see if the test fails. Sometimes 
                    you have to fall back on that technique, but you shouldn't 
                    have to do it all the time. Another reason why more distant 
                    interception points are worse is that it is often harder to 
                    set up tests at them. This isn't always true; it depends on 
                    the code. What can make it harder is, again, the number of 
                    steps between the change and the interception point. Often 
                    you have to "play computer" in your mind to know that a test 
                    covers some distant piece of functionality.
                </p>
            `)}
        `,
        comments: `
            <p>
                I like this quote because it illustrated a point I had recently 
                with legacy code.
            </p>
            <p>
                The code I was working with was bad legacy code. I wanted to put 
                tests at very high level because I felt I had to change 
                everything inside.
            </p>
            <p>
                But then indeed you start to wonder if that's not the place
                to put tests in general: at a very high level. Even my team
                felt that this was more robust against bugs.
            </p>
            <p>
                Turns out not, and for the exact reason Martin Feather
                illustrates here. After some time, when the tests you wrote
                are far from the executed code, although they give you a
                sense of security, you lose the connection between the tests
                and the code and they even start to be a burden. But most
                important, <strong>TDD dies</strong>: you cannot change the
                test first because you have no idea of what the instantiated 
                variables go through before coming to the area your are 
                interested in.
            </p>
            <p>
                This quote is strongly related to 
                <a href="/quotes/higher-level-tests-should-not-be-a-substitute-for-unit-tests">this one</a>
                and <a href="/quotes/pinch-point-traps">this one</a>.
            </p>
        `
    },
    {
        id: "pinch-point-traps",
        chapter: 12,
        page: "184",
        rating: Rating.VeryGood,
        tags: [quoteTags.Tests, quoteTags.Comparison],
        content: `
            ${boxed(`
                <h3>Pinch Point</h3>
                <p>
                    A <i>pinch point</i> is [...] a place where tests against a
                    couple of methods can detect changes in many methods.
                </p>
            `)}
            <h3>Pinch Point Traps</h3>
            <p>
                We can get in trouble in a couple of ways when we write unit
                tests. <strong>One way is to let unit tests slowly grow into
                mini-integration tests.</strong> We need to test a class, so we 
                instantiate several of its collaborators and pass them to the 
                class. We check some values, and we can feel confident that the 
                whole cluster of objects works well together. The downside is 
                that, if we do this too often, we'll end up with a lot of big, 
                bulky unit tests that take forever to run. The trick when we are
                writing unit tests for new code is to test classes as 
                independently as possible. <strong>When you start to notice that 
                your tests are too large, you should break down the class that 
                you are testing, to make smaller independent pieces that can be 
                tested more easily.</strong> At times, you will have to fake out 
                collaborators because <strong>the job of a unit test isn't to 
                see how a cluster of objects behaves together, but rather how a 
                single object behaves</strong>. We can test that more easily 
                through a fake.
            </p>
            <p>
                When we are writing tests for existing code, the tables are
                turned. Sometimes it pays to carve off a piece of an application 
                and build it up with tests. When we have those tests in place, 
                we can more easily write narrower unit tests for each of the 
                classes we are touching as we do our work. Eventually, the tests 
                at the <i>pinch point</i> can go away.
            </p>
            <p>
                Tests at <i>pinch points</i> are kind of like walking several 
                steps into a forest and drawing a line, saying "I own all of 
                this area." After you know that you own all of that area, you 
                can develop it by refactoring and writing more tests. Over time, 
                you can delete the tests at the <i>pinch point</i> and let the 
                tests for each class support your development work.
            </p>
        `
    },
    {
        id: "automated-tests-are-not-for-bug-finding",
        chapter: 13,
        page: "185",
        tags: [quoteTags.Tests, quoteTags.Bugs],
        rating: Rating.Good,
        content: `
            <p>
                When people talk about testing, they are usually referring to 
                tests that they use to find bugs. Often these tests are manual 
                tests. Writing automated tests to find bugs in legacy code often 
                doesn't feel as efficient as just trying out the code. If you 
                have some way of exercising legacy code manually, you can 
                usually find bugs very quickly. <strong>The downside is that you 
                have to do that manual work over and over again whenever you 
                change the code.</strong> And, frankly, people just don't do 
                that. Nearly every team I've worked with that depended on manual 
                testing for its changes has ended far behind. The confidence of 
                the team isn't what it could be.
            </p>
            <p>
                No, finding bugs in legacy code usually isn't a problem. In 
                terms of strategy, it can actually be misdirected effort.
                <strong>It is usually better to do something that helps your 
                team start to write correct code consistently.</strong> The way 
                to win is to concentrate effort on not putting bugs into code in 
                the first place.
            </p>
            <p>
                <strong>Automated tests are a very important tool, but not for
                bug finding</strong> — not directly, at least. In general, 
                automated tests should specify a goal that we'd like to fulfill 
                or attempt to preserve behavior that is already there. In the 
                natural flow of development, tests that specify become tests 
                that preserve. You will find bugs, but usually not the first 
                time that a test is run. You find bugs in later runs when you
                change behavior that you didn't expect to.
            </p>
            <p>
                Where does this leave us with legacy code? In legacy code, we 
                might not have any tests for the changes we need to make, so 
                there isn't any way to really verify that we're preserving 
                behavior when we make changes. For this reason, the best 
                approach we can take when we need to make changes is to bolster 
                the area we want to change with tests to provide some kind of 
                safety net. We'll find bugs along the way, and we'll have to 
                deal with them, but <strong>in most legacy code, if we make 
                finding and fixing all of the bugs our goal, we'll never 
                finish</strong>.
            </p>
        `
    },
    {
        id: "characterization-tests",
        chapter: 13,
        page: "186",
        tags: [quoteTags.Tests, quoteTags.Definition],
        rating: Rating.Good,
        content: `
            <h3>Characterization Tests</h3>
            <p>
                Okay, so we need tests — how do we write them? One way of 
                approaching this is to find out what the software is supposed to 
                do and then write tests based on those ideas. We can try to dig 
                up old requirements documents and project memos, and just sit 
                down and start writing tests. Well, that's one approach, but it 
                isn't a very good one. <strong>In nearly every legacy system, 
                what the system does is more important than what it is supposed 
                to do.</strong> If we write tests based on our assumption of 
                what the system is supposed to do, we're back to bug finding 
                again. Bug finding is important, but our goal right now is to 
                get tests in place that help us make changes more 
                deterministically.
            </p>
            <p>
                The tests that we need when we want to preserve behavior are
                what I call <i>characterization tests</i>. <strong>A 
                <i>characterization test</i> is a test that characterizes the 
                actual behavior of a piece of code.</strong> There's no "Well, 
                it should do this" or "I think it does that." The tests document 
                the actual current behavior of the system.
            </p>
        `
    },
    {
        id: "scratch-refactoring",
        chapter: 16,
        page: "212",
        tags: [
            quoteTags.Refactoring,
            quoteTags.Definition,
            quoteTags.Architecture,
            quoteTags.CodingHabits
        ],
        rating: Rating.VeryGood,
        content: `
            <h3>Scratch Refactoring</h3>
            <p>
                One of the best techniques for learning about code is 
                refactoring. Just get in there and start moving things around 
                and making the code clearer. The only problem is, if you don't 
                have tests, this can be pretty hazardous business. How do you 
                know that you aren't breaking anything when you do all of this 
                refactoring to understand the code? The fact is, you can work in 
                a way in which you don't need to care — and it's pretty easy to 
                do. Check out the code from your version-control system. Forget 
                about writing tests. Extract methods, move variables, refactor 
                it whatever way you want to get a better understanding of it — 
                just don't check it in again. Throw that code away. This is 
                called <i>Scratch refactoring</i>.
            </p>
        `
    },
    {
        id: "my-application-has-no-structure",
        chapter: 17,
        page: "215",
        tags: [
            quoteTags.Team,
            quoteTags.Architecture,
            quoteTags.BadCode,
            quoteTags.CodingHabits
        ],
        rating: Rating.Good,
        content: `
            <h3>My Application Has No Structure</h3>
            <p>
                Long-lived applications tend to sprawl. They might have started 
                out with a well-thought-out architecture, but over the years, 
                under schedule pressure, <strong>they can get to the point at 
                which nobody really understands the complete structure</strong>.
                People can work for years on a project and not have any idea 
                where new features are intended to go; they just know the hacks 
                that have been placed in the system recently. When they add new 
                features, they go to the "hack points" because those are the 
                areas that they know best.
            </p>
            <p>
                <strong>There is no easy remedy for this sort of thing</strong>, 
                and the urgency of the situation varies widely. In some cases, 
                programmers run up against a wall. It's difficult to add new 
                features, and that brings the entire organization into crisis 
                mode. People are charged with the task of figuring out whether 
                it would be better to rearchitect or rewrite the system. In 
                other organizations, the system limps along for years. Yes, it 
                takes longer than it should to add new features, but that is 
                just considered the price of doing business. Nobody knows how 
                much better it could be or how much money is being lost because 
                of poor structure.
            </p>
            <p>
                <strong>When teams aren't aware of their architecture, it tends
                to degrade.</strong> What gets in the way of this awareness?
            </p>
            <ul>
                <li>
                    The system can be so complex that it takes a long time to 
                    get the big picture.
                </li>
                <li>
                    The system can be so complex that there is no big picture.
                </li>
                <li>
                    The team is in a very reactive mode, dealing with emergency 
                    after emergency so much that they lose sight of the big 
                    picture.
                </li>
            </ul>
            <p>
                Traditionally, many organizations have used the role of 
                architect to solve these problems. Architects are usually 
                charged with the task of working out the big picture and making 
                decisions that preserve the big picture for the team. That can 
                work, but there is one strong caveat. <strong>An architect has 
                to be out in the team, working with the members day to day, or 
                else the code diverges from the big picture.</strong> There are 
                two ways this can happen: Someone could be doing something 
                inappropriate in the code or the big picture itself could need 
                to be modified. In some of the worst situations I've encountered 
                with teams, the architect of a group has a completely different 
                view of the system than the programmers. Often this happens 
                because the architect has other responsibilities and can't get 
                into the code or can't communicate with the rest of the team 
                often enough to really know what is there. As a result, 
                communication breaks down across the organization.
            </p>
            <p>
                <strong>The brutal truth is that architecture is too important 
                to be left exclusively to a few people.</strong> It's fine to 
                have an architect, but the key way to keep an architecture 
                intact is to make sure that everyone on the team knows what it 
                is and has a stake in it. Every person who is touching the code 
                should know the architecture, and everyone else who touches the 
                code should be able to benefit from what that person has 
                learned. When everyone is working off of the same set of ideas, 
                the overall system intelligence of the team is amplified. If you 
                have, say, a team of 20 and only 3 people know the architecture 
                in detail, either those 3 have to do a lot to keep the other 17
                people on track or the other 17 people just make mistakes caused 
                by unfamiliarity with the big picture.
            </p>
        `
    },
    {
        id: "telling-the-story-of-the-system",
        chapter: 17,
        page: "216",
        tags: [quoteTags.Architecture, quoteTags.Team],
        rating: Rating.Good,
        content: `
            <h3>Telling the Story of the System</h3>
            <p>
                When I work with teams, I often use a technique that I call
                "telling the story of the system." To do it well, you need
                at least two people. One person starts off by asking
                another, "What is the architecture of the system?" Then the
                other person tries to explain the architecture of the system
                using only a few concepts, maybe as few as two or three. If
                you are the person explaining, you have to pretend that the
                other person knows nothing about the system. In only a few
                sentences, you have to explain what the pieces of the design
                are and how they interact. After you say those few
                sentences, you have articulated what you feel are the most
                essential things about the system. Next, you pick the next
                most important things to say about the system. You keep
                going until you've said just about everything important
                about the core design of the system.
            </p>
            <p>
                When you start to do this, you'll notice an odd feeling.
                <strong>To really convey the system architecture that briefly,
                you have to simplify.</strong> You might say, "The gateway gets 
                rule sets from the active database," but as you say that, part 
                of you might be screaming, "No! The gateway gets rule sets from 
                the active database, but it also gets them from the current 
                working set." When you say the simpler thing, it kind of feels 
                like you are lying; you just aren't telling the whole story. But
                you are telling a simpler story that describes an
                easier-to-understand architecture. For instance, why does
                the gateway have to get rule sets from more than one place?
                Wouldn't it be simpler if it was unified?
            </p>
            <p>
                Pragmatic considerations often keep things from getting simple, 
                but <strong>there is value in articulating the simple view. At 
                the very least, it helps everyone understand what would've been 
                ideal and what things are there as expediencies. The other 
                important thing about this technique is that it really forces 
                you to think about what is important in the system.</strong> 
                What are the most important things to communicate?
            </p>
            <p>
                Teams can go only so far when the system they work on is a
                mystery to them. In an odd way, <strong>having a simple story of 
                how a system works just serves as a roadmap, a way of getting 
                your bearing as you search for the right places to add 
                features</strong>. It can also make a system a lot less scary.
            </p>
            <p>
                On your team, tell the story of the system often, just so that 
                you share a view. Tell it in different ways. Trade off whether 
                one concept is more important than another. As you consider 
                changes to the system, you'll notice that some changes fall more 
                in line with the story. That is, they make the briefer story 
                feel like less of a lie. If you have to choose between two ways 
                of doing something, the story can be a good way to see which one 
                will lead to an easier-to-understand system.
            </p>
        `
    },
    {
        id: "code-design-is-never-over",
        chapter: 17,
        page: "225",
        tags: [quoteTags.Architecture, quoteTags.Team],
        rating: Rating.VeryGood,
        content: `
            <p>
                <strong>One of the worst mistakes a team can make is it to feel 
                that design is over at some point in development.</strong> If 
                design is "over" and people are still making changes, chances 
                are good that new code will appear in poor places, and classes
                will bloat because no one feels comfortable introducing new
                abstraction. <strong>There is no surer way to make a legacy 
                system worse.</strong>
            </p>
        `
    },
    {
        id: "test-location",
        chapter: 18,
        page: "228",
        tags: [quoteTags.Architecture, quoteTags.Tests, quoteTags.Efficiency],
        rating: Rating.VeryGood,
        content: `
            <h3>Test Location</h3>
            <p>
                <strong>So far in this chapter, I've been making the assumption
                that you'll place your testing code and your production code in 
                the same directories.</strong> Generally, this is the easiest 
                way to structure a project, but there are definitely some things 
                that you have to consider when you decide whether to do this.
            </p>
            <p>
                The main thing to consider is whether there are size constraints 
                on your application's deployment. An application that runs on a 
                server that you control might not have many constraints. [...]
            </p>
            <p>
                On the other hand, if the software is a commercial product and 
                runs on someone else's computer, the size of the deployment 
                could be a problem. You can attempt to keep all of the testing 
                code separate from the production source, but <strong>consider 
                whether this affects how you navigate your code</strong>.
            </p>
            <p>
                Sometimes it doesn't make any difference, as this example shows. 
                In Java, a package can span two different directories:
            </p>
            ${markdown(`
                source
                    com
                        orderprocessing
                            dailyorders
                test
                    com
                        orderprocessing
                            dailyorders
            `)}
            <p>
                We can put the production classes in the <code>dailyorders</code>
                directory under <code>source</code>, and test classes in the 
                <code>dailyorders</code> directory under <code>test</code>, and 
                they can be seen as being in the same package. Some IDEs 
                actually show you classes in those two directories in the same 
                view so that you don't have to care where they are physically 
                located.
            </p>
            <p>
                In many other languages and environments, location does make a 
                difference. <strong>If you have to navigate up and down 
                directory structures to go back and forth between your code and 
                its tests, it is like paying a tax as you work. People will just 
                stop writing tests, and the work will go slower.</strong>
            </p>
            <p>
                An alternative is to keep the production code and the test code 
                in the same location but to use scripts or build settings to 
                remove the test code from the deployment. If you use good naming 
                conventions for your classes, this can work out fine.
            </p>
            <p>
                Above all, <strong>if you choose to separate test and production 
                code, make sure it is for a good reason</strong>. Quite often 
                teams separate the code for aesthetic reasons: They just can't 
                stand the idea of putting their production code and tests 
                together. Later that navigation in the project is painful. You 
                can get used to having tests right next to your production 
                source. After a period of time working that way, it just feels 
                normal.
            </p>
        `
    },
    {
        id: "adding-new-behavior",
        chapter: 19,
        page: "236",
        tags: [quoteTags.CodingHabits, quoteTags.Tests, quoteTags.TDD],
        rating: Rating.VeryGood,
        content: `
            <h3>Adding New Behavior</h3>
            <p>
                In procedural legacy code, <strong>it pays to bias toward 
                introducing new functions rather than adding code to old
                ones</strong>. At the very least, we can write tests for the new
                functions that we write.
            </p>
            <p>
                How do we avoid introducing dependency traps in procedural
                code? One way [...] is to use <i>test-driven development</i>
                (TDD). TDD works in both object-oriented and procedural
                code. Often the work of trying to formulate a test for each
                piece of code that we're thinking of writing leads us to
                alter its design in good ways. We concentrate on writing
                functions that do some piece of computational work and then
                integrate them into the rest of the application.
            </p>
            <p>
                Often we have to think about what we are going to write in a
                different way to do this. Here's an example. We need to
                write a function called <code>send_command</code>. The
                <code>send_command</code> function is going to send an ID, a
                name, and a command string to another system through a
                function called <code>mart_key_send</code>. The code for the
                function won't be too bad. We can imagine that it will look
                something like this:
            </p>
            ${cpp(`
                void send_command(int id, char *name, char *command_string) {
                    char *message, *header;
                    if (id == KEY_TRUM) {
                        message = ralloc(sizeof(int) + HEADER_LEN + ...
                        ...
                    } else {
                        ...
                    }
                    sprintf(message, "%s%s%s", header, command_string, footer);
                    mart_key_send(message);

                    free(message);
                }
            `)}
            <p>
                But how would we write a test for a function like that?
                Especially because the only way to find out what happens is
                to be right where the call to <code>mart_key_send</code> is?
                What if we took a slightly different approach?
            </p>
            <p>
                We could test all of that logic before the
                <code>mart_key_send</code> call if it was in another function.
                We might write our first test like this:
            </p>
            ${cpp(`
                char *command = form_command(1,
                                             "Mike Ratledge",
                                             "56:78:cusp-:78");
                assert(!strcmp("<-rsp-Mike Ratledge><56:78:cusp-:78><-rspr>",
                    command));
            `)}
            <p>
                Then we can write a <code>form_command</code> function, which 
                returns a command:
            </p>
            ${cpp(`
                char *form_command(int id, char *name, char *command_string)
                {
                    char *message, *header;
                    if (id == KEY_TRUM) {
                        message = ralloc(sizeof(int) + HEADER_LEN + ...
                        ...
                    } else {
                        ...
                    }
                    sprintf(message, "%s%s%s", header, command_string, footer);

                    return message;
                }
            `)}
            <p>
                When we have that, we can write the simple
                <code>send_command</code> function that we need:
            </p>
            ${cpp(`
                void send_command(int id, char *name, char *command_string) {
                    char *command = form_command(id, name, command_string);
                    mart_key_send(command);

                    free(message);
                }
            `)}
        `
    },
    {
        id: "this-class-is-too-big-and-I-dont-want-it-to-get-any-bigger",
        chapter: 20,
        page: "245",
        tags: [
            quoteTags.CodingHabits,
            quoteTags.Tests,
            quoteTags.LongMethod,
            quoteTags.Refactoring
        ],
        rating: Rating.VeryGood,
        content: `
            <h3>
                This Class Is Too Big and I Don't Want It to Get Any Bigger
            </h3>
            <p>
                Many of the features that people add to systems are little
                tweaks. They require the addition of a little code and maybe a 
                few more methods. <strong>It's tempting to just make these 
                changes to an existing class.</strong> Chances are, the code 
                that you need to add must use data from some existing class, and 
                the easiest thing is to just add code to it.
                <strong>Unfortunately, this easy way of making changes can lead
                to some serious trouble. When we keep adding code to existing 
                classes, we end up with long methods and large classes.</strong>
                Our software turns into a swamp, and it takes more time to
                understand how to add new features or even just understand how 
                old features work.
            </p>
            <p>
                I visited a team once that had what looked like a nice
                architecture on paper. They told me what the primary classes
                were and how they communicated with each other in the normal
                cases. Then, they showed me a couple of nice UML diagrams that 
                showed the structure. I was surprised when I started to look at 
                the code. Each of their classes could really be broken out into 
                about 10 or so, and doing that would help them get past their 
                most pressing problems.
            </p>
            <p>
                What are the problems with big classes? <strong>The first is 
                confusion.</strong> When you have 50 or 60 methods on a class, 
                it's often hard to get a sense of what you have to change and 
                whether it is going to affect anything else. In the worst cases, 
                big classes have an incredible number of instance variables, and 
                it is hard to know what the effects are of changing a variable.
                Another problem is task scheduling. <strong>When a class has 20 
                or so responsibilities, chances are, you'll have an incredible 
                number of reasons to change it.</strong> In the same iteration, 
                you might have several programmers who have to do different 
                things to the class. If they are working concurrently, this can 
                lead to some serious thrashing, particularly because of the 
                third problem: <strong>Big classes are a pain to test</strong>. 
                Encapsulation is a good thing, right? Well, don't ask testers 
                about that; they are liable to bite your head off. Classes that 
                are too big often hide too much. Encapsulation is great when it 
                helps us reason about our code and when we know that certain 
                things can be changed only under certain circumstances. 
                <strong>However, when we encapsulate too much, the stuff inside 
                rots and festers.</strong> There isn't any easy way to sense the 
                effects of change, so people fall back on <i>Edit and Pray</i> 
                programming. At that point, either changes take far too long or 
                the bug count increases. You have to pay for the lack of clarity
                somehow.
            </p>
            <p>
                The first issue to confront when we have big classes is this: 
                How can we work without making things worse? The key tactics we 
                can use here are <i>Sprout Class</i> and <i>Sprout Method</i>. 
                When we have to make changes, we should consider putting the 
                code into a new class or a new method. <i>Sprout Class</i>
                really keeps things from getting much worse. When you put
                new code into a new class, sure, you might have to delegate
                from the original class, but at least you aren't making it
                much bigger. <i>Sprout Method</i> helps also, but in a more
                subtle way. If you add code in a new method, yes, you will
                have an additional method, but at the very least, you are
                identifying and naming another thing that the class does;
                often the names of methods can give you hints about how to
                break down a class into smaller pieces.
            </p>
            <p>
                <strong>The key remedy for big classes is refactoring.</strong>
                It helps to break down classes into sets of smaller classes. But 
                the biggest issue is figuring out what the smaller classes 
                should look like. Fortunately, we have some guidance.
            </p>
            ${boxed(`
                <h3>Single-Responsibility Principle (SRP)</h3>
                <p>
                    Every class should have a single responsibility: It should 
                    have a single purpose in the system, and there should be 
                    only one reason to change it.
                </p>
            `)}
            <p>
                The single-responsibility principle is kind of hard to describe 
                because the idea of a responsibility is kind of nebulous. If we 
                look at it in a very naïve way, we might say, "Oh, that means 
                that every class should have only a single method, right?" Well, 
                methods can be seen as responsibilities. A <code>Task</code> is 
                responsible for running using its <code>run</code> method, for 
                telling us how many subtasks it has with <code>taskCount</code> 
                method, and so on. <strong>But what we mean by a responsibility 
                really comes into focus when we talk about main purpose.</strong>
            </p>
        `
    },
    {
        id: "seeing-responsibilities",
        chapter: 20,
        page: "249",
        tags: [quoteTags.LongMethod, quoteTags.OO, quoteTags.Refactoring],
        rating: Rating.VeryGood,
        content: `
            <h3>Seeing Responsibilities</h3>
            <p>
                This section describes a set of heuristics that we can use to 
                see responsibilities in existing code. Note that we are not 
                inventing responsibilities; we’re just discovering what is 
                there. Regardless of what structure legacy code has, its pieces 
                do identifiable things. Sometimes they are hard to see, but 
                these techniques can help. Try to apply them even with code that 
                you don’t have to change immediately. The more you start 
                noticing the responsibilities inherent in code, the more you 
                learn about it.
            </p>
            ${boxed(`
                <h3>Heuristic #1: Group Methods</h3>
                <p>
                    Look for similar method names. Write down all of the methods 
                    on a class, along with their access types (public, private, 
                    and so on), and try to find ones that seem to go together.
                </p>
            `)}
            <p>[...]</p>
            ${boxed(`
                <h3>Heuristic #2: Look at Hidden Methods</h3>
                <p>
                    Pay attention to private and protected methods. If a class 
                    has many of them, it often indicates that there is another 
                    class in the class dying to get out.
                </p>
            `)}
            <p>[...]</p>
            ${boxed(`
                <h3>Heuristic #4: Look for Internal Relationships</h3>
                <p>
                    Look for relationships between instance variables and
                    methods. Are certain instance variables used by some methods 
                    and not others?
                </p>
            `)}
            <p>[...]</p>
            ${boxed(`
                <h3>Heuristic #5: Look for the Primary Responsibility</h3>
                <p>
                    Try to describe the responsibility of the class in a single 
                    sentence.
                </p>
            `)}
            <p>[...]</p>
            ${boxed(`
                <h3>
                    Heuristic #6: When All Else Fails, Do Some Scratch 
                    Refactoring
                </h3>
                <p>
                    If you are having a lot of trouble seeing responsibilities 
                    in a class, do some scratch refactoring.
                </p>
            `)}
        `
    },
    {
        id: "big-classes-can-hide-too-much",
        chapter: 20,
        page: "250",
        tags: [
            quoteTags.LongMethod,
            quoteTags.OO,
            quoteTags.Tests,
            quoteTags.Extraction
        ],
        rating: Rating.Amazing,
        content: `
            <p>
                Big classes can hide too much. This question comes up over and
                over again from people new to unit testing: "How do I test
                private methods?" Many people spend a lot of time trying to
                figure out how to get around this problem, but, as I mentioned
                in an earlier chapter, the real answer is that <strong>if you 
                have the urge to test a private method, the method shouldn't be 
                private; if making the method public bothers you, chances are, 
                it is because it is part of a separate responsibility. It should 
                be on another class.</strong>
            </p>
        `
    },
    {
        id: "extract-methods-before-extracting-a-class",
        chapter: 20,
        page: "251",
        tags: [
            quoteTags.LongMethod,
            quoteTags.OO,
            quoteTags.Dependency,
            quoteTags.Refactoring,
            quoteTags.Extraction
        ],
        rating: Rating.Good,
        content: `
            <p>
                [I]t pays to do a little extract method refactoring before really 
                settling on classes to extract. What methods should you extract? 
                I handle this by looking for decisions. How many things are 
                assumed in the code? Is the code calling methods from a 
                particular API? Is it assuming that it will always be accessing 
                the same database? If the code is doing these things, 
                <strong>it's a good idea to extract methods that reflect what
                you intend at a high level</strong>. If you are getting 
                particular information from a database, extract a method named 
                after the information you are getting. <strong>When you do these 
                extractions, you have many more methods, but you also might find 
                that method grouping is easier.</strong> Better than that, you 
                might find that you completely encapsulated some resource behind 
                a set of methods. <strong>When you extract a class for them, 
                you'll have broken some dependencies on low-level 
                details.</strong>
            </p>
        `
    },
    {
        id: "deciding-where-to-start",
        chapter: 21,
        page: "273",
        tags: [quoteTags.Refactoring, quoteTags.Extraction],
        rating: Rating.Good,
        content: `
            ${boxed(`
                <h3>Deciding Where to Start</h3>
                <p>
                    When we go through a series of refactorings to remove
                    duplication, we can end up with different structures,
                    depending on where we start. For instance, imagine that we
                    have a method like this:
                </p>
                ${cpp(`
                    void c() { a(); a(); b(); a(); b(); b(); }
                `)}
                <p>It can be broken down like this:</p>
                ${cpp(`
                    void c() { aa(); b(); a(); bb(); }
                `)}
                <p>or like this:</p>
                ${cpp(`
                    void c() { a(); ab(); ab(); b(); }
                `)}
                <p>
                    So, which should we choose? The truth is, it doesn't make
                    much difference structurally. Both groupings are better than
                    what we had, and we can refactor them into the other
                    grouping, if we need to. These aren't final decisions. I
                    decide by paying attention to the names that I would use. If
                    I can find a name for two repeated calls to <code>a()</code>, 
                    that makes more sense, in context, than a name for a call to 
                    <code>a()</code> followed by a call to <code>b()</code>, 
                    then I'll use it.
                </p>
                <p>
                    Another heuristic that I use is to start small. If I can
                    remove tiny pieces of duplication, I do those first because
                    often it makes the big picture clearer.
                </p>
            `)}
        `
    },
    {
        id: "abbreviations",
        chapter: 21,
        page: "284",
        tags: [quoteTags.Naming],
        rating: Rating.Interesting,
        content: `
            ${boxed(`
                <h3>Abbreviations</h3>
                <p>
                    Abbreviations in class and method names are problematic.
                    They can be okay when they are used consistently, but in
                    general, I don't like to use them.
                </p>
                <p>
                    One team I worked with attempted to use the words manager
                    and management in nearly every class name in the system.
                    That naming convention didn't help much, but what made it
                    worse was the fact that they abbreviated manager and
                    management in an incredible number of different ways. For
                    example, some classes were named <code>XXXXMgr</code>, and
                    others were named <code>XXXXMngr</code>. When you were ready
                    to use a class, you actually had to look it up most of the
                    time to see if you had the name right. More than 50 percent
                    of the time, I was wrong when I attempted to guess which
                    suffix was used for a particular class.
                </p>
            `)}
        `
    },
    {
        id: "extract-small-pieces",
        chapter: 22,
        page: "306",
        tags: [
            quoteTags.Refactoring,
            quoteTags.Extraction,
            quoteTags.LongMethod
        ],
        rating: Rating.Good,
        content: `
            <h3>Extract Small Pieces</h3>
            <p>
                I mentioned this earlier, but I want to underscore it:
                <strong>Extract small pieces first.</strong> Before you extract 
                this small piece of a monster method, it looks like it won't 
                make any difference at all. <strong>After you extract more 
                pieces, you'll probably see the original method in a different 
                way.</strong> You might see a sequence that was obscured before 
                or see a better way for the method to be organized. When you see
                those directions, you can move toward them. This is a far better 
                strategy than trying to break up a method into large chunks from 
                the beginning. Too often that isn't as easy as it looks; it 
                isn't as safe. It's easier to miss the details, and the details 
                are what make the code work.
            </p>
        `
    },
    {
        id: "hyperaware-editing",
        chapter: 23,
        page: "310",
        tags: [quoteTags.Tests, quoteTags.PairPrograming, quoteTags.Efficiency],
        rating: Rating.Interesting,
        content: `
            <p>
                Tests foster hyperaware editing. Pair programming does also.
                Does hyperaware-editing sound exhausting? Well, too much of
                anything is exhausting. The key thing is that it isn't
                frustrating. Hyperaware editing is a flow state, a state in
                which you can just shut out the world and work sensitively with 
                the code. It can actually be very refreshing. Personally, I get 
                far more tired when I'm not getting any feedback. At that point, 
                I get scared that I'm breaking the code without knowing it. I'm 
                struggling to maintain all of this state in my head, remembering 
                what I've changed and what I haven't, and thinking about how 
                I'll be able to convince myself later that I've really done what 
                I set out to do.
            </p>
        `
    },
    {
        id: "single-goal-editing",
        chapter: 23,
        page: "311",
        tags: [
            quoteTags.PairPrograming,
            quoteTags.Efficiency,
            quoteTags.TaskSeparation,
            quoteTags.Story
        ],
        rating: Rating.VeryGood,
        content: `
            <h3>Single-Goal Editing</h3>
            <p>
                [...] Has this ever happened to you? You start to work on one
                thing, and then you think, "Hmm, maybe I should clean this up." 
                So you stop to refactor a bit, but you start to think about what 
                the code should really look like, and then you pause. That 
                feature you were working on still needs to be done, so you go 
                back to the original place where you were editing code. You 
                decide that you need to call a method, and then you hop over to 
                where the method is, but you discover that the method is going 
                to need to do something else, so you start to change it while 
                the original change was pending and (catching breath) your pair 
                partner is next to you yelling "Yeah, yeah, yeah! Fix that and 
                then we'll do this." You feel like a racehorse running down the 
                track, and your partner isn't really helping. He's riding you 
                like a jockey or, worse, a gambler in the stands.
            </p>
            <p>
                Well, that's how it goes on some teams. A pair has an exciting 
                programming episode, but the last three quarters of it involve 
                fixing all of the code they broke in the previous quarter. 
                Sounds horrible, right? But, no, sometimes it's fun. You and 
                your partner get to saunter away from the machine like heroes. 
                You met the beast in its lair and killed it. You're top dog.
            </p>
            <p>Is it worth it? Let's look at another way of doing this.</p>
            <p>
                You need to make a change to a method. You already have the
                class in a test harness, and you start to make the change.
                But then you think, "Hey, I'll need to change this other
                method over here," so you stop and you navigate to it. It
                looks messy, so you start to reformat a line or two to see
                what is going on. Your partner looks at you and says, "What
                are you doing?" You say, "Oh, I was checking to see if we'll
                have to change method X." Your partner says, "Hey let's do
                one thing at a time." Your partner writes down the name of
                method X on a piece of paper next to the computer, and you
                go back and finish the edit. You run your tests and notice
                that all of them pass. Then you go over and look at the
                other method. Sure enough, you have to change it. You start
                to write another test. After a bit more programming, you run
                your tests and start to integrate. You and your partner look
                over to the other side of the table. There you see two other
                programmers. One is yelling "Yeah, yeah, yeah! Fix that and
                then we'll do this." They've been working on that task for
                hours, and they look pretty exhausted. If history is any
                guide, they'll fail integration and spend a few more hours
                working together.
            </p>
            <p>
                I have this little mantra that I repeat to myself when I'm
                working: <strong>"Programming is the art of doing one thing at 
                a time."</strong> When I'm pairing, I always ask my partner to 
                challenge me on that, to ask me "What are you doing?" If I 
                answer more than one thing, we pick one. I do the same for my 
                partner. Frankly, it's just faster. When you are programming, it 
                is pretty easy to pick off too big of a chunk at a time. If you
                do, you end up thrashing and just trying things out to make
                things work rather than working very deliberately and really
                knowing what your code does.
            </p>
        `
    },
    {
        id: "tdd-some-code-outside-of-work",
        chapter: 24,
        page: "320",
        tags: [quoteTags.Motivation, quoteTags.TDD, quoteTags.PersonalHabits],
        rating: Rating.Amazing,
        content: `
            <p>
                TDD some code outside of work. Program for fun a little bit.
                Start to feel the difference between the little projects you
                make and the big project at work. Chances are, your project
                at work can have the same feel if you can get the pieces you
                work with to run into a fast test harness.
            </p>
            <p>
                If morale is low on your team, and it's low because of code
                quality, here's something that you can try: Pick the ugliest
                most obnoxious set of classes in the project, and get them
                under test. When you've tackled the worst problem as a team,
                you'll feel in control of your situation. I've seen it again
                and again.
            </p>
        `
    },
    {
        id: "responsibilities-rather-than-implementation-details",
        chapter: 25,
        page: "327",
        tags: [quoteTags.CodingHabits, quoteTags.OO],
        rating: Rating.VeryGood,
        content: `
            ${boxed(`
                <p>
                    Move toward interfaces that communicate responsibilities
                    rather than implementation details. This makes code easier
                    to read and easier to maintain.
                </p>
            `)}
        `
    },
    {
        id: "legacy-code-has-no-abstraction",
        chapter: 25,
        page: "328",
        tags: [quoteTags.BadCode, quoteTags.Abstraction],
        rating: Rating.Good,
        content: `
            <p>
                <strong>[O]ne pervasive problem in legacy code bases is that 
                there often aren't any layers of abstraction; the most important
                code in the system often sits intermingled with low-level API 
                calls.</strong> We've already seen how this can make testing 
                difficult, but the problems go beyond testing. Code is harder to 
                understand when it is littered with wide interfaces containing 
                dozens of unused methods. When you create narrow abstractions 
                targeted toward what you need, your code communicates better and 
                you are left with a better seam.
            </p>
        `
    },
    {
        id: "safety-first-bis",
        chapter: 25,
        page: "328",
        tags: [quoteTags.Refactoring, quoteTags.Tests],
        rating: Rating.Amazing,
        content: `
            ${boxed(`
                <p>
                    <strong>Safety first.</strong> Once you have tests in place, 
                    you can make invasive changes much more confidently.
                </p>
            `)}
        `
    },
    {
        id: "break-out-method-object",
        chapter: 25,
        page: "330",
        tags: [
            quoteTags.LongMethod,
            quoteTags.Extraction,
            quoteTags.Refactoring,
            quoteTags.OO
        ],
        rating: Rating.Interesting,
        content: `
            <p>
                [I]f your method is large or does use instance data and methods,
                consider using <i>Break Out Method Object</i>. In a nutshell,
                the idea behind this refactoring is to move a long method to a
                new class. Objects that you create using that new class are
                called method objects because they embody the code of a single
                method. After you've used <i>Break Out Method Object</i>, you
                can often write tests for the new class easier than you could
                for the old method. <strong>Local variables in the old method 
                can become instance variables in the new class.</strong> Often 
                that makes it easier to break dependencies and move the code to 
                a better state.
            </p>
        `
    },
    {
        id: "the-name-doesnt-have-to-be-perfect",
        chapter: 25,
        page: "340",
        tags: [quoteTags.Naming],
        rating: Rating.Good,
        content: `
            ${boxed(`
                <p>
                    When naming a class, think about the methods that will
                    eventually reside on it. <strong>The name should be good, 
                    but it doesn't have to be perfect.</strong> Remember that 
                    you can always rename the class later.
                </p>
            `)}
        `
    },
    {
        id: "preserve-signature-when-copy-paste",
        chapter: 25,
        page: "345",
        tags: [
            quoteTags.Dependency,
            quoteTags.CodingHabits,
            quoteTags.Refactoring
        ],
        rating: Rating.Good,
        content: `
            ${boxed(`
                <p>
                    When you are breaking dependencies without tests, 
                    <i>Preserve Signatures (312)</i> of methods whenever 
                    possible. If you cut/copy and paste whole method signatures, 
                    you have less of a chance of introducing errors.
                </p>
            `)}
        `
    },
    {
        id: "no-I-prefix-in-interfaces",
        chapter: 25,
        page: "356",
        tags: [quoteTags.Naming, quoteTags.Extraction, quoteTags.Refactoring],
        rating: Rating.VeryGood,
        content: `
            <p>
                <i>Extract Interface</i> is a handy technique, but one part of 
                it is hard: naming. I often run into cases where I want to 
                extract an interface but the name I want to use is already the 
                name of the class. If I am working in an IDE that has support 
                for renaming classes and <i>Extract Interface</i>, this is easy 
                to take care of. When I don't, I have a few choices:
            </p>
            <ul>
                <li>I can make up a foolish name.</li>
                <li>
                    I can look at the methods I need and see if they are a
                    subset of the public methods on the class. If they are,
                    they might suggest another name for the new interface.
                </li>
            </ul>
            <p>
                <strong>One thing that I usually stop short of is putting an "I"
                prefix on the name of the class to make a name for the new 
                interface, unless it is already the convention in the code 
                base.</strong> There is nothing worse than working in an 
                unfamiliar area of code in which half the type names start with 
                <i>I</i> and half don't. Half of the time that you type the name 
                of a type, you'll be wrong. You'll either have missed the needed 
                <i>I</i> or not.
            </p>
            ${boxed(`
                <p>
                    Naming is a key part of design. If you choose good names, 
                    you reinforce understanding in a system and make it easier 
                    to work with. If you choose poor names, you undermine 
                    understanding and make life hellish for the programmers who 
                    follow you.
                </p>
            `)}
        `
    },
    {
        id: "no-global-mutable-data",
        chapter: 25,
        page: "372",
        tags: [quoteTags.Humor, quoteTags.Comparison, quoteTags.Dependency],
        rating: Rating.Interesting,
        content: `
            <p>
                Maybe I am a purist, but I don't like global mutable data. When
                I visit teams, it is usually the most apparent hurdle to getting
                portions of their system into test harnesses. You want to pull
                out a set of classes into a test harness, but you discover that
                some of them need to be set up in particular states to be used
                at all. When you have your harness set up, you have to run down
                the list of globals to make sure that each one has the state you
                need for the condition you want to test. <strong>Quantum 
                physicists didn't discover “spooky action at a distance”; in 
                software, we've had it for years.</strong>
            </p>
        `
    },
    {
        id: "superseding",
        chapter: 25,
        page: "406",
        tags: [quoteTags.Tests, quoteTags.OO, quoteTags.Naming],
        rating: Rating.VeryGood,
        content: `
            <p>
                [In tests, if we need to replace an instance variable and]
                if we don't mind adding an extra method to the class, we can
                supersede the parameter that we created in the constructor:
            </p>
            ${cpp(`
                void BlendingPen::supersedeParameter(Parameter *newParameter)
                {
                    delete m_param;
                    m_param = newParameter;
                }
            `)}
            <p>
                In tests, we can create pens as we need them and call
                <code>supersedeParameter</code> when we need to put in a
                sensing object. [...]
            </p>
            ${boxed(`
                <p>
                    <strong> Generally, it is poor practice to provide setters
                    that change the base objects that an object uses.</strong>
                    Those setters allow clients to drastically change the
                    behavior of an object during its lifetime. When someone can 
                    make those changes, you have to know the history of that 
                    object to understand what happens when you call one of its 
                    methods. <strong>When you don't have setters, code is easier 
                    to understand.</strong>
                </p>
            `)}
            <p>
                One nice thing about using the word <i>supersede</i> as the
                method prefix is that it is kind of fancy and uncommon. If you 
                ever get concerned about whether people are using the
                superseding methods in production code, you can do a quick
                search to make sure they aren't.
            </p>
        `
    }
];

function boxed(content: string) {
    return `<div style="${boxedStyle()}">${content}</div>`;

    function boxedStyle() {
        return joinStyles({
            "background-color": "#fffcf2",
            padding: "5px 10px",
            border: "1px dashed #e5ad99",
            "border-radius": "5px",
            "margin-bottom": "1.45rem"
        });
    }
}
function figure(
    image: string,
    caption: string,
    { width = "auto" } = {}
): string {
    return `
        <figure class="wewlc">
            <div class="image-container">
                <img 
                    src="${image}" 
                    alt="${caption}"
                    style="min-width: ${width}; max-width: ${width}" 
                />
            </div>
            <figcaption>${caption}</figcaption>
        </figure>
        <style>
            figure.wewlc {
                margin: 10px;
            }
            figure.wewlc .image-container {
                overflow-x: auto; 
                margin: 10px 0;
            }
            figure.wewlc img {
                display: block;
                margin: auto;
            }
            figure.wewlc figcaption {
                text-align: center;
                font-style: italic;
            }
            figure.wewlc figcaption code {
                font-style: normal;
            }
        </style>
    `;
}
