import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);

import {
    faArrowCircleDown,
    faCode,
    faPencilAlt,
    faBook,
    faComment,
    faFilm,
    faFile,
    faHeart as fullHeart,
    faLink
} from "@fortawesome/free-solid-svg-icons";
import {
    faUser,
    faHeart as emptyHeart
} from "@fortawesome/free-regular-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

library.add(
    faArrowCircleDown,
    faCode,
    faPencilAlt,
    faBook,
    faComment,
    faFilm,
    faFile,
    faUser,
    faYoutube,
    fullHeart,
    emptyHeart,
    faLink
);
