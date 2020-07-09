<template>
  <swiper
    ref="mySwiper"
    :options="swiperOptions"
    class="swiper-container"
  >
    <swiper-slide
      v-for='el in arrItem'
      class="swiper-slide"
      :key="el.name"
    ><img
        class="img"
        :src="el.imgUrl"
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
      arrItem: [
        {
          name: 'swiperSlide5',
          imgUrl: 'https://resource.smartisan.com/resource/6014e295b5b8feb95b45372d80bc6b17.png?x-oss-process=image/resize,w_750/format,webp'
        },
        {
          name: 'swiperSlide1',
          imgUrl: 'https://resource.smartisan.com/resource/a73535d1204892c03088a54afc2e92a9.png?x-oss-process=image/resize,w_750/format,webp'
        },
        {
          name: 'swiperSlide51',
          imgUrl: 'https://resource.smartisan.com/resource/ecd8e2db4847089719121dc0804fe9a8.png?x-oss-process=image/resize,w_750/format,webp'
        },
        {
          name: 'swiperSlide1111115',
          imgUrl: 'https://resource.smartisan.com/resource/de101ce00936a02e47871d8eee96be8f.png?x-oss-process=image/resize,w_750/format,webp'
        }
      ],
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
