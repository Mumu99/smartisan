<template>
  <div class="info">
    <div class="price">
      <div class="now-price">￥179.00</div>
      <span class="right-price">
        满99元包邮
      </span>
    </div>
    <h3>{{spu.spu_mobile_title}}</h3>
    <div class="spu-info">{{spu.spu_mobile_sub_title}}</div>
  </div>
</template>

<script>
export default {
  name: 'Info',
  components: {
    // 注册组件
  },
  props: {
    spu: Object
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
