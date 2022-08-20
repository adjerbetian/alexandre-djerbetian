import App from "./App.vue";
import "./assets/icons";
import "./assets/styles/styles.scss";
import router from "./router";
import { createApp } from "vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
