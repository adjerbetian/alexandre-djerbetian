export async function sleep(ms: number) {
    await new Promise((resolve) => setTimeout(resolve, ms));
}

export function trimCommonIndentation(text: string): string {
    let lines = text.split("\n");
    removeEmptyLines();
    removeCommonIndentation();
    trimEndOfLines();
    return lines.join("\n");

    function removeEmptyLines(): void {
        lines = lines.filter((line) => !/^\s*$/.test(line));
    }

    function removeCommonIndentation(): void {
        const indentation = computeCommonIndentation();
        lines = lines.map((line) => line.substring(indentation));
    }

    function computeCommonIndentation(): number {
        const lineIndentations = lines.map((line) => line.search(/\S|$/));
        return Math.min(...lineIndentations);
    }

    function trimEndOfLines(): void {
        lines = lines.map((line) => line.replace(/\s+$/, ""));
    }
}
