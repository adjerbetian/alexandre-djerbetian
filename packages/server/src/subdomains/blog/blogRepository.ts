import { buildBlogArticle } from "@alex/entities";
import * as db from "@alex/db";
import { BlogRepository } from "./blog";
import { NotFound } from "../../utils";

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
