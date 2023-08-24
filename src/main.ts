import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia()
import router from './router/index'

createApp(App).use(router).use(pinia).mount('#app')
