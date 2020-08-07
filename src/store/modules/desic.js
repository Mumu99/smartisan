/* eslint-disable */
// 引入接口
import { reqGetDesicBanner, reqGetUserText } from '@/api'

const state = {
  spuDesic: [],
  userText: []
}

const mutations = {
  RECEIVE_REQ_GETDESIC_BANNER(state, spuDesic) {
    state.spuDesic = spuDesic
  },
  RECEIVE_REQ_GETUSERTEXT(state, userText) {
    state.userText = userText
  }
}

const actions = {
  async getSpuDesic({ commit }, ids) {
    const result = await reqGetDesicBanner(ids)
    const { code, data } = result
    if (code === 0) {
      commit('RECEIVE_REQ_GETDESIC_BANNER', data.list[0])
    }
  },
  async getUserText({ commit }, ids) {
    const result = await reqGetUserText(ids)
    commit('RECEIVE_REQ_GETUSERTEXT', result.data.list)
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
