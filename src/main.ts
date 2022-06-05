import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./index.css"
import { FontAwesome } from "@/plugins/fontawesome"

createApp(App).use(router).component("fa", FontAwesome).mount("#app")
