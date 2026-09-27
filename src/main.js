import "./assets/main.css";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { onsiteUrlService } from "@/dependencies/csh-libs.js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

const appCurrentVersion = APP_VERSION;

const baseUrl = import.meta.env.VITE_API_BASE_URL;

app.config.globalProperties.appCurrentVersion = appCurrentVersion;
app.config.globalProperties.baseUrl = baseUrl;

app.provide("appCurrentVersion", appCurrentVersion);
app.provide("baseUrl", baseUrl);

app.mount("#app");
