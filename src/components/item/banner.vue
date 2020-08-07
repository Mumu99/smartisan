<template>
  <div class="banner">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      class="swiper-container"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="(item,index) in bannerList "
        :key="index"
      ><img
          class="img"
          v-lazy="item"
        /></swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  components: {
    // 注册组件
  },
  props: {
    bannerList: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.banner
  .swiper-container
    width: 100%
    height: 300px
    background-color: #fff
    img
      display: block
      margin: 0 auto
      width: 300px
      height: 100%
      .swiper-pagination
        .swiper-pagination-bullet
          width: 40px
</style>
