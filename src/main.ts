import { createApp } from 'vue'
import route from './routes'
import './style.css'
import App from './App.vue'

createApp(App)
.use(route)
.mount('#app')
