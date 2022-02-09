import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import 'corpjorge-bcs-sass/dist/css/bcs.css'
// import scss from "./assets/scss/custom-bcs-sass.scss";

createApp(App)
    .use(store)
    .use(router)
    // .use(scss)
    .mount("#app");

