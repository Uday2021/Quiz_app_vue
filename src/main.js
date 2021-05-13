import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueRouter from 'vue-router'
 import App from './App.vue'
import signUp from './components/signUp'
import Home from './components/Home'
Vue.use(VueRouter);
Vue.use(BootstrapVue);
const routes = [
  {path: '/app', name: 'Home',component:Home},
 {path: '/', name: 'SignUp',component:signUp},
]

const router = new VueRouter({
  mode: "history",
  routes
})

Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
