<template>
  <div class="info">
    <div class="price">
      <div class="now-price">￥179.00</div>
      <span class="right-price">
        满99元包邮
      </span>
    </div>
    <h3>Smartisan 真无线TWS蓝牙耳机</h3>
    <div class="spu-info">智能配对 开盖即连</div>
  </div>
</template>

<script>
export default {
  name: 'Info',
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
.info
  display: grid
  margin-top: 10px
  padding: 10px 8px
  background-color: #fff
  grid-template-rows: 1fr 1fr 1fr
  .price
    display: grid
    padding: 10px 0
    font-weight: 500
    font-size: 16px
    grid-template-columns: 1fr 1fr
    .now-price
      color: #d44d44
      font-weight: bold
    .right-price
      text-align: right
  h3
    font-size: 18px
  .spu-info
    font-size: 16px
</style>
