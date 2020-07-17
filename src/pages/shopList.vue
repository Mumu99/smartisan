<template>
  <div class="container">
    <!-- 头部 -->
    <Sticky>
      <div class="header">
        <router-link
          to="/home"
          class="nav-back"
        >
          &lt; 返回
        </router-link>
        <h2>商品列表</h2>
      </div>
    </Sticky>
    <!-- 商品详情 -->
    <ul class="product">
      <!-- 长列表 -->
      <List
        :immediate-check="false"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        loading-text="玩命加载中···"
        style="flex-direction: column"
      >
        <li
          class="product-item van-hairline--bottom"
          v-for="(item,index) in list"
          :key="index"
        >
          <div
            class="item-main"
            v-for="item2 in item.skuList"
            :key="item2.skuId"
          >
            <img
              v-lazy="item2.images"
              alt=""
              width="126"
              height="126"
            >
            <div class="main-info">
              <h1>{{item2.skuTitle}}</h1>
              <p>会员日直降</p>
              <span class="price">
                <span class="nowPrice">￥{{item2.discountPrice}}</span>
                <span class="oldPrice">￥{{item2.originalPrice}}</span>
              </span>
            </div>
          </div>
        </li>
      </List>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { List, Sticky } from 'vant'
export default {
  name: 'ShopList',
  components: {
    // 注册组件
    List,
    Sticky
  },
  data () {
    return {
      page: 1,
      // 控制长列表
      loading: false,
      finished: false,
      list: []
    }
  },
  mounted () {
    this.getProductList()
  },
  computed: {
    ...mapState({
      productList: state => state.search.productList
    })
  },
  methods: {
    async getProductList () {
      const productObj = {
        cid: '719',
        clid: '1102',
        page: this.page
      }
      await this.$store.dispatch('getProductList', productObj).then(() => {
        this.list.push(...this.productList)
      })
    },
    onLoad () {
      // 异步更新数据
      this.page++
      this.getProductList().then(() => {
        this.loading = false
      }, () => {
        this.finished = true
      })
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
    color: #fff
    text-align: center
    font-size: 18px
    line-height: 60px
.product
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
          .oldPrice
            color: #888
            text-decoration: line-through
</style>
