import axios from "axios";
import { createApp } from "vue";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/js/bootstrap.min.js";

createApp(App).use(router).use(VueAxios, axios).mount("#app");
