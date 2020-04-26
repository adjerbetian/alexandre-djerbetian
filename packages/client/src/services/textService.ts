import marked from "marked";

export function parseText(text: string) {
    const renderer = new marked.Renderer();
    renderer.paragraph = (value) => value;
    return marked(text, { renderer });
}
