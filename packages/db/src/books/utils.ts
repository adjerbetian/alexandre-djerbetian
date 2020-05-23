import { µ } from "@alex/micro";
import hljs from "highlight.js";

export function java(content: string) {
    return code(content, "java");
}
export function cpp(content: string) {
    return code(content, "cpp");
}
export function javascript(content: string) {
    return code(content, "javascript");
}

function code(content: string, lang: string) {
    content = colorize(µ.trimCommonIndentation(content), lang);
    return `<pre class="code light"><code class="hljs language-${lang}">${content}</code></pre>`;
}
function colorize(content: string, lang: string) {
    return hljs.highlight(lang, content).value;
}
