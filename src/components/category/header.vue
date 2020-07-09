<template>
  <sticky>
    <search
      v-model="value"
      placeholder="请输入搜索关键词"
      class="search-top"
    />
  </sticky>
</template>

<script>
import { Search, Sticky } from 'vant'
export default {
  name: 'Header',
  components: {
    // 注册组件
    Search,
    Sticky
  },
  data () {
    return {
      value: '' // 搜索的数据
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.search-top
  box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1)
  .van-search__content
    border-radius: 15px
    background-color: #f5f5f5
</style>
