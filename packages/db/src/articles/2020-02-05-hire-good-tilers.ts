import { html, javascript } from "../utils";
import type { BlogArticleDTO } from "@alex/entities";

export const engineersAndDevelopers: BlogArticleDTO = {
    id: "hire-good-tilers",
    date: {
        year: 2021,
        month: 2,
    },
    cover: "hire-good-tilers.jpg",
    summary: html`
        <h3>Hire Good Tilers, Not Good Engineers</h3>
        <p>
            Stop hiring people who know how to solve complex problems. Hire
            people with passion for simple things done well. Hire craftsman, not
            rocket scientists.
        </p>
    `,
    content: html`
        <header>
            <h1>Hire Good Tilers<br /><small>Not Good Engineers</small></h1>
            <p>
                In other words,
                <strong>hire craftsmen, not rocket scientists</strong>.
            </p>

            <figure>
                <img src="hire-good-tilers.jpg" alt="tiler" />
            </figure>
        </header>
        <article>
            <h2>A tiler for your new kitchen</h2>

            <p>
                Let's say you're looking for a tiler for your new kitchen's
                floor. How will you pick him?
            </p>
            <p>Would you ask him questions like:</p>
            <ul>
                <li>What is the composition of the glue?</li>
                <li>What is the resistance of a 2cm thick tile?</li>
            </ul>
            <p>
                Probably not. You would rather measure how well he masters the
                craft: look at his previous works, ask how he would choose the
                ceramic, ask his opinion on your bathroom floor,
                <a
                    target="_blank"
                    href="https://www.ceramsol.co.uk/blog/choosing-the-right-tiler"
                    >etc</a
                >.
            </p>
        </article>
        <article>
            <h2>In the software industry</h2>
            <p>
                The previous point sounds natural, and yet, we often do the
                opposite in the software industry. We test people's knowledge of
                algorithms, time & space complexity, frameworks, language
                specificities...
            </p>
            <p>
                <strong>
                    But those do not match the skills required for our problem.
                </strong>
                I never had to code a graph structure at work, and even less did
                I have to think of the theoretical time-complexity of my
                implementation.
            </p>
            <p>
                Worse: the code made by people hired with those skills tended to
                be unreadable, cluttered with premature optimization:
            </p>
            ${javascript(`
                const getModules = async (objs, req) => {
                    let courses = await _db.courses.find({
                        company: req.company,
                        _id: { $in: µ.uniq(objs, "createdFor", true) }
                    }, ["name"]);
                    courses = µ.invert(courses);
                    _.each(objs, function (val, key) {
                        if (courses[val.createdFor]) {
                            objs[key].createdFor = courses[val.createdFor].name;
                        } else {
                            objs[key].createdFor = "";
                        }
                    });
                    return objs;
                };
            `)}
        </article>
        <article>
            <h2>Solving the wrong problem</h2>
            <p>
                What's the issue?
                <strong>We are solving the wrong problem.</strong>
            </p>
            <p>
                Creating software is hard, but it's not hard because of the
                complexity of the algorithms, it's hard because of the changing
                requirements, because of our gradual understanding of what the
                clients actually need. In
                <span title="Domain Driven Design">DDD</span> terms:
                <i>"the complexity lies in the domain"</i>.
            </p>
            <p>
                Solving a <i>complex</i> but <i>static</i> problem is very
                different from solving a <i>simple</i> but
                <i>evolving</i> problem. The later requires passion for
                simplicity, and care for details:
                <strong>craftsmanship</strong>.
            </p>
            <p>
                Compare the previous code with the following one
                <small>(<i>they are unrelated</i>)</small>:
            </p>
            ${javascript(`
                async function gitflow() {
                    try {
                
                        await git.checkout("prod");
                        await git.pull();
                
                        await git.checkout("beta");
                        await git.pull();
                        await git.merge("prod");
                
                        await git.checkout("dev");
                        await git.pull();
                        await git.merge("beta");
                
                    } catch (err) {
                        if (err instanceof git.GitConflictError) {
                            throw new FlowConflictError();
                        }
                        throw err;
                    }
                }
            `)}
            <p>
                <strong>
                    No need to have an engineering degree to write such code.
                </strong>
                It looks simple, and yet, writing such code requires experience
                and constant attention to clarity.
            </p>
        </article>
        <article>
            <h2>How to detect craftsmen?</h2>
            <p>
                My advise: do some pair programming with the candidate on an
                intellectually simple problem like
                <a
                    target="_blank"
                    href="https://github.com/adjerbetian/book-club-tdd#problem-2-the-robot"
                    >controlling a robot</a
                >.
            </p>
            <ul>
                <li>
                    If she only cares about making it work, or about
                    performance, don't hire her: she didn't understand the real
                    problem.
                </li>
                <li>
                    If she changes the signature of
                    <code>getLastPosition</code>, or if she abstracts it, then
                    she cares about code, because she saw that this signature
                    was a pain.
                </li>
            </ul>
        </article>
        <article>
            <h2>Conclusion</h2>
            <p>
                Stop hiring people based on how they solve smart complex
                problems. They will hurt your code base by solving the wrong
                problem.
                <strong>
                    Hire people with passion for simple things done well.
                </strong>
            </p>
        </article>
        <article>
            <h2>Further thoughts</h2>

            <article>
                <h3>"Our product is complex, so we need smart people"</h3>
                <p>
                    When I told a colleague that our recruiting process was
                    wrong, and that our code suffered from it, his answer was
                    something like this:
                </p>
                <blockquote>
                    It's normal that our code has more bugs and is harder to
                    understand: our product is growing and becoming more
                    complex. To reduce bugs, we need to hire people with good
                    brains so they can understand our product.
                </blockquote>
                <p>I cannot but disagree more.</p>
                <p>
                    If you want a complex tiling pattern for your kitchen, you
                    need somebody with very good mastery of the tiling craft,
                    not somebody with a degree in
                    <a
                        target="_blank"
                        href="https://en.wikipedia.org/wiki/Tessellation"
                        >tessellations</a
                    >.
                </p>
                <p>
                    If the product is complex, then it's even more important to
                    hire people who care about making it look simple and clear.
                </p>
            </article>
            <article>
                <h3>The problem with engineers</h3>
                <p>
                    The problem with engineers is that they think they know how
                    to code. After all, they passed advanced coding courses.
                </p>
                <p>I know, I was one of them.</p>
                <p>
                    Beware of engineers. Make sure they are humble enough to
                    understand that they have much to learn about software
                    engineering. I would also make sure the team already has one
                    craftsman, to show the way.
                </p>
            </article>
            <article>
                <h3>What if you need performance?</h3>
                <p>
                    My article applies to general product based software. If you
                    are developing a game engine, things
                    <i title="I still think you need clear code">might</i>
                    be different.
                </p>
                <p>
                    But do not confuse optimization and premature optimization.
                </p>
                <p>
                    In my experience, when the code was slow, knowing about
                    linked list didn't help, but making the code clearer enabled
                    simple optimizations like caching or pre-computation.
                </p>
                <p>
                    See
                    <a href="/quotes/refactoring-and-performance">
                        <i>Refactoring and Performance</i>
                    </a>
                    by Martin Fowler for more.
                </p>
            </article>
        </article>
    `,
};
