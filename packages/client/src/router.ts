import Vue from "vue";
import VueRouter from "vue-router";
import { HomePage } from "./home";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomePage
        },
        redirection("/resume", "/resume/"),
        redirection(
            "/github",
            "https://github.com/adjerbetian/alexandre-djerbetian"
        ),
        {
            path: "/movies",
            name: "Movies",
            component: () => import("./movies/MoviesPage.vue")
        },
        {
            path: "/movies/:id",
            name: "Movie",
            component: () => import("./movies/MoviePage.vue")
        },
        {
            path: "/videos",
            name: "Videos",
            component: () => import("./videos/VideosPage.vue")
        },
        {
            path: "/books",
            name: "Books",
            component: () => import("./books/BooksPage.vue")
        },
        {
            path: "/books/:id",
            name: "Book",
            component: () => import("./books/BookPage.vue")
        },
        {
            path: "/quotes",
            name: "Quotes",
            component: () => import("./quotes/QuotesPage.vue")
        },
        {
            path: "/quotes/:id",
            name: "Quote",
            component: () => import("./quotes/QuotePage.vue")
        }
    ]
});

export default router;

function redirection(alias: string, route: string) {
    return {
        path: alias,
        beforeEnter() {
            window.location.href = route;
        }
    };
}
