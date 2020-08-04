<template>
  <div class="banner">
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      class="swiper-container"
    >
      <swiper-slide class="swiper-slide"><img
          class="img"
          src="https://resource.smartisan.com/resource/e991f946530a7cfab3d9670dd8b1371b.png?x-oss-process=image/resize,w_576/format,webp"
        /></swiper-slide>

      <swiper-slide class="swiper-slide"><img
          class="img"
          src="https://resource.smartisan.com/resource/6d3a3537280c3a71cb174cfec5fa5b1e.png?x-oss-process=image/resize,w_576/format,webp"
        /></swiper-slide>

      <swiper-slide class="swiper-slide"><img
          class="img"
          src="https://resource.smartisan.com/resource/465234ac5536cf3c5a8ab400e02d6b5f.png?x-oss-process=image/resize,w_576/format,webp"
        /></swiper-slide>

      <swiper-slide class="swiper-slide"><img
          class="img"
          src="https://resource.smartisan.com/resource/52fcdb420db14c83448475f650df06c4.png?x-oss-process=image/resize,w_576/format,webp"
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
