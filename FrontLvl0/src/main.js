import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router.js"; // Importer le router

createApp(App).use(router).mount("#app");
