/* eslint-disable */
// 引入接口
import { reqHotWords, reqSuggest, reqSearchId, reqSearchProduct } from '@/api'
const state = {
  hot: {},
  suggestList: [],
  searchIds: [],
  searchProductList: []
}
const mutations = {
  RECEIVE_HOT(state, hot) {
    state.hot = hot
  },
  RECEIVE_SUGGEST_LIST(state, suggestList) {
    state.suggestList = suggestList
  },
  RECEIVE_SEARCH_IDS(state, searchIds) {
    state.searchIds = searchIds
  },
  RECEIVE_SEARCH_PROCUET_LIST(state, searchProductList) {
    state.searchProductList = searchProductList
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
  },
  async getSearchIds({ commit }, SearchObj) {
    const result = await reqSearchId(SearchObj)
    commit('RECEIVE_SEARCH_IDS', result.data.spu)
  },
  async getSearchProductList({ commit }, ids) {
    const result = await reqSearchProduct(ids)
    commit('RECEIVE_SEARCH_PROCUET_LIST', result.data.list.reverse())
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
