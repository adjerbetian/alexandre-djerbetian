import { QuoteDBModel } from "../dbModel";
import { quoteTags } from "../quoteTags";

export const chapters = ["Introduction", "La démarche DevOps enfin expliquée"];

export const quotes: QuoteDBModel[] = [
    {
        chapter: 1,
        page: "9",
        id: "decouvrir-devops-p9",
        content: `
            ### Automatiser n'est pas optimiser
            
            ...
            
            Il est pourtant vrai que l'inconscient collectif associe facilement l'automatisation et les
            automates à l'industrie et donc à une certaine forme d'optimisation. Une démarche DevOps évite
            ce type de préjugés. Lorsque nous automatisons une collaboration, nous ne nous embarrassons pas
            de savoir si elle est optimale et industrialisable, nous nous contentons de nous assurer qu'elle
            fonctionne.
        `,
        tags: [quoteTags.Optimization],
        rating: 1
    }
];
