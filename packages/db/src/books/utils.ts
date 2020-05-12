import { µ } from "@alex/micro";

export function java(content: string) {
    return code("java", content);
}

export function code(lang: string, content: string) {
    // prettier-ignore
    return `
        <pre><code class="langage-${lang}">${µ.trimCommonIndentation(content)}</code></pre>
    `;
}
