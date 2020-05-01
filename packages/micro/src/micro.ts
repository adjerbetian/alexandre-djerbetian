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
