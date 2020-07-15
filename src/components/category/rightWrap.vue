<template>
  <section
    class="right-wrap"
    v-if="classifyList[index]"
  >
    <!-- 楼层 -->
    <section
      class="floot-one"
      v-for="second in classifyList[index].second"
      :key="second.classifyId"
    >
      <h2 class="floot-one-title">{{second.classifyName}}</h2>
      <aside class="floot-one-content">
        <figure
          class="floot-one-item"
          v-for="third in second.third"
          :key="third.classifyId"
        >
          <img
            v-lazy="third.image"
            alt=""
            width="86"
            height="86"
          >
          <figcaption class="name">{{third.classifyName}}</figcaption>
        </figure>
      </aside>
    </section>

  </section>
</template>

<script>
export default {
  name: 'RightWrap',
  props: {
    classifyList: Array
  },
  components: {
    // 注册组件
  },
  data () {
    return {
      index: '0'
    }
  },
  methods: {
  },
  mounted () {
    this.$bus.$on('index', (index) => {
      this.index = index
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.right-wrap
  overflow-x: hidden
  overflow-y: auto
  height: 100%
  .floot-one
    padding: 20px
    width: 100%
    .floot-one-title
      font-size: 18px
    .floot-one-content
      display: flex
      justify-content: space-between
      margin-top: 20px
      .name
        text-align: center
        font-weight: bold
        font-size: 14px
</style>
