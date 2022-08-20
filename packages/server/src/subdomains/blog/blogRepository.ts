import { NotFound } from "../../utils";
import { BlogRepository } from "./blog";
import * as db from "@alex/db";
import { buildBlogArticle } from "@alex/entities";

export const blogRepository: BlogRepository = {
    fetchAllArticles() {
        return db.articles.map(buildBlogArticle);
    },
    fetchArticle(id) {
        const dto = db.articles.find((element) => element.id === id);
        if (!dto) throw new NotFound(id);
        return buildBlogArticle(dto);
    },
};
