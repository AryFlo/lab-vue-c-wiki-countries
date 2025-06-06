
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css"; // Bootstrap import

createApp(App).use(router).mount("#app");
