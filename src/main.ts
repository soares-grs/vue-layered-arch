import "./ui/assets/index.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./application/App.vue";
import router from "./infrastructure/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
