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
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594613518459&di=d527124bb1272fa7dbd4a35e2261e1dd&imgtype=0&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D2156842542%2C1672235038%26fm%3D214%26gp%3D0.jpg'
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
