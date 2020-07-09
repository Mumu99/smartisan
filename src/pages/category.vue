<template>
  <div class="container">
    <!-- 头部搜索框 -->
    <Header />
    <div class="category-container">
      <!-- 左边导航nav -->
      <LeftWrap />
      <!-- 右边展示 -->
      <RightWrap />
    </div>
  </div>
</template>

<script>
import Header from '../components/category/header'
import LeftWrap from '../components/category/leftWrap'
import RightWrap from '../components/category/rightWrap'
export default {
  name: 'Category',
  components: {
    // 注册组件
    Header,
    LeftWrap,
    RightWrap
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  width: 100%
  height: 100%
  .category-container
    position: relative
    box-sizing: border-box
    padding-left: 85px
    width: 100%
    height: calc(100% - 53px)
</style>
