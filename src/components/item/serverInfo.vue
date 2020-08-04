<template>
  <div class="serverInfo">
    <div class="title van-hairline--bottom">
      服务说明
    </div>
    <div class="info">
      <span>7天无理由退货</span>
      <span>15天质量问题换货</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerInfo',
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
.serverInfo
  margin-top: 10px
  padding: 10px 8px
  background-color: #fff
  .title
    padding: 5px 8px
    color: #666666
    font-weight: 600
    font-size: 18px
  .info
    display: grid
    color: #000
    font-weight: 600
    font-size: 12px
    grid-template-columns: 1fr 1fr
</style>
