import type { BlogArticle } from "@alex/entities";

export function buildBlogUseCases({ blogRepository }: Dependencies) {
    return {
        getAllArticles(): BlogArticle[] {
            return blogRepository.fetchAllArticles();
        },
        getArticle(id: string) {
            return blogRepository.fetchArticle(id);
        },
    };
}

export type BlogUseCases = ReturnType<typeof buildBlogUseCases>;
interface Dependencies {
    blogRepository: BlogRepository;
}
export interface BlogRepository {
    fetchAllArticles(): BlogArticle[];
    fetchArticle(id: string): BlogArticle;
}
