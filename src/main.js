import Vue from 'vue'
import App from './App.vue'
import './form'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
