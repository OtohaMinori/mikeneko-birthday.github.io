import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import mitt from "mitt";
import i18n from "./i18n";

// icons
import OhVueIcon from "./utils/iconImport";

// v-viewer
import "viewerjs/dist/viewer.css";
import VueViewer from "v-viewer";

import "./assets/css/main.scss";
import "./assets/css/color.scss";
import "./assets/css/transition.scss";

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.$emitter = emitter;

app
  .use(router)
  .use(i18n)
  .use(VueViewer)
  .component("v-icon", OhVueIcon)
  .mount("#app");
