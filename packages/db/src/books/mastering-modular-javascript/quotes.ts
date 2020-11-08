import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { javascript, titled } from "../../utils";

export const chapters = [
    "Preface",
    "Module Thinking",
    "Modularity Principles",
    "Module Design",
    "Shaping Internals",
    "Modular Patterns and Practices",
    "Development Methodology and Philosophy",
];

export const quotes: QuoteDBModel[] = [
    {
        id: "frustration-over-recent-own-legacy-code",
        chapter: 1,
        page: "12",
        content: `
            <p>
                Virtually everyone who has done any amount of programming has
                experienced a feeling of frustration when glancing at a piece of
                code they themselves wrote a few months prior, only to later
                realize that, with a fresh pair of eyes, the design they had
                then come up with wasn't as solid as they originally intended.
            </p>
        `,
        tags: [quoteTags.Clarity, quoteTags.Common],
        rating: 3,
    },
    {
        id:
            "we-re-not-optimizing-for-computers-to-run-programs-as-fast-as-possible",
        chapter: 1,
        page: "12",
        content: `
            <p>
                Remember, computer program development is largely a human and
                collaborative endeavor. <strong>We're not optimizing for 
                computers to run programs as fast as possible. If we were, we'd 
                be writing binary or hardcoding logic into circuit 
                boards.</strong> Instead, our focus is to empower an 
                organization so that its developers can remain productive and 
                quickly understand and even modify pieces of code they haven't 
                run across before.
            </p>
        `,
        tags: [quoteTags.Optimization, quoteTags.Common, quoteTags.Clarity],
        rating: 4,
    },
    {
        id: "we-should-treat-performance-as-a-feature",
        chapter: 1,
        page: "13",
        content: `
            <p>
                Going back to performance, <strong>we should be treating it as 
                a feature</strong>, and for the most part we shouldn't place a 
                higher premium on it than we would for other features. Unless 
                performance needs to be a defining feature of our system for 
                business reasons, we shouldn't worry about ensuring that the 
                system runs at top speed on all code paths. Doing so is bound to 
                result in highly complex applications that are hard to maintain, 
                debug, extend, and justify.
            </p>
        `,
        tags: [quoteTags.Optimization, quoteTags.Common, quoteTags.Clarity],
        rating: 4,
    },
    {
        id: "a-module-is-only-as-good-as-its-public-interface",
        chapter: 2,
        page: "23",
        content: `
            <h3>API First</h3>
            <p>
                <strong>A module is only as good as its public interface.</strong>
                A poor implementation may hide behind an excellent
                interface. More important, a great interface means we can
                swap out a poor implementation as soon as we find time to
                introduce a better one. Since the API remains the same, we
                can decide whether to replace the existing implementation
                altogether or whether both should coexist while we upgrade
                consumers to use the newer one.
            </p>
        `,
        tags: [
            quoteTags.Inspiring,
            quoteTags.Abstraction,
            quoteTags.Architecture,
        ],
        rating: 5,
    },
    {
        id: "do-not-reveal-private-properties",
        chapter: 2,
        page: "25",
        content: `
            <p>
                When everything in a component is made public, nothing can be
                considered an implementation detail, and thus making changes
                becomes hard. Prefixing properties with an underscore is not
                enough for consumers not to rely on them; a better approach is
                not to reveal private properties in the first place.
            </p>
        `,
        tags: [quoteTags.Abstraction, quoteTags.OO, quoteTags.Common],
        rating: 2,
    },
    {
        id: "interfaces-crust",
        chapter: 2,
        page: "31",
        content: `
            <h3>CRUST: Consistent, Resilient, Unambiguous, Simple, and Tiny</h3>
            <p>
                A well-regarded API typically packs several of the following
                traits. It is <i>consistent</i>, meaning it is 
                ${titled(
                    "idempotent",
                    "For a given set of inputs, an idempotent function always produces the same output."
                )} and has a similar signature shape as that of 
                related functions. It is <i>resilient</i>, meaning its interface 
                is flexible and accepts input expressed in a few ways, including 
                optional parameters and overloading. Yet, it is <i>unambiguous</i>:
                there aren't multiple interpretations of how the API should
                be used, what it does, how to provide inputs, or how to
                understand the output. Through all of this, it manages to
                stay <i>simple</i>: it's straightforward to use and handles
                common use cases with little to no configuration, while
                allowing customization for advanced use cases. Lastly, a
                CRUST interface is also <i>tiny</i>: it meets its goals but
                isn't overdesigned, it comprises the smallest possible
                surface area while allowing for future nonbreaking
                extensibility.
            </p>
        `,
        tags: [quoteTags.Definition, quoteTags.Architecture],
        rating: 3,
    },
    {
        id: "interfaces-optional-parameters",
        chapter: 2,
        page: "35",
        content: `
            <p>
                A good example of optional parameters is the native DOM
                <code>fetch</code> API. [...]
            </p>
            ${javascript(`
                await fetch('/api/users')
                await fetch('/api/users/rob', {  method: 'DELETE' })
            `)}
            <p>
                Suppose that, as the API designers for <code>fetch</code>,
                we originally devised it as just a way of doing
                <code>GET \${ resource }</code>. When we get a requirement
                for a way of choosing the HTTP verb, we could avoid the
                <code>options</code> object and reach directly for a
                <code>fetch(resource, verb)</code> overload. Although this
                would serve our particular requirement, it would be
                shortsighted. As soon as we get a requirement to configure
                something else, we'd be left with the need to support both
                <code>fetch(resource, verb)</code> and
                <code>fetch(resource, options)</code> overloads, so that we
                avoid breaking backward compatibility. Worse still, we might
                be tempted to introduce a third parameter that configures
                our next requirement. Soon, we'd end up with an API such as
                the infamous <code>KeyboardEvent#initKeyEvent</code> method,
                whose signature is outlined here:
            </p>
            ${javascript(`
                event.initKeyEvent(type, bubbles, cancelable, viewArg,
                                   ctrlKeyArg, altKeyArg, shiftKeyArg,
                                   metaKeyArg, keyCodeArg, charCodeArg)
            `)}
            <p>
                To avoid this trap, <strong>it is paramount to identify the 
                core use case for a function — say, parsing Markdown — and 
                then allow ourselves only one or two important parameters 
                before going for an <code>options</code> object</strong>. 
                In the case of <code>initKeyEvent</code>, the only parameter 
                that we should consider important is the <code>type</code>, 
                and everything else can be placed in an <code>options</code> 
                object:
            </p>
            ${javascript(`
                event.initKeyEvent(type, { bubbles, cancelable, viewArg,
                                   ctrlKeyArg, altKeyArg, shiftKeyArg,
                                   metaKeyArg, keyCodeArg, charCodeArg })
            `)}
            <p>
                A key aspect of API design is readability. How far can users
                get without having to reach for the documentation? In the
                case of <code>initKeyEvent</code>, not very; unless they
                memorize the position of each of 10 parameters and their
                default values, chances are they're going to reach for the
                documentation every time. When designing an interface that
                might otherwise end up with four or more parameters, an
                <code>options</code> object carries a multitude of benefits:
            </p>
            <ul>
                <li>
                    Consumers can declare options in any order, as the
                    arguments are no longer positional inside the
                    <code>options</code> object.
                </li>
                <li>
                    The API can offer default values for each option. This
                    helps the consumer avoid specifying defaults just so
                    that they can change another positional parameter.
                </li>
                <li>
                    Consumers don't need to concern themselves with options
                    they don't need.
                </li>
                <li>
                    Developers reading pieces of code that consume the API
                    can immediately understand which parameters are being
                    used, because they're explicitly named in the
                    <code>options</code> object.
                </li>
            </ul>
            <p>
                <strong>
                    As we make progress, we naturally keep coming back to
                    the <code>options</code> object in API design.
                </strong>
            </p>
        `,
        tags: [
            quoteTags.Code,
            quoteTags.Common,
            quoteTags.Clarity,
            quoteTags.Architecture,
        ],
        rating: 3,
    },
    {
        id: "interfaces-unambiguity",
        chapter: 2,
        page: "37",
        content: `
            <h3>2.2.3 Unambiguity</h3>
            <p>
                The output shape for a function shouldn't depend on how it
                received its input or the result that was produced. This
                rule is almost universally agreed upon: you should aim to
                surprise consumers of your API as little as possible. In a
                couple of cases, we may slip up and end up with an ambiguous
                API. For the same kind of result, we should return the same
                kind of output.
            </p>
            <p>
                For instance, <code>Array#find</code> always returns
                <code>undefined</code> when it doesn't find any items that
                match the provided predicate function. If it instead
                returned <code>null</code> when the array is empty, for
                example, that'd be inconsistent with other use cases, and
                thus wrong. [...]
            </p>
            <p>
                In the same vein, we should avoid optional input parameters
                that transform the result into a different data type. Favor
                composability — or a new method — instead, where possible.
                An option that indicates whether a raw object such as a
                <code>Date</code> or a DOM element should be wrapped in an
                instance of jQuery or similar libraries such as
                <code>moment</code> before returning the result, or a
                <code>json</code> option that causes the result to be a
                JSON-formatted string when true and an object otherwise is
                ill-advised, unless there are technical reasons we must do
                so.
            </p>
        `,
        tags: [quoteTags.Common, quoteTags.Clarity],
        rating: 3,
    },
    {
        id: "use-positive-options",
        chapter: 2,
        page: "38",
        content: `
            <p>
                Negated option names such as <code>avoidAutolinking</code> are
                sometimes justified because they make it so that the default
                value is <code>false</code>, which on the surface sounds correct
                for options that aren't user-provided. Negated options, however,
                tend to confuse users who are confronted with the double
                negative in <code>avoidAutolinking: false</code>. It's best to
                use additive or positive options, preventing the double
                negative: <code>autolinking: true</code>.
            </p>
        `,
        tags: [quoteTags.Naming, quoteTags.Clarity],
        rating: 3,
    },
    {
        id: "the-best-code-is-no-code-at-all",
        chapter: 3,
        page: "46",
        content: `
            <p>
                Falling into the trap of implementing features that consumers
                don't yet need might be easy at first, but it'll cost us dearly
                in terms of complexity, maintainability, and wasted developer
                hours. The best code is no code at all. This means fewer bugs,
                less time spent writing code, less time writing documentation,
                and less time fielding support requests. Latch onto that
                mentality and strive to keep functionality to exactly the
                absolute minimum that's required.
            </p>
        `,
        tags: [quoteTags.Business],
        rating: 2,
    },
    {
        id: "abstractions-evolve-in-small-steps",
        chapter: 3,
        page: "46",
        content: `
            <h3>3.1.3 Abstractions Evolve in Small Steps</h3>
            <p>
                <strong> It's important to note that abstractions should evolve
                naturally</strong>, rather than have them force an 
                implementation style upon us. When we're unsure about whether 
                to bundle a few use cases with an abstraction, the best option 
                is often to wait and see whether more use cases would fall into 
                the abstraction we're considering. If we wait, and the
                abstraction holds true for more and more use cases, we can
                go ahead and implement the abstraction. If the abstraction
                doesn't hold, we can be thankful we won't have to bend the
                abstraction to fit the new use cases, often breaking the
                abstraction or causing more grief than the abstraction had
                originally set out to avoid on our behalf.
            </p>
            <p>
                [...] we should first wait until use cases emerge and then
                reconsider an abstraction when its benefits become clear.
                While developing unneeded functionality is little more than
                a waste of time, <strong>leveraging the wrong abstractions will 
                kill or, at best, cripple our component's interface</strong>.
            </p>
        `,
        tags: [quoteTags.Abstraction],
        rating: 3,
    },
    {
        id: "do-repeat-yourself-occasionally",
        chapter: 3,
        page: "51",
        content: `
            <h3>3.2.1 Do Repeat Yourself, Occasionally</h3>
            <p>
                [...] When taken to the extreme, though, DRY is harmful and
                hinders development. Our mission to find the right
                abstractions will be cut short if we are ever vigilant in
                our quest to suppress any and all repetition. When it comes
                to finding abstractions, it's almost always best to pause
                and reflect on whether we ought to force DRY at this moment,
                or should wait a while and see whether a better pattern
                emerges.
            </p>
            <p>
                <strong>Being too quick to follow DRY may result in selecting
                the wrong abstraction.</strong> This mistake can cost us time 
                if we realize it early enough, and cause even more damage the 
                longer we let an undesirable abstraction loose.
            </p>
        `,
        tags: [quoteTags.Abstraction],
        rating: 2,
    },
    {
        id: "performance-is-a-feature",
        chapter: 3,
        page: "56",
        content: `
            <p>
                <strong>Performance is a feature, to be treated as such, and we
                should favor simplicity and readability over speed.</strong>
            </p>
        `,
        tags: [quoteTags.Clarity, quoteTags.Optimization],
        rating: 4,
    },
    {
        id: "readme-driven-development",
        chapter: 3,
        page: "60",
        content: `
            <p>
                Tom Preston-Werner wrote about the notion of README-driven
                development as a way of designing an interface by first
                describing it in terms of how it would be used. This is
                generally more effective than test-driven design (TDD), where
                we'll often find ourselves rewriting the same bits of code over
                and over before we realize we wanted to produce a different API
                to begin with. The way README-driven design is supposed to work
                is self-descriptive; we begin by creating a README file and
                writing our interface's documentation. We can start with the
                most common use cases, inputs, and desired outputs [...], and
                grow our interface from there. Doing this in a README file
                instead of a module leaves us an itsy bit more detached from an
                eventual implementation, but the essence is the same. The
                largest difference is that, much like TDD, we'd be committing to
                writing a README file over and over before we settle for a
                desirable API. Regardless, both API-first and README-driven
                design offer significant advantages over diving straight into an
                implementation.
            </p>
        `,
        tags: [quoteTags.Interface, quoteTags.CodingHabits],
        rating: 2,
    },
    {
        id: "complex-code-is-predominantly-shorter-than-it-should-be",
        chapter: 4,
        page: "70",
        content: `
            <p>
                <strong>Complex code is predominantly shorter than it should be, 
                and often deceitfully so.</strong> An expression that might have 
                involved 5 to 10 short lines of code usually ends up being 
                represented in 1 or 2 clever lines of code. The problem with 
                clever code is that we need to expend time and energy to read it 
                whenever its intent is not clear in our mind, which is only the 
                case when we first write the code or right after spending 
                considerable time analyzing it.
            </p>
        `,
        tags: [quoteTags.BadCode, quoteTags.Extraction],
        rating: 5,
    },
    {
        id: "leveraging-immutability",
        chapter: 4,
        page: "91",
        content: `
            <h3>4.3.4 Leveraging Immutability</h3>
            <p>
                The following example takes advantage of the object spread
                operator to copy every property of <code>movie</code> into a 
                new object, and then adds a <code>profit</code> property to it. 
                Here we're creating a new collection, made up of new 
                <code>movie</code> objects:
            </p>
            ${javascript(`
                const movieModels = movies.map(movie => ({
                    ...movie,
                    profit: movie.amount * movie.unitCost
                }))
                const successfulMovies = movieModels.filter(
                    movie => movie.profit > 15
                )
            `)}
            <p>
                Thanks to us making fresh copies of the objects we're
                working with, we've preserved the <code>movies</code>
                collection. If we assume at this point that
                <code>movies</code> was an input to our function, we could
                say that modifying any movie in that collection would've
                made our function impure, since it'd have the side effect of
                unexpectedly altering the input.
            </p>
            <p>
                <strong>By introducing immutability, we've kept the function
                pure.</strong> That means that its output depends on only its 
                inputs and that we don't create any side effects such as 
                changing the inputs themselves. <strong>This, in turn, 
                guarantees that the function is idempotent</strong>; calling 
                a function repeatedly with the same input always produces the 
                same result, given the output depends solely on the inputs and 
                there are no side effects. In contrast, the idempotence 
                property would've been brought into question if we had tainted 
                the input by adding a <code>profit</code> field to every movie.
            </p>
        `,
        tags: [quoteTags.Code, quoteTags.Common],
        rating: 4,
    },
    {
        id: "isolating-data-and-logic",
        chapter: 4,
        page: "94",
        content: `
            <h3>4.4.1 Isolating Data and Logic</h3>
            <p>
                <strong>Keeping data strictly separate from methods that modify
                or access those data structures can help reduce complexity.</strong>
                When data is not cluttered with functionality, it becomes
                detached from it and thus easier to read, understand, and
                serialize. At the same time, the logic that was previously
                tied to our data can now be used when accessing different
                bits of data that share some trait with it.
            </p>
            <p>
                As an example, the following piece of code shows a piece of
                data that's encumbered by the logic that works with it.
                Whenever we want to leverage the methods of <code>Value</code>, 
                we'll have to box our input in this class, and if we later want 
                to unbox the output, we'll need to cast it with a custom-built 
                <code>valueOf</code> method or similar:
            </p>
            ${javascript(`
                class Value {
                    constructor(value) {
                        this.state = value
                    }
                    add(value) {
                        this.state += value
                        return this
                    }
                    multiply(value) {
                        this.state *= value
                        return this
                    }
                    valueOf() {
                        return this.state
                    }
                }
                console.log(+new Value(5).add(3).multiply(2)) // <- 16
            `)}
            <p>
                Consider now, in contrast, the following piece of code. Here
                we have a couple of functions that purely compute addition
                and multiplication of their inputs, which are idempotent,
                and which can be used without boxing inputs into instances
                of <code>Value</code>, making the code more transparent to
                the reader. <strong>The idempotence aspect is of great benefit, 
                because it makes the code more digestible: whenever we add
                <code>3</code> to <code>5</code>, we know the output will be 
                <code>8</code>, whereas whenever we add <code>3</code> to the 
                current state, we know only that <code>Value</code> will 
                increment its state by <code>3</code></strong>:
            </p>
            ${javascript(`
                function add(current, value) {
                    return current + value
                }
                function multiply(current, value) {
                    return current * value
                }
                console.log(multiply(add(5, 3), 2)) // <- 16
            `)}
        `,
        tags: [quoteTags.Code, quoteTags.Separation],
        rating: 3,
    },
    {
        chapter: 4,
        page: "96",
        id: "modular-javascript-p96",
        content: `
            <h3>4.4.2 Restricting and Clustering Logic</h3>
            <p>
                <strong>Should a data structure — or code that leverages that
                data structure — require changes, the ripple effects can
                be devastating when the relevant logic is sprinkled all
                across the codebase.</strong> Consequently, when this happens, 
                we need to update code from all over, making a point of not 
                missing any occurrences, updating and fixing test cases as we 
                go, and testing some more to certify that the updates haven't 
                broken down our application logic, all in one fell swoop.
            </p>
            <p>
                For this reason, <strong>we should strive to keep code that 
                deals with a particular data structure contained in as few 
                modules as possible</strong>. For instance, if we have a 
                <code>BlogPost</code> database model, it probably makes sense 
                to start out having all the logic regarding a 
                <code>BlogPost</code> in a single file. In that file, we could 
                expose an API allowing consumers to create, publish, edit, 
                delete, update, search, or share blog posts. As the 
                functionality around blog posts grows, we might opt for 
                spreading the logic into multiple colocated files: one might 
                deal with search, parsing raw end-user queries for tags and 
                terms that are then passed to Elasticsearch or some other 
                search engine; another might deal with sharing, exposing an API 
                to share articles via email or through different social media 
                platforms; and so on.
            </p>
            <p>
                Splitting logic into a few files under the same directory
                helps us prevent an explosion of functionality that mostly
                just has a data structure in common, bringing together code
                that's closely related in terms of functionality.
            </p>
            <p>
                <strong>The alternative, placing logic related to a particular
                aspect of our application such as blog posts directly in the 
                components where it's needed, will cause trouble if left 
                unchecked.</strong> Doing so might be beneficial in terms of 
                short-term productivity, but longer-term we need to worry about
                coupling logic, strictly related to blog posts in this case,
                together with entirely different concerns. At the same time,
                if we sprinkle the bulk of the logic across several unrelated 
                components, we risk missing critical aspects of functionality 
                when making large-scale updates to the codebase. We might end 
                up making the wrong assumptions, or mistakes that become evident 
                only much further down the line.
            </p>
        `,
        tags: [quoteTags.Separation, quoteTags.Architecture],
        rating: 3,
    },
];
