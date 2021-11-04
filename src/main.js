import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@arcgis/core/assets/esri/themes/dark/main.css'

createApp(App).use(store).use(router).mount('#app')
