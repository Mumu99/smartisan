<template>
  <section class="left-wrap">
    <ul class="left-content">
      <li
        class="left-content-item"
        v-for="(item,index) in classifyList"
        :key="index"
        :class="{active:currentIndex===index}"
        @click="showActive(index)"
      >{{item.classifyName}}</li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'LeftWrap',
  props: {
    classifyList: Array
  },
  components: {
    // 注册组件
  },
  data () {
    return {
      currentIndex: 0 // 控制高亮
    }
  },
  methods: {
    showActive (index) {
      if (this.currentIndex === index) return
      this.currentIndex = index
      this.$bus.$emit('index', index)
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.left-wrap
  position: absolute
  left: 0
  z-index: 2
  overflow-x: hidden
  overflow-y: auto
  padding: 28px 6px 0
  width: 85px
  height: 100%
  box-shadow: 1px 0 0 hsla(0, 0%, 40%, 0.1)
  .left-content
    width: 100%
    .left-content-item
      margin-bottom: 25px
      padding: 5px
      border-radius: 5px
      text-align: center
      font-size: 14px
    .active
      background-color: #f6ebea
      color: #d44d44
      font-weight: 700
</style>
