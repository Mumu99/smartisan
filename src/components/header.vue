<template>
  <header>
    <figure class="logo"></figure>
    <!-- 吸顶 -->
    <sticky @scroll="scrollHeader">
      <Search
        v-model="value"
        placeholder="请输入搜索关键词"
        class="search-v"
        :class="isScroll ? 'pos' : ''"
        @focus="toSearch"
      />
    </sticky>
  </header>
</template>

<script>
import { Sticky, Search } from 'vant'
export default {
  name: 'Header',
  components: {
    // 注册组件
    Sticky,
    Search
  },
  data () {
    return {
      value: '', // 搜索框的value
      isScroll: false // 控制吸顶效果
    }
  },
  methods: {
    scrollHeader (a) {
      a.isFixed === true ? this.isScroll = true : this.isScroll = false
    },
    toSearch () {
      this.$router.replace('/search')
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
header
  position: absolute
  z-index: 2
  display: flex
  flex-direction: column
  align-items: center
  width: 100%
  .search-v
    margin: 10px auto 0
    padding: 0
    width: 90%
    background-color: transparent
    .van-search__content
      border-radius: 5px
  .pos
    margin: 0
    padding: 10px 12px
    width: 100%
    background-color: #fff
    box-shadow: 0 5.33px 13.33px rgba(0, 0, 0, 0.08)
    .van-search__content
      border: 1px solid rgba(0, 0, 0, 0.08)
  .logo
    margin-top: 5px
    width: 25px
    height: 25px
    background: url('../assets/smartisan/logo.png')
    background-size: 100%
  .logo ~ div
    width: 100%
</style>
