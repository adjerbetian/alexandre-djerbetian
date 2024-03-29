import { HomePage } from "./home";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage,
        },
        redirection("/resume", "/resume/index.html"),
        {
            path: "/movies",
            name: "Movies",
            component: async () => import("./movies/MoviesPage.vue"),
        },
        {
            path: "/movies/:id",
            name: "Movie",
            component: async () => import("./movies/MoviePage.vue"),
        },
        {
            path: "/videos",
            name: "Videos",
            component: async () => import("./videos/VideosPage.vue"),
        },
        {
            path: "/books",
            name: "Books",
            component: async () => import("./books/BooksPage.vue"),
        },
        {
            path: "/books/:id",
            name: "Book",
            component: async () => import("./books/BookPage.vue"),
        },
        {
            path: "/quotes",
            name: "Quotes",
            component: async () => import("./quotes/QuotesPage.vue"),
        },
        {
            path: "/quotes/:id",
            name: "Quote",
            component: async () => import("./quotes/QuotePage.vue"),
        },
        {
            path: "/blog",
            name: "Blog",
            component: async () => import("./blog/BlogPage.vue"),
        },
        {
            path: "/blog/:id",
            name: "Blog article",
            component: async () => import("./blog/ArticlePage.vue"),
        },
    ],
});

export default router;

function redirection(alias: string, route: string) {
    return {
        path: alias,
        component: HomePage,
        beforeEnter() {
            window.location.href = route;
        },
    };
}
