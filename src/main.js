import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import assets from "./assets/assets";

createApp(App)
    .use(store)
    .use(router)
    // .use(assets)
    .mount("#app");
