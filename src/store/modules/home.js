/* eslint-disable */
// 引入接口
import { reqHomeList } from '@/api'
const state = {
  homeList: []
}
const mutations = {
  RECEIVE_REQ_HOME_LIST(state, homeList) {
    state.homeList = homeList
  }
}
const actions = {
  async getHomeList({ commit }) {
    const result = await reqHomeList()
    const { code, data } = result
    if (code === 0) {
      commit('RECEIVE_REQ_HOME_LIST', data)
    }
  }
}
const getters = {
  // 轮播图
  banner(state) {
    const bannerList = state.homeList[0]
    return bannerList ? bannerList : {}
  },
  // 中间五个不知道啥
  entryCenter(state) {
    const entryCenter = state.homeList[1]
    return entryCenter ? entryCenter : {}
  },
  // oneColumn
  oneColumn(state) {
    const oneColumn = state.homeList[2]
    return oneColumn ? oneColumn : {}
  },
  // fourPalace
  fourPalace(state) {
    const fourPalace = state.homeList[3]
    return fourPalace ? fourPalace : {}
  },
  // fourPalace
  goodsRow(state) {
    const goodsRow = state.homeList[4]
    return goodsRow ? goodsRow : {}
  },
  // fourPalace
  goodsRow2(state) {
    const goodsRow2 = state.homeList[5]
    return goodsRow2 ? goodsRow2 : {}
  },
  // fourPalace
  goodsRow3(state) {
    const goodsRow3 = state.homeList[6]
    return goodsRow3 ? goodsRow3 : {}
  },
  // fourPalace
  goodsRow4(state) {
    const goodsRow4 = state.homeList[7]
    return goodsRow4 ? goodsRow4 : {}
  },
  // fourPalace
  twoColumn(state) {
    const twoColumn = state.homeList[8]
    return twoColumn ? twoColumn : {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
