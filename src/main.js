import { createApp } from 'vue'
import App from './App.vue'
import  VueEditor  from  "vue3-editor"
import router from '../router'
import store from '../store'


import './index.css'
import 'flowbite';


createApp(App)
    .use(router)
    .use(store)
    .use(VueEditor)
    .mount('#app')
