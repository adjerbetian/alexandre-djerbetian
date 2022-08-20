export async function sleep(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

export function trimCommonIndentation(text: string): string {
    let lines = text.split("\n");
    trimEmptyLines();
    removeCommonIndentation();
    trimEndOfLines();
    return lines.join("\n");

    function trimEmptyLines(): void {
        while (isEmpty(lines[0])) lines.shift();
        while (isEmpty(last(lines))) lines.pop();
    }
    function removeCommonIndentation(): void {
        const indentation = computeCommonIndentation();
        lines = lines.map((line) => line.substring(indentation));
    }
    function computeCommonIndentation(): number {
        const lineIndentations = lines
            .filter((line) => !isEmpty(line))
            .map((line) => line.search(/\S|$/));
        return Math.min(...lineIndentations);
    }
    function trimEndOfLines(): void {
        lines = lines.map((line) => line.replace(/\s+$/, ""));
    }
}
function isEmpty(line: string) {
    return /^\s*$/.test(line);
}

export function last<T>(array: T[]): T {
    return array[array.length - 1];
}

export function buildPromiseObserver(
    promise: Promise<any> | (() => Promise<any>)
): Promise<any> & { isDone(): boolean } {
    const realPromise = typeof promise === "function" ? promise() : promise;
    let done = false;
    return Object.assign(
        realPromise.then(() => (done = true)),
        {
            isDone() {
                return done;
            },
        }
    );
}

export async function pAll<T, U>(
    array: T[],
    callback: (value: T, index: number) => Promise<U>
) {
    return Promise.all(array.map(callback));
}

export function toArray<T>(query: T | (T | null)[] | null | undefined): T[] {
    if (!query) return [];
    if (!Array.isArray(query)) return [query];

    return query.filter((q): q is T => !!q);
}

export class TooManyRetries extends Error {
    constructor(public errors: Error[]) {
        super();
    }
}
export async function retry<T>(
    f: () => Promise<T>,
    { max = 100, delay = 0 }: { max?: number; delay?: number } = {}
): Promise<T> {
    const errors: Error[] = [];
    while (errors.length < max) {
        try {
            return await f();
        } catch (err) {
            if (!(err instanceof Error))
                // eslint-disable-next-line no-ex-assign
                err = new Error(`Unknown error: ${err}`);
            errors.push(err as Error);
            await sleep(delay);
            console.log("retrying");
        }
    }
    throw new TooManyRetries(errors);
}

export function startInterval(f: (...args: any[]) => any, time: number) {
    let stop = false;
    void (async function execute() {
        if (stop) return;
        await f();
        setTimeout(execute, time);
    })();

    return {
        stop() {
            stop = true;
        },
    };
}
