import Vue from 'vue'
import 'amfe-flexible' // rem适配
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import style
import 'swiper/dist/css/swiper.css'
import App from './App'
import router from './router'
import './style/reset.css'

Vue.use(VueAwesomeSwiper /* { default options with global component } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
