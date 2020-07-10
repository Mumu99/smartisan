<template>
  <ul class="wrap">
    <li
      class="wrap-item"
      v-for="item in entryCenter.content"
      :key="item.uuid"
    >
      <img :src="item.src">
      <p>{{item.entryName}}</p>
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
