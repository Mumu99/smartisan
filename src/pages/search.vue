<template>
  <div class="container">
    <Search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      class="search-v"
      show-action
      @cancel="onCancel"
    />
    <!-- 热词 -->
    <div class="hot-list">
      <h4>热门搜索</h4>
      <ul class="hot-content">
        <li
          class="hot-item"
          v-for="(item,index) in hot.hot"
          :key="index"
        >{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Search } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'SearchList',
  components: {
    // 注册组件
    Search
  },
  data () {
    return {
      keyword: '智能'
    }
  },
  methods: {
    onCancel () {
      console.log('取消')
    },
    async getKeyWord () {
      console.log(this.keyword)
      await this.$store.dispatch('getSuggestList', this.keyword)
      console.log(this.suggestList)
    }
  },
  computed: {
    ...mapState({
      hot: state => state.search.hot,
      suggestList: state => state.search.suggestList
    })
  },
  mounted () {
    this.$store.dispatch('getHot')
    this.getKeyWord()
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.search-v
  position: fixed
  top: 0
  left: 0
  z-index: 205
  box-sizing: border-box
  padding: 10px 6px
  width: 100%
  background-color: #f5f5f5
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1)
  .van-search__content
    border-radius: 15px
    box-shadow: inset 0 0.05rem 3px rgba(0, 0, 0, 0.02), inset 0 2px 4px rgba(0, 0, 0, 0.15), inset 0 0 0 0.05rem rgba(0, 0, 0, 0.1), 0 0.05rem 0.05rem 0 hsla(0, 0%, 100%, 0.1)
    color: #333
.hot-list
  padding-top: 60px
  h4
    padding: 20px
    color: #8e8e8e
    font-weight: 400
    font-size: 16px
  .hot-content
    box-sizing: border-box
    padding: 0 10px 0
    width: 100%
    .hot-item
      position: relative
      display: inline-block
      margin: 0 4.16px 8.33px 0
      padding: 0 16px 0
      height: 30px
      border-radius: 20px
      background-color: #ffe7e5
      color: #cd3f36
      text-align: center
      font-weight: 700
      font-size: 14px
      line-height: 30px
      opacity: 1
      transition: opacity 0.15s ease-out
      &:nth-child(2n-1)
        background-color: #fff7e4
      &:after
        position: absolute
        top: 0
        right: -42.85714%
        bottom: -42.85714%
        left: 0
        border: 1px solid #ffca6d
        border-radius: 20px
        content: ''
        transform: scale(0.7)
        transform-origin: 0 0
</style>
