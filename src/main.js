import Vue from 'vue'
import 'amfe-flexible' // rem适配
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import store from './store'
import './style/reset.css'
import * as API from './api'
Vue.prototype.$API = API
Vue.prototype.$bus = new Vue()

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
