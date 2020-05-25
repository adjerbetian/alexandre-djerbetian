export interface VideoDBModel {
    title: string;
    youtubeId: string;
    year: number;
    speaker: string;
    comments?: string;
    moments?: Array<{
        time: string;
        content: string;
    }>;
}

export const videos: VideoDBModel[] = [
    {
        title: "Clean Architecture",
        youtubeId: "o_TH-Y78tt4",
        year: 2015,
        speaker: "Uncle Bob (R. Martin)",
        comments: `
            This is the best *Clean Architecture* video of Uncle Bob (he has several). It's funny, and goes
            straight to the point
        `,
        moments: [
            {
                time: "10m35s",
                content: "where the architecture part starts"
            },
            {
                time: "27m30s",
                content: "what about MVC"
            },
            {
                time: "42m45s",
                content: "what about the database"
            },
            {
                time: "57m10s",
                content: `**discussion about tests**`
            }
        ]
    },
    {
        title: "Workflows of Refactoring",
        youtubeId: "vqEg37e4Mkw",
        year: 2014,
        speaker: "Martin Fowler"
    },
    {
        title: "Composition vs Inheritance",
        youtubeId: "wfMtDGfHWpA",
        year: 2015,
        speaker: "Fun Fun Function"
    },
    {
        title: "Making Architecture Matter",
        youtubeId: "DngAZyWMGR0",
        year: 2015,
        speaker: "Martin Fowler",
        moments: [
            {
                time: "7m41s",
                content: "quality vs features or craftsmanship vs economics"
            },
            {
                time: "10m56s",
                content: "functionality over time depending on architecture"
            }
        ]
    },
    {
        title: "The Many Meanings of Event-Driven Architecture",
        youtubeId: "STKCRSUsyP0",
        year: 2017,
        speaker: "Martin Fowler",
        moments: [
            {
                time: "3m18s",
                content: "**1 - *Events as notifications***"
            },
            {
                time: "8m43s",
                content:
                    "*events or commands*: a nice discussion about the definitions or events"
            },
            {
                time: "14m55s",
                content: "**2 - *Event-carried State Transfer***"
            },
            {
                time: "20m53s",
                content: "**3 - *Event Sourcing***"
            },
            {
                time: "43m35s",
                content: "**4 - *CQRS***"
            }
        ]
    },
    {
        title: "Power Use of Value Objects in Domain Driven Design",
        youtubeId: "vh-LT1mkIz4",
        year: 2010,
        speaker: "Dan Bergh Johnsson",
        comments: `
            Great video about *Value Objects* where Dan Bergh Johnsson refactors
            a big chunk of code only with Value Object.
            
            Very practical. 
        `
    },
    {
        title: "3X",
        youtubeId: "YX2XR73LnRY",
        year: 2016,
        speaker: "Kent Beck",
        comments: `
            This is not so much about coding as it is about product management. In this video Kent Beck explains his
            understanding of a life of a company, from the beginnings as a startup to the success like Facebook.
            Kent Beck also puts into question his own Extreme Programming theory which he says only applies to a
            certain stage of a company life.
        `
    },
    {
        title: "Refactoring: Second Edition",
        youtubeId: "gcSh-yXaXVs",
        year: 2019,
        speaker: "Martin Fowler",
        comments: `
            The video is not interesting as a whole, but some passage are worth listeting at, especially if you
            didn't read the refactoring book.
        `,
        moments: [
            {
                time: "20m50s",
                content: "Performance vs Refactoring (until 23m18s)"
            },
            {
                time: "32m00s",
                content: "Continuous integration"
            },
            {
                time: "36m38s",
                content: "How to justify refactoring to business people"
            }
        ]
    },
    {
        title: "Programmation fonctionnelle",
        youtubeId: "IQ1kDpGeoCk",
        year: 2017,
        speaker: "Xavier Detant"
    },
    {
        title: "What Does Tech Excellence Look Like?",
        youtubeId: "Avs70dZ3Vlk",
        year: 2016,
        speaker: "Martin Fowler"
    },
    {
        title: "Agile Product Ownership",
        youtubeId: "502ILHjX9EE",
        year: 2012,
        speaker: "Henrik Kniberg"
    },
    {
        title: "Introduction to Scrum",
        youtubeId: "9TycLR0TqFA",
        year: 2014,
        speaker: "Uzility"
    },
    {
        title: "Object-oriented Programming in 7 minutes",
        youtubeId: "pTB0EiLXUC8",
        year: 2018,
        speaker: "Mosh Hamedani"
    }
];
