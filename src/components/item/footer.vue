<template>
  <footer>
    <Icon
      name="service"
      class="lister"
    />
    <Icon
      name="bag"
      class="shopcat"
      :badge="badge"
    />
    <Button
      plain
      type="primary"
      class="buy"
      color="#555"
    >现在购买</Button>
    <Button
      type="info"
      class="toShopCat"
      color="#5a86ec"
    >加入购物车</Button>
  </footer>
</template>

<script>
import { Icon, Button } from 'vant'
export default {
  name: 'Footer',
  components: {
    // 注册组件
    Icon,
    Button
  },
  data () {
    return {
      badge: 2
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
footer
  position: fixed
  bottom: 0
  left: 0
  display: grid
  align-items: center
  padding: 7px 16px
  width: 100%
  background-color: #fff
  grid-template-columns: 1fr 1fr 3fr 3fr
  .lister
    color: #888
  .shopcat
    width: 20px
    color: #888
  .buy
    margin-left: 10px
    height: 35px
    border-radius: 8px
  .toShopCat
    margin-left: 10px
    height: 35px
    border-radius: 8px
    font-weight: bold
</style>
