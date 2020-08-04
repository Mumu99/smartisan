<template>
  <Sticky style="position: relative;
    z-index: 2;">
    <div class="header">
      <router-link
        to="/home"
        class="nav-back"
      >
        &lt; 返回
      </router-link>
      <h2 class="van-ellipsis">Smartisan 真无线TWS蓝牙耳机</h2>
    </div>
    <div class="select van-hairline--top-bottom">
      <div
        class="item van-hairline--surround"
        :class="{ active: iindex === index }"
        v-for="(item, index) in itemList"
        :key="item"
        @click="showActive(index)"
      >
        {{ item }}
      </div>
    </div>
  </Sticky>
</template>

<script>
import { Sticky } from 'vant'
export default {
  name: 'Header',
  components: {
    // 注册组件
    Sticky
  },
  props: ['currentIndex'],
  data () {
    return {
      itemList: ['商品', '评价', '详情', '推荐'],
      iindex: 0
    }
  },
  methods: {
    showActive (index) {
      if (this.iindex === index) return
      this.iindex = index
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.header
  position: relative
  width: 100%
  height: 60px
  background-color: #1c1c1c
  .nav-back
    position: absolute
    top: 50%
    left: 6px
    box-sizing: border-box
    padding: 10px 10px 0 20px
    height: 32px
    border-radius: 4px
    background: #070707
    background: linear-gradient(#131313, #070707)
    color: #fff
    color: #fff
    font-size: 14px
    font-size: 12px
    line-height: 1
    transform: translateY(-50%)
    -webkit-box-sizing: border-box
    &:after
      position: absolute
      top: 1px
      right: 1px
      bottom: 1px
      left: 1px
      z-index: -1
      border-radius: 3px
      background: linear-gradient(#2a2a29, #151515)
      box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.1), inset 0 0 1px rgba(0, 0, 0, 0.5)
      content: ' '
  h2
    padding-left: 80px
    width: 330px
    color: #fff
    font-size: 18px
    line-height: 60px
.select
  display: grid
  padding: 10px 5px
  width: 100%
  background-color: #f2f2f2
  box-shadow: 0 5px 13px rgba(0, 0, 0, 0.12)
  grid-template-columns: 1fr 1fr 1fr 1fr
  .item
    padding: 8px 10px
    border-radius: 5px
    background-color: #fff
    color: #606060
    text-align: center
    font-weight: 500
    font-size: 18px
    &.active
      background-color: #b1b1b1
      color: #fff
</style>
