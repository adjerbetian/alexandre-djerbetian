import marked from "marked";

export function parseInlineText(text: string) {
    const renderer = new marked.Renderer();
    renderer.paragraph = (value) => value;
    return marked(text, { renderer });
}
export function parseText(text: string) {
    return marked(text);
}
