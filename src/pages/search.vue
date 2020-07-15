<template>
  <div class="container">
    <!-- 搜索 -->
    <Search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      class="search-v"
      show-action
      @input="searchKey"
      @cancel="onCancel"
      @focus="searchKey"
    />
    <!-- 热词 -->
    <div
      class="hot-list"
      v-if="!keyword && !isShowProduct"
    >
      <h4>热门搜索</h4>
      <ul class="hot-content">
        <li
          class="hot-item"
          v-for="(item,index) in hot.hot"
          :key="index"
          @click="showProduct(item)"
        >{{item}}</li>
      </ul>
    </div>
    <!-- 模糊搜索 -->
    <ul
      class="search-match"
      v-if="keyword && !isShowProduct"
    >
      <li
        class="search-match-item van-hairline--bottom"
        v-for="(item,index) in suggestList"
        :key="index"
        @click="showProduct(item)"
      >
        {{item}}
      </li>
    </ul>
    <!-- 商品详情 -->
    <ul
      class="product"
      v-if="isShowProduct"
    >
      <!-- 长列表 -->
      <List
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <li
          class="product-item van-hairline--bottom"
          v-for="product in list"
          :key="product.id"
        >
          <div
            class="item-main"
            v-for="item in product.sku_info"
            :key="item.sku_id"
          >
            <img
              v-lazy="item.ali_image"
              alt=""
              width="126"
              height="126"
            >
            <div class="main-info">
              <h1>{{item.title}}</h1>
              <p>{{item.sub_title}}</p>
              <span class="price">￥{{item.price}}</span>
            </div>
          </div>
        </li>
      </List>
    </ul>
  </div>
</template>

<script>
import debounce from 'lodash/debounce'
import { Search, List } from 'vant'
import { mapState } from 'vuex'
export default {
  name: 'SearchList',
  components: {
    // 注册组件
    Search,
    List
  },
  data () {
    return {
      keyword: '',
      page: 1, // 商品的spu的当前页
      size: 20, // 商品的spu的当前页的个数
      isShowProduct: false, // 是否展示商品详情
      // 控制长列表
      loading: false,
      finished: false,
      list: []
    }
  },
  methods: {
    // 防抖
    searchKey: debounce(function () {
      this.getKeyWord(this.keyWord)
      this.isShowProduct = false
    }, 500),
    onCancel () {
      this.$router.push('/')
    },
    // 获取模糊搜索的异步action
    async getKeyWord () {
      await this.$store.dispatch('getSuggestList', this.keyword)
    },
    // 获取商品的spuId, 用于搜索数据
    async getSearchIds () {
      const { page, size, keyword } = this
      // 传递的对象
      const searchObj = {
        page,
        size,
        keyword
      }
      await this.$store.dispatch('getSearchIds', searchObj).then(() => {
        this.getSearchProductList(this.searchIds.toString()).then(() => {
          this.list.push(...this.searchProductList)
        })
        // 成功后发送product请求获取商品
      })
    },
    // 获取商品sku信息
    async getSearchProductList (ids) {
      await this.$store.dispatch('getSearchProductList', ids)
    },
    // 展示商品列表
    showProduct (item) {
      this.keyword = item
      this.getSearchIds()
      this.isShowProduct = true
    },
    // 长列表
    onLoad () {
      // 异步更新数据
      this.page++
      this.getSearchIds().then(() => {
        this.loading = false
      }, () => {
        this.finished = true
      })
    }
  },
  computed: {
    ...mapState({
      hot: state => state.search.hot,
      suggestList: state => state.search.suggestList,
      searchIds: state => state.search.searchIds,
      searchProductList: state => state.search.searchProductList
    })
  },
  mounted () {
    this.$store.dispatch('getHot')
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
.search-match
  padding-top: 65px
  .search-match-item
    padding: 15px
    font-size: 18px
.product
  padding-top: 65px
  .product-item
    width: 100%
    .item-main
      display: flex
      align-items: center
      padding: 10px
      .main-info
        margin-left: 20px
        h1
          color: #000
          font-weight: bold
          font-size: 15px
        p
          padding: 10px 0 30px
          color: #888
          font-size: 14px
        span
          color: #d5554c
          font-weight: bold
          font-size: 14px
</style>
