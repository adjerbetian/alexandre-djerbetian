import { api } from "@/utils";
import type { BlogArticleDTO } from "@alex/entities";
import { buildBlogArticle } from "@alex/entities";

export const blogService = {
    async fetchAllArticles(): Promise<BlogArticleDTO[]> {
        const dtos: BlogArticleDTO[] = await api.get("/blog/articles");
        return dtos.map(buildBlogArticle);
    },
    async fetchArticle(id: string): Promise<BlogArticleDTO> {
        return buildBlogArticle(await api.get(`/blog/articles/${id}`));
    },
};
