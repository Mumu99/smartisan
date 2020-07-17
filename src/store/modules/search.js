/* eslint-disable */
// 引入接口
import {
  reqHotWords,
  reqSuggest,
  reqSearchId,
  reqSearchProduct,
  reqProductList
} from '@/api'
const state = {
  hot: {},
  suggestList: [],
  searchIds: [],
  searchProductList: [],
  productList: []
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
  },
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList
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
  },
  async getProductList({ commit }, productObj) {
    const result = await reqProductList(productObj)
    if (result.data.list.length > 0) {
      commit('RECEIVE_PRODUCT_LIST', result.data.list)
    } else {
      // 手动返回错误
      return Promise.reject()
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}
