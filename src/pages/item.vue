<template>
  <div class="container">
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
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in itemList"
          :key="item"
          @click="showActive(index)"
        >
          {{ item }}
        </div>
      </div>
    </Sticky>
    <!-- 轮播 -->
    <Banner />
    <!-- 详情 -->
    <Info />
    <!-- 优惠信息 -->
    <Discount />
    <!-- 已选版本 -->
    <Edition />
    <!-- 服务说明 -->
    <ServerInfo />
    <!-- 用户评价 -->
    <UserText />
    <!-- 商品详情 -->
    <SkuInfo />
    <!-- 底部加购物车 -->
    <Footer />
  </div>
</template>

<script>
import { Sticky } from 'vant'
import Banner from '../components/item/banner'
import Discount from '../components/item/discount'
import Edition from '../components/item/edition'
import Footer from '../components/item/footer'
import Info from '../components/item/info'
import ServerInfo from '../components/item/serverInfo'
import SkuInfo from '../components/item/skuInfo'
import UserText from '../components/item/userText'
export default {
  name: '',
  components: {
    // 注册组件
    Banner,
    Discount,
    Edition,
    Footer,
    Sticky,
    Info,
    ServerInfo,
    SkuInfo,
    UserText
  },
  data () {
    return {
      currentIndex: 0,
      itemList: ['商品', '评价', '详情', '推荐']
    }
  },
  methods: {
    isScroll () {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      switch (true) {
        case scrollTop <= 770:
          this.currentIndex = 0
          break
        case scrollTop >= 770 && scrollTop <= 939:
          this.currentIndex = 1
          break
        case scrollTop >= 939 && scrollTop <= 1428:
          this.currentIndex = 2
          break
        case scrollTop >= 1428:
          this.currentIndex = 3
          break
        default:
          break
      }
    },
    showActive (index) {
      if (this.currentIndex === index) return
      this.currentIndex = index
    }
  },
  computed: {},
  mounted () {
    window.addEventListener('scroll', this.isScroll, true)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  background-color: #fff
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
