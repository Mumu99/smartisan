<template>
  <aside
    class="container"
    v-if="close"
  >
    <img
      v-lazy="'https://resource.smartisan.com/resource/738c9711dac80022b99a1b2ce16199a3.png?x-oss-process=image/resize,w_720/format,webp'"
      alt=""
      height="48"
      width="100%"
    >
    <figure
      class="img-close"
      @click="closeDownload"
    ></figure>
  </aside>
</template>

<script>
/* eslint-disable */
export default {
  name: 'DownLoad',
  components: {
    // 注册组件
  },
  data () {
    return {
      close: sessionStorage.getItem('close') === null ? true : false
    }
  },
  methods: {
    closeDownload () {
      sessionStorage.setItem('close', false)
      this.close = false
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  position: relative
  height: 48px
  .img-close
    position: absolute
    top: 0
    left: 0
    height: 100%
    &:after
      position: absolute
      top: 50%
      left: 0
      width: 60px
      height: 60px
      background-image: url('../assets/smartisan/close.png')
      background-size: contain
      background-repeat: no-repeat
      content: ''
      transform: translateY(-50%)
</style>
