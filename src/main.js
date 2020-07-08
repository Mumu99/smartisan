import Vue from 'vue'
import 'amfe-flexible' // rem适配
import App from './App'
import router from './router'
import './style/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
