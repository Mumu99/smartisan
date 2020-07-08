<template>
  <div class="container">
    <!-- 头部搜索框 -->
    <sticky>
      <search
        v-model="value"
        placeholder="请输入搜索关键词"
        class="search-top"
      />
    </sticky>
    <div class="category-container">
      <section class="left-wrap">
        <ul class="left-content">
          <li class="left-content-item active">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
          <li class="left-content-item">抖音热销</li>
        </ul>
      </section>
      <section class="right-wrap">右</section>
    </div>
  </div>
</template>

<script>
import { Search, Sticky } from 'vant'
export default {
  name: 'Category',
  components: {
    // 注册组件
    Search,
    Sticky
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  width: 100%
  height: 100%
  .search-top
    box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1)
    .van-search__content
      border-radius: 15px
      background-color: #f5f5f5
  .category-container
    position: relative
    box-sizing: border-box
    padding-left: 85px
    width: 100%
    height: calc(100% - 53px)
    .left-wrap
      position: absolute
      left: 0
      z-index: 2
      overflow-x: hidden
      overflow-y: auto
      padding: 28px 6px 0
      width: 85px
      height: 100%
      box-shadow: 1px 0 0 hsla(0, 0%, 40%, 0.1)
      .left-content
        width: 100%
        .left-content-item
          margin-bottom: 25px
          padding: 5px
          border-radius: 5px
          text-align: center
          font-size: 14px
        .active
          background-color: #f6ebea
          color: #d44d44
          font-weight: 700
    .right-wrap
      overflow-x: hidden
      overflow-y: auto
      height: 100%
</style>
