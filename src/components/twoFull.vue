<template>
  <section class="two-full">
    <a href="javascript:;">
      <img
        v-lazy="'https://resource.smartisan.com/resource/ca885c625c920f584500cfb8062831ea.png?x-oss-process=image/resize,w_375/format,webp'"
        alt=""
        width="100%"
        height="125"
      >
    </a>
    <a href="javascript:;">
      <img
        v-lazy="'https://resource.smartisan.com/resource/7928205e91db5b47881f6b6810eb3ac1.png?x-oss-process=image/resize,w_375/format,webp'"
        alt=""
        width="100%"
        height="125"
      >
    </a>
  </section>
</template>

<script>
export default {
  name: 'TwoFull',
  components: {
    // 注册组件
  },
  props: { twoColumn: Object },
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.two-full
  display: flex
  margin: 0 auto
  width: 100%
</style>
