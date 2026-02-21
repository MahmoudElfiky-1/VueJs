import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
// Creating the app
const app = createApp(App);
// Registering the router (or any other plugins)
app.use(router);
// Mounting the app
app.mount('#app')
