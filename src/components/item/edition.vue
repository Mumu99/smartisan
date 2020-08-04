<template>
  <div class="edition">
    <p class="edition-header">已选版本</p>
    <div class="color">
      <p>颜色: <span>白色</span></p>
      <Icon
        class="icon"
        name="arrow"
      />
    </div>
    <div class="num">
      <p>数量: <span>1</span></p>
    </div>
  </div>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'Edition',
  components: {
    // 注册组件
    Icon
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.edition
  margin-top: 10px
  padding: 15px 8px
  width: 100%
  background-color: #fff
  .edition-header
    padding: 5px 8px
    color: #a5a5a5
    font-size: 16px
  .color
    display: grid
    padding: 10px 8px
    font-size: 16px
    grid-template-columns: 1fr 1fr
    span
      color: #000
      font-weight: 600
    .icon
      text-align: right
      font-weight: bold
  .num
    padding: 0 8px
    font-size: 16px
    span
      color: #000
      font-weight: 600
</style>
