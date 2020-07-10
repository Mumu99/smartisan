<template>
  <section>
    <a href="javascript:;">
      <img
        v-for="item in oneColumn.content"
        :key="item.uuid"
        :src="item.src"
        alt=""
        width="100%"
        height="125px"
      >
    </a>
  </section>
</template>

<script>
export default {
  name: 'Full',
  components: {
    // 注册组件
  },
  props: {
    oneColumn: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped></style>
