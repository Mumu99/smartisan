<template>
  <div class="container">
    <!-- 头部，搜索和logo -->
    <Header />
    <!-- 轮播 -->
    <BannerSwiper :banner="banner" />
    <!-- warp-新品首发 -->
    <Wrap :entryCenter="entryCenter" />
    <!-- full -->
    <Full :oneColumn="oneColumn" />
    <!-- 秒杀 -->
    <Palace :fourPalace="fourPalace" />
    <!-- 商城热销排行 -->
    <GoodsRowWrap :goodsRow="goodsRow" />
    <!-- 反季五折清仓 -->
    <goodsRowTwoWrap :goodsRow2="goodsRow2" />
    <!-- 拼团优惠专区 -->
    <goodsRowThereWrap :goodsRow3="goodsRow3" />
    <!-- 阶梯满减专区 -->
    <goodsRowFourWrap :goodsRow4="goodsRow4" />
    <!-- twoFull -->
    <TwoFull :twoColumn="twoColumn" />
    <!-- 猜你喜欢 -->
    <Like />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '../components/header'
import BannerSwiper from '../components/bannerSwiper'
import Wrap from '../components/wrap'
import Full from '../components/full'
import Palace from '../components/palace'
import GoodsRowWrap from '../components/goodsRowWrap'
import goodsRowTwoWrap from '../components/goodsRowTwoWrap'
import goodsRowThereWrap from '../components/goodsRowThereWrap'
import goodsRowFourWrap from '../components/goodsRowFourWrap'
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
    goodsRowTwoWrap,
    goodsRowThereWrap,
    goodsRowFourWrap,
    TwoFull,
    Like
  },
  mounted () {
    this.$store.dispatch('getHomeList')
  },
  computed: {
    // 获取相对应数据
    ...mapGetters(['banner', 'entryCenter', 'oneColumn', 'fourPalace', 'goodsRow', 'goodsRow2', 'goodsRow3', 'goodsRow4', 'twoColumn'])
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
