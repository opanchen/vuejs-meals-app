import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'
import { key } from './store'

import './style.css'

createApp(App).use(router).use(store, key).mount('#app')
