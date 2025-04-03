import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Tag from "primevue/tag";
import "primevue/resources/themes/lara-light-blue/theme.css"; // Ensure theme is included
import "primevue/resources/primevue.min.css"; // PrimeVue core styles
import "primeicons/primeicons.css";

const app = createApp(App);
const pinia = createPinia();
app.use(router);
app.use(pinia);
app.use(PrimeVue);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("InputText", InputText);
app.component("Tag", Tag);
app.mount("#app");
