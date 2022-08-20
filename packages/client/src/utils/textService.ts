import { marked } from "marked";

export const textService = {
    parseInlineText(text: string) {
        const renderer = new marked.Renderer();
        renderer.paragraph = (value) => value;
        return marked(text, { renderer });
    },
    parseText(text: string) {
        return marked(text);
    },
};
