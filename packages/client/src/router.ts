import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";

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
            component: () => import("./views/Movies.vue")
        }
    ]
});

export default router;
