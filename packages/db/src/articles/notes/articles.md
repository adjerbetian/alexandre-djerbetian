# Articles

## Javascript vs programmation orientée objet

Javascript n'est pas si différent d'un langage orienté objet.

On dit parfois que js est un langage fonctionnel. Mais ça n'apporte rien de plus. 
On pouvait aussi créer des objets "fonction" en java: un objet avec une méthode run.

La seule grande différence est que les méthodes privées des classes ne peuvent être héritées. Sinon, c'est pareil


## Engineers are not developers

Knowing how to write Clean code is not the same 
as solving problems. One needs both, and it would 
be wrong to assume that one is superior to the other.


## Do little commits

It forces you to finish what you started. As Kent Beck
was saying, you have two hats, finish wearing one hat
before wearing another. Make a commit in between.


## Pas de demi-mesure 

La demi-mesure fait croire que l'on résout les problèmes alors que l'on ne fait que différer leur constat et solution. 

Exemple : 

La clarté du code : 
- soit on fait un code propre pour être maintenable
- soit on fait un code pas maintenable parce qu'on sait que c'est un prototype que l'on va jeter
- dire que l'on fait un code clair quand on a le temps, c'est se retrouver avec un code pas maintenable à maintenir

La performance : idem

## On cherche des bons carreleurs, pas des ingénieurs aérospatiaux

## Never anticipate when coding

In short: the less I anticipate, the more my code has to be perfect at every reached stage, independently of what will come. The more I anticipate, the more I bet, and I'm not good at betting.

Details

I might be extreme, but I try to never anticipate when coding, the main reason being that I don't trust my own analysis.
This goes for the next line of code as for the next feature. For example, in TDD,
- I write one test at a time, never anticipating the next one
- when I work on passing a test, first I hack my own code, then I clean

That's because I know I don't write clean code first. When I try to, even on very simple tasks like writting tests, the result is often overly complex. Thomas can tell you about that 😁, he experienced this in Bordeaux, when some of his tests were too complex, simply because he wrote them all first.

My advice to Thomas was to go for the simplest possible code at every step of the way. Of course, that means there is a constant need for refactoring, as new features will need to dig their place in the code.
That also means being rigorous on code quality, as the code needs to be in a "perfect" state once a feature is done. Make a feature work is only a third of the work.
However, there should be no refactoring issues on github: refactoring is part of the feature cost. Like in professionnal cooking, keeping the table clean is part of cooking your new sauce, it's not a separate step.

It's hard to measure how much it costs to make constant refactoring vs anticipating. And it might depend on people. But not anticipating garantees one thing: I know that at every step of the way, the code is the best I could do, and I can stop. The roadmap can change, it's fine with me, as the code is designed for what is done, not what will come. That's partly how I understand the motto "Embrace change" in XP.

However, I do like to have a feature roadmap, just so I understand where I'm going. But it's more from a product point of view.

## Bold decisions are not collective.

From Nick:

> Hi again,
> Well, what I've witnessed over the years is that the mentality is a result of the actual accountability. When there is no KPI and no ownership, it's really hard to make decisions. When there is a KPI and ownership, everything becomes simple.
> 
> Bold decisions are not collective. They are made by single individuals who want to overperform and are willing to risk the downside of a mistake for the upside of overperformance. Groups can't.
> 
> I encourage you to go to Seb and point this all out to him.

## Quality comes at a price

https://trello.com/c/eWaRJgCu/53-having-only-one-reviewer-per-pr

