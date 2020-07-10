<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions"
    class="swiper-container"
    v-if="banner.content"
  >
    <swiper-slide
      v-for='el in banner.content'
      class="swiper-slide"
      :key="el.uuid"
    ><img
        class="img"
        :src="el.src"
      ></swiper-slide>
    <div
      class="swiper-pagination"
      slot="pagination"
    ></div>
  </swiper>
</template>

<script>
export default {
  name: 'BannerSwiper',
  components: {
    // 注册组件
  },
  props: {
    banner: Object
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

<style lang='stylus' rel='stylesheet/stylus' scoped>
.swiper-container
  width: 100%
  height: 234px
  img
    width: 100%
    height: 100%
    .swiper-pagination
      .swiper-pagination-bullet
        width: 40px
</style>
