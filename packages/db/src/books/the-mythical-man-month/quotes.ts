import { QuoteDBModel, Rating } from "../dbModel";
import { quoteTags } from "../quoteTags";
import { html } from "../../utils";

export const chapters = [
    "Preface",
    "The Tar Pit",
    "The Mythical Man-Month",
    "The Surgical Team",
    "Aristocracy, Democracy, and System Design",
    "The Second-System Effect",
    "Passing the Word",
    "Why Did the Tower of Babel Fail?",
    "Calling the Shot",
    "Ten Pounds in a Five-Pound Sack",
    "The Documentary Hypothesis",
    "Plan to Throw One Away",
    "Sharp Tools",
    "The Whole and the Parts",
    "Hatching a Catastrophe",
    "The Other Face",
    "No Silver Bullet—Essence and Accident",
    '"No Silver Bullet" Refired ',
    "Propositions of The Mythical Man-Month: True or False?",
    "The Mythical Man-Month after 20 Years",
];

export const quotes: QuoteDBModel[] = [
    {
        id: "the-importance-of-calendar",
        chapter: 2,
        page: "14",
        content: html`
            <p>
                More software projects have gone awry for lack of calendar time
                than for all other causes combined.
            </p>
        `,
        tags: [quoteTags.Efficiency, quoteTags.Organisation],
        rating: Rating.Interesting,
    },
    {
        id: "poor-estimation-comes-from-assuming-that-all-will-go-well",
        chapter: 2,
        page: "14",
        content: html`
            <p>
                [O]ur techniques of estimating are poorly developed. More
                seriously,
                <strong>
                    they reflect an unvoiced assumption which is quite untrue,
                    i.e., that all will go well</strong
                >.
            </p>
        `,
        tags: [quoteTags.Estimation],
        rating: Rating.Good,
    },
    {
        id: "the-mythical-man-month",
        chapter: 2,
        page: "16",
        content: html`
            <h3>The Man-Month</h3>
            <p>
                The second fallacious thought mode is expressed in the very unit
                of effort used in estimating and scheduling: the man-month. Cost
                does indeed vary as the product of the number of men and the
                number of months. <strong>Progress does not</strong>.
                <i>
                    Hence the man-month as a unit for measuring the size of a
                    job is a dangerous and deceptive myth.
                </i>
                It implies that men and months are interchangeable.
            </p>
            <p>
                Men and months are interchangeable commodities only when a task
                can be partitioned among many workers
                <i>with no communication among them</i>. This is true of reaping
                wheat or picking cotton; it is not even approximately true of
                systems programming.
            </p>

            <div style="display: flex; flex-wrap: wrap">
                ${figure(
                    "the-mythical-man-month-p16-1.png",
                    "Fig 2.1 Time versus number of workers—perfectly partitionable task"
                )}
                ${figure(
                    "the-mythical-man-month-p16-2.png",
                    "Fig 2.4 Time versus number of workers—task with complex interrelationships"
                )}
            </div>
        `,
        tags: [quoteTags.Estimation],
        rating: Rating.Good,
    },
    {
        id: "coding-counts-for-only-one-sixth",
        chapter: 2,
        page: "20",
        content: html`
            <p>
                For some years I have been successfully using the following rule
                of thumb for scheduling a software task:
            </p>
            <ul>
                <li>l/3 planning</li>
                <li>l/6 coding</li>
                <li>l/4 component test and early system test</li>
                <li>l/4 system test, all components in hand.</li>
            </ul>
            <p>
                This differs from conventional scheduling in several important
                ways: [...]
            </p>
            <ol>
                <li value="3">
                    <strong>
                        The part that is easy to estimate, i.e., coding, is
                        given only one-sixth of the schedule.
                    </strong>
                </li>
            </ol>
        `,
        tags: [quoteTags.Estimation],
        rating: Rating.Interesting,
    },
    {
        id: "the-omelette-story",
        chapter: 2,
        page: "21",
        content: html`
            <p>
                Observe that for the programmer, as for the chef, the urgency of
                the patron may govern the scheduled completion of the task, but
                it cannot govern the actual completion. An omelette, promised in
                two minutes, may appear to be progressing nicely. But when it
                has not set in two minutes, the customer has two choices — wait
                or eat it raw. Software customers have had the same choices.
            </p>
            <p>
                <strong>
                    The cook has another choice; he can turn up the heat. The
                    result is often an omelette nothing can save—burned in one
                    part, raw in another.
                </strong>
            </p>
        `,
        tags: [quoteTags.Comparison],
        rating: Rating.VeryGood,
    },
    {
        id: "brooks-s-Law",
        chapter: 2,
        page: "25",
        content: html`
            <p>Oversimplifying outrageously, we state Brooks's Law:</p>

            ${statement(`
                <strong>Adding manpower to a late software project makes it 
                later.</strong>
            `)}
        `,
        tags: [quoteTags.Estimation, quoteTags.Business],
        rating: Rating.Good,
    },
    {
        id: "put-the-managers-back-to-programming",
        chapter: 3,
        page: "30",
        content: html`
            <p>
                Programming managers have long recognized wide productivity
                variations between good programmers and poor ones. But the
                actual measured magnitudes have astounded all of us. In one of
                their studies, Sackman, Erikson, and Grant were measuring
                performances of a group of experienced programmers. Within just
                this group the ratios between best and worst performances
                averaged about 10:1 on productivity measurements and an amazing
                5:1 on program speed and space measurements! [...]
            </p>
            <p>
                I have earlier argued that the sheer number of minds to be
                coordinated affects the cost of the effort, for a major part of
                the cost is communication and correcting the ill effects of
                miscommunication (system debugging). This, too, suggests that
                one wants the system to be built by as few minds as possible.
                [...]
            </p>
            <p>
                The conclusion is simple: if a 200-man project has 25 managers
                who are the most competent and experienced programmers,
                <strong>
                    fire the 175 troops and put the managers back to
                    programming.
                </strong>
            </p>
        `,
        tags: [quoteTags.Business, quoteTags.Efficiency],
        rating: Rating.Good,
    },
    {
        id: "a-good-workman-is-known-by-his-tools",
        chapter: 12,
        page: "127",
        content: html`
            ${statement(`
                A good workman is known by his tools
            `)}
        `,
        tags: [quoteTags.Efficiency, quoteTags.Inspiring],
        rating: Rating.Interesting,
    },
    {
        id: "build-plenty-of-scaffolding",
        chapter: 13,
        page: "148",
        content: html`
            <p>
                Build plenty of scaffolding. By scaffolding I mean all programs
                and data built for debugging purposes but never intended to be
                in the final product. It is not unreasonable for there to be
                half as much code in scaffolding as there is in product.
            </p>
        `,
        tags: [quoteTags.CodingHabits],
        rating: Rating.Interesting,
    },
    {
        id: "great-designs-come-from-great-designers",
        chapter: 16,
        page: "202",
        content: html`
            <p>Great designs come from great designers. [...]</p>
            <p>
                No software organization can ignore this challenge.
                <strong>
                    Good managers, scarce though they be, are no scarcer than
                    good designers.
                </strong>
                Great designers and great managers are both very rare. Most
                organizations spend considerable effort in finding and
                cultivating the management prospects; I know of none that spends
                equal effort in finding and developing the great designers upon
                whom the technical excellence of the products will ultimately
                depend.
            </p>
            <p>
                <strong>
                    My first proposal is that each software organization must
                    determine and proclaim that great designers are as important
                    to its success as great managers are</strong
                >, and that they can be expected to be similarly nurtured and
                rewarded. Not only salary, but the perquisites of
                recognition—office size, furnishings, personal technical
                equipment, travel funds, staff support—must be fully equivalent.
            </p>
        `,
        tags: [quoteTags.Business, quoteTags.Team],
        rating: Rating.Good,
    },
    {
        id: "the-mythical-man-month-p276",
        chapter: 19,
        page: "276",
        content: html`
            <p>
                A major contribution during recent years has been DeMarco and
                Lister's 1987 book,
                <i>Peopleware: Productive Projects and Teams</i>. Its underlying
                thesis is that
                <q>
                    The major problems of our work are not so much
                    <i>technological</i> as <i>sociological</i> in nature.
                </q>
                It abounds with gems such as,
                <strong>
                    <q>
                        The manager's function is not to make people work, it is
                        to make it possible for people to work.
                    </q>
                </strong>
            </p>
        `,
        tags: [quoteTags.Team],
        rating: Rating.Good,
    },
];

function statement(text: string) {
    return `<p><i>${text}</i></p>`;
}
function figure(image: string, caption: string): string {
    return `
        <figure style="margin: 10px; flex: 1; min-width: 200px">
            <img src="${image}" alt="${caption}" style="display: block; margin: 10px auto" />
            <figcaption>${caption}</figcaption>
        </figure>
    `;
}
