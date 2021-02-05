import { BlogArticleDTO } from "@alex/entities";
import { html, javascript } from "../utils";

export const engineersAndDevelopers: BlogArticleDTO = {
    id: "hire-good-tilers",
    date: {
        year: 2021,
        month: 2,
        day: 5,
    },
    summary: html`
        <h3>Hire Good Tilers, Not Good Engineers</h3>
        <p>Hire craftsman, not rocket scientists.</p>
    `,
    content: html`
        <header>
            <h1>Hire Good Tilers<br /><small>Not Good Engineers</small></h1>
            <p>
                In other words,
                <strong>hire craftsman, not rocket scientists</strong>.
            </p>

            <figure>
                <img src="hire-good-tilers.jpg" alt="tiler" />
            </figure>
        </header>
        <article>
            <h2>A tiler for your new kitchen</h2>

            <p>
                Let's say you're looking for a tiler for your new kitchen's
                floor. How will you pick her?
            </p>
            <p>Would you ask her questions like:</p>
            <ul>
                <li>What is the composition of the glue?</li>
                <li>What is the resistance of a 2cm thick tile?</li>
            </ul>
            <p>
                Probably not. You would measure how well she masters the craft,
                not the theory: you would look at her previous works, ask her
                opinion on your bathroom floor,
                <a
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
                specificity.
            </p>
            <p>
                <strong>
                    But that does not match the skills required for our problem!
                </strong>
                I never had to code a graph structure at work, and even less did
                I have to think of the theoretical time-complexity of my
                implementation.
            </p>
            <p>
                Worse: the code made by people hired with those skills was
                usually unreadable, cluttered with premature optimization:
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
                Creating a software is hard, but it's not hard because of the
                complexity of the algorithms, it's hard because of the changing
                requirements and because of our gradual understanding of what
                the clients need. In DDD terms:
                <i>"the complexity lies in the domain"</i>.
            </p>
            <p>
                <strong>
                    The complexity of a <i>complex</i> but <i>static</i> problem
                    is very different from the complexity of a <i>simple</i> but
                    <i>evolving</i>
                    problem.
                </strong>
                The second type of problem requires passion for simplicity, and
                care in details: craftsmanship.
            </p>
            <p>Compare the previous code with the following one:</p>
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
                It looks simple, and yet, writing such code is hard. It requires
                experience and constant attention to clarity.
            </p>
        </article>
        <article>
            <h2>Conclusion</h2>
            <p>
                Stop hiring people who know how to solve complex problems. They
                will hurt your code base by solving the wrong problem. Hire
                people with passion for simple things done well.
            </p>
            <p>
                <i>
                    PS: Don't get me wrong: I'm not saying one should not hire
                    engineers. What I'm saying is that you should not hire
                    someone for their engineering skills but for their love of
                    code craft. If your candidate is a craftsman <b>and</b> an
                    engineer, even better!
                </i>
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
                    complex. To reduce bugs, we need to hire people with a good
                    brain so they can understand the complexity of our product.
                </blockquote>
                <p>I cannot but disagree more.</p>
                <p>
                    If you want a complex tiling pattern for your kitchen, you
                    need somebody with very good mastery of the tiling craft,
                    not somebody with a degree in
                    <a href="https://en.wikipedia.org/wiki/Tessellation"
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
                    to code. After all, they passed complex coding courses.
                </p>
                <p>I know, I was one of them.</p>
                <p>So be careful of engineers. Make sure:</p>
                <ul>
                    <li>
                        they are humble enough to understand that they have much
                        to learn about software engineering,
                    </li>
                    <li>
                        you already have a craftsman in your team to show them
                        the way.
                    </li>
                </ul>
            </article>
        </article>
    `,
};
