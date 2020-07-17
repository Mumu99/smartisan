<template>
  <section>
    <router-link to="/shoplist"><img
        v-for="item in oneColumn.content"
        :key="item.uuid"
        v-lazy="item.src"
        alt=""
        width="100%"
        height="125px"
      ></router-link>
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
