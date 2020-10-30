import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";

// import CSS
import "@/scss/index.scss"

// Import icon from Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlus)
library.add(faEdit)
library.add(faTrashAlt)

// Custom message
import registryCustomMessage from "@C/CustomMessage";
Vue.use(registryCustomMessage);

Vue.component('aw-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
