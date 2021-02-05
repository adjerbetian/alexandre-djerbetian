import { asControllers } from "../../utils";
import { BlogUseCases } from "./blog";

export function buildBlogControllers(useCases: BlogUseCases) {
    return asControllers({
        getAllArticles(req, res) {
            res.json(useCases.getAllArticles());
        },
        getArticle(req, res) {
            res.json(useCases.getArticle(req.params.id));
        },
    });
}