> I see several people seem to agree with you, so I suppose my proposal is not popular :sweat_smile:. I'll still put my points here below in case this comes back later.
> 
> On my side, you can archive this :wink:. If I find it very disturbing later, I'll dig it up again.
> 
> ---
> 
> In short: **more controls always improve quality, but at what cost?**
> 
> ## More reviewers = better code
> 
> More point of views are always good for quality, but at what cost? If the cost does not matter, why only 2 reviewers and not 3 or 4?
> 
> We are used to 2, but some big project like TypeScript use one validation (see [here](https://github.com/microsoft/TypeScript/pull/40117), [here](https://github.com/microsoft/TypeScript/pull/40114), or [a bigger here](https://github.com/microsoft/TypeScript/pull/40002)).
> 
> I believe reducing the number of reviewers can increase the speed more than it can affect the code quality. It's a trade off.
> 
> I only propose we try. And you know I like clean code :wink:. If we see the code degrades, we revert, and we'll have a good reason to justify for **2** reviewers.
> 
> ## The cost
> 
> Let's take your number of 80% for example.
> 
> You say the first reviewer find 80% of the problems. We can assume that the 2nd reviewer find 80% of remaining problems. That means, the same amount of work by the second reviewer finds only 16% of the original problems. **That's 5 times less productive**... :joy: 
> 
> I know, you gave that number quickly, and this exercise is very simplified. But it's worth thinking. If the team improves, there will be less problems to detect, so the first reviewer will be more effective, and the second reviewer less.
> 
> Also, there is a side effect: we start being very intrusive. We comment on details because that's what's left, but maybe we would not if we were the only reviewer.
> 
> ## Examples of PRs
> 
> I took the example of [this PR](https://github.com/360Learning/platform/pull/1610) because it is not pleasant to read commit by commit as a second reviewer. I was lucky, it's a script, so I just read the whole diff. But this happens a lot on other PRs which are not scripts.
> 
> **The first reviewer always has a cleaner PR than the second one.**
> 
> Here is another example where [the PR](https://github.com/360Learning/platform/pull/1549) was not that clean for Solen, so [I advised Laure](https://github.com/360Learning/platform/pull/1549#pullrequestreview-458530612) to clean for her (although it ended up [causing trouble](https://github.com/360Learning/platform/pull/1549#issuecomment-667134072) :sweat_smile:).
> 
> ## About the choice of reviewer
> 
> If there is only one reviewer, then there is no need for a group in a review cycle. We could do 
> 
> - a list: A → B → C → D ... (A reviews B who reviews C etc.)
> - or pairs: A ↔ B, C ↔ D, etc.
> 
> The feedback would indeed be from 1 dev, but I think that's fine especially if we reduce the cycle length.
> 
> ## Junior dev
> 
> I'm not saying we should always have only 1 reviewer. Even now, some PRs have more than 2 reviewers for good reasons:
> 
> - because the dev is junior
> - because the code is complex, and we need experts (code owners or else)
> - because the debate is stuck and another opinion is required
> 
> My proposal is to make regular PRs be reviewed by 1 dev, but if a situation requires more dev, we do like today, we add them when appropriate.

## Duplication vs coupling

Inspiration: https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction

Coupling is more expensive than duplication. If two features look similar but are not, then duplicate the business logic, don't couple it

## Classes vs factories

Classes in JS are less pretty, less comfortable, and more dangerous.

Example:
- encourages inheritance
- cannot use hoisting
- ugly `this` keyword
- no real private methods

However, factories lose the `instanceof` operator.

## Delete bad tests

Bad tests are worse than no test.

Some people think it's better to keep bad tests, but no, bad tests should be deleted.

## Don't put business logic in the client code

This logic should not be in the client

```js
const moment = require("moment");
const datesLgUtils = require("lang/dates/utils");

export function computeDisplayedDueDate(step, pathUserTracking) {
    if (_.isUndefined(step.relativeDate)) { return ""; }

    const { unit, value } = step.relativeDate;
    if (pathUserTracking.enrollmentDate) {
        const dueDate = moment(pathUserTracking.enrollmentDate).add(value, unit);
        return User.getDateFormatter().formatWithAbbreviatedMonth(dueDate);
    } else {
        const fullUnits = datesLgUtils.getFullUnits({ quantity: value, unitType: unit });
        return `${value} ${fullUnits}`;
    }
}

export function buildPathDurationLabel({ duration, durationType } = {}) {
    if (! duration || ! durationType) { return ""; }

    const durationFullUnits = datesLgUtils.getFullUnits({ quantity: duration, unitType: durationType });
    return `${duration} ${durationFullUnits}`;
}
```
