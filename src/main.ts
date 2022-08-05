import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import mitt from "mitt";
import './assets/main.css'

const Mitt = mitt()
const app = createApp(App)
declare module 'vue'{
    export interface ComponentCustomProperties{
        $Bus:typeof Mitt
    }
}
app.config.globalProperties.$Bus = Mitt
app.use(createPinia())
app.use(router)

app.mount('#app')
