import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./includes/i18n";
import "../public/assets/css/main.css";

const app = createApp(App);
// Router
app.use(router);
// I18N
app.use(i18n);
app.mount("#app");
