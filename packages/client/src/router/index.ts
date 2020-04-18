import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
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
        component: () => import("../views/Movies.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
