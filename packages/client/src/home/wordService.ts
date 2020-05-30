let id = 0;

const WORDS = [
    "Design Patterns",
    "Clean Code",
    "Refactoring",
    "Domain Driven Design",
    "Clean Architecture",
    "TDD",
    "Extreme Programming",
    "Craftsmanship",
    "Agile",
    "DevOps"
];

interface Word {
    id: number;
    content: string;
    position: {
        left: boolean;
        y: number;
    };
}

export const words = {
    all: [] as Word[],
    addWord() {
        words.all.push(generateWord());
    },
    removeWord() {
        words.all.shift();
    }
};

function generateWord(): Word {
    return {
        id: id++,
        content: WORDS[id % WORDS.length],
        position: {
            left: Math.random() > 0.5,
            y: generateBetween(20, 60)
        }
    };
}
function generateBetween(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
