import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
// 引入mutations
import mutations from './mutations'
// 引入actions
import actions from './actions'
// 引入getters
import getters from './getters'
// 引入modules
import modules from './modules'
Vue.use(Vuex)
export default new Vuex.Store({
  state, // 总的state
  mutations, // 总的mutations
  actions, // 总的actions
  getters, // 总的getters
  modules
})
