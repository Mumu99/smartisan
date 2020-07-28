/* eslint-disable */
// 引入接口
import { reqSeckTime, reqSeckTimeWait } from '@/api'
const state = {
  seckTimeList: [],
  seckTimeWaitList: []
}
const mutations = {
  RECEIVE_REQ_SECK_TIME_LIST(state, seckTimeList) {
    state.seckTimeList = seckTimeList
  },
  RECEIVE_REQ_SECK_TIME_WAIT_LIST(state, seckTimeWaitList) {
    state.seckTimeWaitList = seckTimeWaitList
  }
}
const actions = {
  async getSeckTime({ commit }, { page, pageSize }) {
    const result = await reqSeckTime({ page, pageSize })
    const { code, data } = result
    if (code === 0) {
      commit('RECEIVE_REQ_SECK_TIME_LIST', data)
    }
  },
  async getSeckTimeWait({ commit }, { page, pageSize }) {
    const result = await reqSeckTimeWait({ page, pageSize })
    const { code, data } = result
    if (code === 0) {
      commit('RECEIVE_REQ_SECK_TIME_WAIT_LIST', data)
    }
  }
}
const getters = {
  seckTime(state) {
    const seckTime = state.seckTimeList.seckilTime
    return seckTime ? seckTime : []
  },
  seckSkuInfo(state) {
    const seckSkuInfo = state.seckTimeList.skuInfo
    return seckSkuInfo ? seckSkuInfo : []
  },
  seckTimeWait(state) {
    const seckTimeWait = state.seckTimeWaitList.seckilTime
    return seckTimeWait ? seckTimeWait : []
  },
  seckSkuInfoWait(state) {
    const seckSkuInfoWait = state.seckTimeWaitList.skuInfo
    return seckSkuInfoWait ? seckSkuInfoWait : []
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
