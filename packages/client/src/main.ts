import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faArrowCircleDown,
    faCode,
    faPencilAlt,
    faBook,
    faComment,
    faFilm,
    faFile
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faArrowCircleDown, faCode, faPencilAlt, faBook, faComment, faFilm, faFile, faUser, faYoutube);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import "./assets/styles/styles.scss";

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App)
}).$mount("#app");
