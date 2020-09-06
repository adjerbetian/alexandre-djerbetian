import { QuoteTagDBModel } from "./dbModel";

function asQuoteTags<T extends Record<string, string>>(
    tags: T
): { [K in keyof T]: QuoteTagDBModel } {
    return fromEntries(
        Object.keys(tags).map((name) => [
            name,
            { name, description: tags[name] },
        ])
    ) as any;
}
function fromEntries<T>(iterable: Array<[string, T]>): { [key: string]: T } {
    return [...iterable].reduce<{ [key: string]: T }>((obj, [key, val]) => {
        obj[key] = val;
        return obj;
    }, {});
}

// prettier-ignore
export const quoteTags = asQuoteTags({
    Abstraction: "quotes about the level of abstraction",
    Architecture: "quotes about the higher level structure of the code",
    Behaviour: "quotes about the personal behaviour of a developer",
    BadCode: "quotes about bad code and its consequences",
    Bugs: "quotes about bugs",
    Business: "quotes about things having a business impact",
    Clarity: "quotes about clarity of code",
    Code: "quotes containing code examples",
    CodingHabits: "quotes about coding habits a developer should or shouldn't have",
    Common: "quotes about common problems often met",
    Comparison: "quotes comparing coding to other works or real world examples",
    Definition: "quotes defining a word or a technique",
    Dependency: "quotes about dependencies and how to break them",
    Efficiency: "quotes about how to increase our efficiency",
    Estimation: "quotes about task estimation",
    Extraction: "quotes about extraction of a piece of code",
    ErrorHandling: "quotes about error handling",
    History: "quotes giving a historical perspective to something",
    Humor: "quotes told with humour",
    Inspiring: "quotes with general and inspiring statements",
    Interface: "quotes about design and use of interfaces",
    LongMethod: "quotes about long methods",
    Motivation: "quotes about what gives or crushes a developer's motivation",
    Naming: "quotes about good naming",
    OO: "quotes talking about object oriented techniques",
    Optimization: "quotes about optimization",
    Organisation: "quotes about a team or a day organisation",
    PairPrograming: "quotes about pair programming",
    PersonalHabits: "quotes about personal habits a developer should or shouldn't have",
    Pattern: "quotes about design patterns",
    Refactoring: "quotes about refactoring",
    Separation: "quotes about separation of concerns in code",
    Story: "quotes telling a story",
    TaskSeparation: "quotes about tasks separation to stay focused",
    Team: "quotes about working in a team",
    TechnologySpecific: "quotes with a technology specific part",
    TDD: "quotes about Test Driven Development",
    Tests: "quotes about tests"
});
