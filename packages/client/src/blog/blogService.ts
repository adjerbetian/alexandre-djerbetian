import { BlogArticleDTO, buildBlogArticle } from "@alex/entities";
import { api } from "@/utils";

export const blogService = {
    async fetchAllArticles(): Promise<BlogArticleDTO[]> {
        const dtos: BlogArticleDTO[] = await api.get("/blog/articles");
        return dtos.map(buildBlogArticle);
    },
    async fetchArticle(id: string): Promise<BlogArticleDTO> {
        return buildBlogArticle(await api.get(`/blog/articles/${id}`));
    },
};
