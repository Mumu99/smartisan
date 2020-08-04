<template>
  <div class="skuInfo">
    <p>商品详情</p>
    <img
      src="https://resource.smartisan.com/resource/1cb3dbe289dc7c4db4df8bfba383b3db.png?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_0/format,webp"
      width="100%"
      alt=""
    />
    <img
      src="https://resource.smartisan.com/resource/1cb3dbe289dc7c4db4df8bfba383b3db.png?x-oss-process=image/resize,w_750/indexcrop,y_1440,i_1/format,webp"
      width="100%"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'SkuInfo',
  components: {
    // 注册组件
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.skuInfo
  margin-top: 10px
  margin-bottom: 52px
  width: 100%
  p
    padding: 10px 16px
    width: 100%
    background-color: #fff
    color: #666
    font-weight: bold
    font-size: 18px
</style>
