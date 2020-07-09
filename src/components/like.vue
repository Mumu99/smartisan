<template>
  <section class="like">
    <!-- 标题 -->
    <div class="title">
      <h2>猜你喜欢</h2>
      <span>
        <Icon name="arrow" /></span>
    </div>
    <!-- 瀑布流 -->
    <div class="vueWaterfall">
      <list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <section
          class="fall-left"
          v-for="item in list"
          :key="item"
        >
          <figure class="s-item-top">
            <span class="green">新品</span>
            <img
              src="https://resource.smartisan.com/resource/387d57e87385bf1296d72637e78a88a7.jpg?x-oss-process=image/resize,w_324/format,webp"
              alt=""
              width="169"
              height="169"
            >
          </figure>
          <article class="s-item-bom">
            <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
            <div class="goods-price">
              <span class="discount">￥192</span>
              <span class="orignal">￥218</span>
            </div>
          </article>
        </section>
      </list>
      <list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <section
          class="fall-left"
          v-for="item in list"
          :key="item"
        >
          <figure class="s-item-top">
            <span class="green">新品</span>
            <img
              src="https://resource.smartisan.com/resource/387d57e87385bf1296d72637e78a88a7.jpg?x-oss-process=image/resize,w_324/format,webp"
              alt=""
              width="169"
              height="169"
            >
          </figure>
          <article class="s-item-bom">
            <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
            <span class="discountPrice">立减 39 元</span>
            <div class="goods-price">
              <span class="discount">￥192</span>
              <span class="orignal">￥218</span>
            </div>
          </article>
        </section>
      </list>
    </div>
  </section>
</template>

<script>
import { Icon, List } from 'vant'
export default {
  name: 'Like',
  components: {
    // 注册组件
    List,
    Icon
  },
  props: {

  },
  data () {
    return {
      // 瀑布流需要的数据
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad () {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.like
  margin: 0 auto
  padding-top: 20px
  width: 90%
  .title
    display: flex
    justify-content: space-between
    align-items: center
    padding: 0 0 10px
    width: 100%
    h2
      font-size: 20px
    span
      display: flex
      align-items: center
      color: #a2a2a2
      font-size: 14px
      .van-icon
        margin-top: -3px
  .vueWaterfall
    display: flex
    justify-content: space-between
    width: 100%
    .van-list
      width: 49%
      .fall-left
        margin-bottom: 10px
        width: 100%
        background-color: #f5f5f5
        .s-item-top
          position: relative
          width: 100%
          .green
            position: absolute
            top: 5px
            right: 5px
            width: 24px
            height: 24px
            background: url('../assets/smartisan/bas.png')
            background-size: 100%
            color: #fff
            text-align: center
            font-weight: 700
            font-size: 10px
            line-height: 24px
        .s-item-bom
          width: 100%
          p
            padding: 5px
            font-weight: 700
            font-size: 12px
            line-height: 16px
          .discountPrice
            padding: 2px 5px
            border: 1px solid #d44d44
            border-radius: 5px
            background-color: #fae2e1
            color: #d44d44
            font-size: 12px
          .goods-price
            display: flex
            margin-top: 8px
            padding: 5px
            width: 100%
            font-weight: bold
            font-size: 12px
            .discount
              color: #d44d44
            .orignal
              margin-left: 5px
              color: #b2b2b2
              text-decoration: line-through
</style>
