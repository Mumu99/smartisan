/* eslint-disable */
// 引入接口
import { reqLike } from '@/api'
const state = {
  skuInfo: []
}
const mutations = {
  RECEIVE_REQ_Like(state, skuInfo) {
    state.skuInfo = skuInfo
  }
}
const actions = {
  async getSkuInfo({ commit }, { page, pageSize }) {
    const result = await reqLike(page, pageSize)
    const { code, data } = result
    if (code === 0) {
      commit('RECEIVE_REQ_Like', data.skuInfo)
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
