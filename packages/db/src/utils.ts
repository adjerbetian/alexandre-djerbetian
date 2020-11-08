import { µ } from "@alex/micro";
import hljs from "highlight.js";

export function titled(content: string, title: string) {
    return `<span style="${styles()}" title="${title}">${content}</span>`;

    function styles() {
        return joinStyles({
            "border-bottom": "#000 dotted 1px",
            cursor: "help",
        });
    }
}
export function joinStyles(styles: Record<string, string>) {
    return Object.entries(styles)
        .map(([key, value]) => `${key}: ${value}`)
        .join(";");
}

export function java(content: string) {
    return code(content, "java");
}
export function cpp(content: string) {
    return code(content, "cpp");
}
export function javascript(content: string) {
    return code(content, "javascript");
}
export function markdown(content: string) {
    return code(content, "markdown");
}

function code(content: string, lang: string) {
    content = boldify(colorize(µ.trimCommonIndentation(content), lang));
    return `<pre class="code light"><code class="hljs language-${lang}">${content}</code></pre>`;
}
function colorize(content: string, lang: string) {
    return hljs.highlight(lang, content).value;
}

export function boldify(text: string) {
    const OPENING_BOLD_TAG = "**";
    const CLOSING_BOLD_TAG = "**";

    while (hasFullTag()) {
        text = text.replace(OPENING_BOLD_TAG, "<b>");
        text = text.replace(CLOSING_BOLD_TAG, "</b>");
    }
    return text;

    function hasFullTag() {
        const openingIndex = text.indexOf(OPENING_BOLD_TAG);
        const closingIndex = text
            .substring(openingIndex + OPENING_BOLD_TAG.length)
            .indexOf(CLOSING_BOLD_TAG);
        return closingIndex !== -1;
    }
}
