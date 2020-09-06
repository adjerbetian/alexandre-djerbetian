let counter = 0;

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
    "DevOps",
];

interface Word {
    id: number;
    content: string;
    position: {
        right: boolean;
        y: number;
    };
}
interface Position {
    right: boolean;
    yMin: number;
    yMax: number;
}

export const words = {
    all: [] as Word[],
    addWord({ right, yMin, yMax }: Position) {
        const id = counter++;
        words.all.push({
            id,
            position: {
                right,
                y: generateBetween(yMin, yMax, {
                    excludes: words.all.map((w) => w.position.y),
                    distance: 6,
                }),
            },
            content: WORDS[counter % WORDS.length],
        });
    },
    removeWord() {
        words.all.shift();
    },
};

function generateBetween(
    min: number,
    max: number,
    { excludes, distance }: { excludes: number[]; distance: number }
) {
    let result: number;
    let n = 0;
    do {
        result = Math.random() * (max - min) + min;
        n++;
    } while (n < 10 && excludes.some((v) => d(v, result) < distance));
    return result;
}
function d(a: number, b: number) {
    return Math.abs(a - b);
}
