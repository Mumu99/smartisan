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
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading:
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1596448412120&di=8cd6bfedd60f1f5bc1df805a086dbfed&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1074403210%2C1180757006%26fm%3D214%26gp%3D0.jpg'
})
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
