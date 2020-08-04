<template>
  <div class="discount">
    <p class="dis-text">优惠信息</p>
    <div class="dis-info">
      <div class="title">
        大促
      </div>
      <span>(配件日) 精选配件 限时大促</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Discount',
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
.discount
  padding: 10px 8px
  width: 100%
  background-color: #fff
  .dis-text
    padding: 0 8px
    color: #a5a5a5
    font-size: 16px
  .dis-info
    display: grid
    padding: 8px
    font-size: 16px
    grid-template-columns: 1fr 4fr
    grid-column-gap: 10px
    .title
      padding: 5px 8px
      border-radius: 10px
      background-color: #fbe8e7
      color: #d44d44
      text-align: center
    span
      padding: 5px 8px
</style>
