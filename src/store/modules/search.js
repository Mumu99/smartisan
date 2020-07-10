/* eslint-disable */
// 引入接口
import { reqHotWords, reqSuggest } from '@/api'
const state = {
  hot: {},
  suggestList: []
}
const mutations = {
  RECEIVE_HOT(state, hot) {
    state.hot = hot
  },
  RECEIVE_SUGGEST_LIST(state, suggestList) {
    state.suggestList = suggestList
  }
}
const actions = {
  async getHot({ commit }) {
    const result = await reqHotWords()
    commit('RECEIVE_HOT', result)
  },
  async getSuggestList({ commit }, keyWord) {
    const result = await reqSuggest(keyWord)
    commit('RECEIVE_SUGGEST_LIST', result.data)
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
