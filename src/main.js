import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import scss from "./assets/assets";

createApp(App).use(store).use(router).use(scss).mount("#app");
// createApp(App).use(store).use(router).mount("#app");
