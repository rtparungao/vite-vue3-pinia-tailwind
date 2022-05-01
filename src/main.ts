import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import Tailwind CSS
import './index.css'

// import Pinia
import { createPinia } from 'pinia'


createApp(App)
.use(createPinia())
.use(router)
.mount('#app')
