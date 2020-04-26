import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/pages/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/resume",
            beforeEnter() {
                window.location.href = "https://drive.google.com/open?id=1XrMLYQ3-6v9i2ezMk6KeM0oBNfYDDiAN";
            }
        },
        {
            path: "/movies",
            name: "Movies",
            component: () => import("./views/pages/Movies.vue")
        },
        {
            path: "/movies/:id",
            name: "Movie",
            component: () => import("./views/pages/Movie.vue")
        },
        {
            path: "/videos",
            name: "Videos",
            component: () => import("./views/pages/Videos.vue")
        }
    ]
});

export default router;
