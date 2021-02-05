import { blogRepository } from "./blogRepository";
import { buildBlogControllers } from "./blogControllers";
import { buildBlogUseCases } from "./blog";

const blogUseCases = buildBlogUseCases({ blogRepository });
export const blogControllers = buildBlogControllers(blogUseCases);
