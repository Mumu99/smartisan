<template>
  <ul class="wrap">
    <li class="wrap-item">
      <img
        src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
        alt=""
      >
      <p>新品首发</p>
    </li>
    <li class="wrap-item">
      <img
        src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
        alt=""
      >
      <p>新品首发</p>
    </li>
    <li class="wrap-item">
      <img
        src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
        alt=""
      >
      <p>新品首发</p>
    </li>
    <li class="wrap-item">
      <img
        src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
        alt=""
      >
      <p>新品首发</p>
    </li>
    <li class="wrap-item">
      <img
        src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
        alt=""
      >
      <p>新品首发</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Wrap',
  components: {
    // 注册组件
  },
  props: {
    entryCenter: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  display: flex
  justify-content: space-between
  padding: 10px 12px
  width: 100%
  li
    flex: 0 0 20%
    text-align: center
    img
      width: 40px
      height: 40px
    p
      padding-top: 5px
      font-weight: 700
      font-size: 12px
</style>
