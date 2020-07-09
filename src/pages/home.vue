<template>
  <div class="container">
    <!-- 头部，搜索和logo -->
    <Header />
    <!-- 轮播 -->
    <BannerSwiper />
    <!-- warp-新品首发 -->
    <Wrap />
    <!-- full -->
    <Full />
    <!-- 秒杀 -->
    <Palace />
    <!-- 商城热销排行 -->
    <GoodsRowWrap />
    <!-- twoFull -->
    <TwoFull />
    <!-- 猜你喜欢 -->
    <Like />
  </div>
</template>

<script>
import Header from '../components/header'
import BannerSwiper from '../components/bannerSwiper'
import Wrap from '../components/wrap'
import Full from '../components/full'
import Palace from '../components/palace'
import GoodsRowWrap from '../components/goodsRowWrap'
import TwoFull from '../components/twoFull'
import Like from '../components/like'
export default {
  name: 'Home',
  components: {
    Header,
    BannerSwiper,
    Wrap,
    Full,
    Palace,
    GoodsRowWrap,
    TwoFull,
    Like
  },
  mounted () {
    // this.swiper.slideTo(1, 1000, false)
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
>>> .swiper-pagination-bullet-active
  background-color: #fff
.container
  position: relative
  overflow: auto
  width: 100%
  height: 100%
</style>
