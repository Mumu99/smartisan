<template>
  <div class="container">
    <Header :currentIndex="currentIndex" />
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
import Banner from '../components/item/banner'
import Discount from '../components/item/discount'
import Edition from '../components/item/edition'
import Footer from '../components/item/footer'
import Header from '../components/item/header'
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
    Header,
    Info,
    ServerInfo,
    SkuInfo,
    UserText
  },
  data () {
    return {
      currentIndex: 0
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
</style>
