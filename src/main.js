import {
    createApp
} from 'vue'
import App from './App.vue'
// import bootstrap css
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

let mainApp = createApp(App)
mainApp.mount('#app')