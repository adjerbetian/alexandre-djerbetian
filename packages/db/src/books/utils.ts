import { µ } from "@alex/micro";

export function java(content: string) {
    return code("java", content);
}
export function cpp(content: string) {
    return code("cpp", content);
}
export function javascript(content: string) {
    return code("javascript", content);
}

function code(lang: string, content: string) {
    // prettier-ignore
    return `
        <pre><code class="langage-${lang}">${µ.trimCommonIndentation(content)}</code></pre>
    `;
}
