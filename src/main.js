import { createApp } from 'vue'
import './style.css'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import App from './App.vue'
import {router} from './routes/routes.js'
import 'leaflet/dist/leaflet.css';



const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {},
})
 myApp.use(router)
myApp.mount('#app')