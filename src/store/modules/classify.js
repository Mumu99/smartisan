/* eslint-disable */
import { reqClassify } from '@/api'

// 定义state
export const state = {
  classifyList: []
}

// 定义mutation
const mutations = {
  RECEIVE_REQ_CLASSIFY_LIST(state, classifyList) {
    state.classifyList = classifyList
  }
}
const actions = {
  async getClassifyList({ commit }) {
    const result = await reqClassify()
    const { code, data } = result
    console.log(data)
    if (code === 0) {
      commit('RECEIVE_REQ_CLASSIFY_LIST', data)
    }
  }
}
const getters = {
}
export default {
  state,
  mutations,
  actions,
  getters
}
