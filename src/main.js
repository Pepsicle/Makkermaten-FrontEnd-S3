import 'bootstrap/dist/css/bootstrap.min.css'

// import { createApp } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueRouter from './router'

// createApp(App).mount('#app')

createApp(App).use(router).mount('#app')