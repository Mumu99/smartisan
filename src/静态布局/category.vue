<template>
  <div class="container">
    <!-- 头部搜索框 -->
    <sticky>
      <search
        v-model="value"
        placeholder="请输入搜索关键词"
        class="search-top"
      />
    </sticky>
    <div class="category-container">
      <!-- 左边导航nav -->
      <section class="left-wrap">
        <ul class="left-content">
          <li
            class="left-content-item"
            v-for="(item,index) in leftList"
            :key="index"
            :class="{active:currentIndex===index}"
            @click="showActive(index)"
          >{{item}}</li>
        </ul>
      </section>
      <!-- 右边展示 -->
      <section class="right-wrap">
        <!-- 楼层 -->
        <section class="floot-one">
          <h2 class="floot-one-title">家居用品</h2>
          <aside class="floot-one-content">
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
          </aside>
        </section>
        <section class="floot-one">
          <h2 class="floot-one-title">家居用品</h2>
          <aside class="floot-one-content">
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
          </aside>
        </section>
        <section class="floot-one">
          <h2 class="floot-one-title">家居用品</h2>
          <aside class="floot-one-content">
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
          </aside>
        </section>
        <section class="floot-one">
          <h2 class="floot-one-title">家居用品</h2>
          <aside class="floot-one-content">
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
          </aside>
        </section>
        <section class="floot-one">
          <h2 class="floot-one-title">家居用品</h2>
          <aside class="floot-one-content">
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
            <figure class="floot-one-item">
              <img
                src="https://resource.smartisan.com/resource/b3e0de1e82fd10c93b2b003aeb9e9163.jpg?x-oss-process=image/resize,w_160/format,webp"
                alt=""
                width="86"
                height="86"
              >
              <figcaption class="name">水杯水具</figcaption>
            </figure>
          </aside>
        </section>

      </section>
    </div>
  </div>
</template>

<script>
import { Search, Sticky } from 'vant'
export default {
  name: 'Category',
  components: {
    // 注册组件
    Search,
    Sticky
  },
  data () {
    return {
      value: '', // 搜索的数据
      leftList: ['抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销', '抖音热销'], // 左边导航的数据
      currentIndex: 0 // 控制高亮
    }
  },
  methods: {
    showActive (index) {
      if (this.currentIndex === index) return
      this.currentIndex = index
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  width: 100%
  height: 100%
  .search-top
    box-shadow: 0 1px 0 hsla(0, 0%, 40%, 0.1)
    .van-search__content
      border-radius: 15px
      background-color: #f5f5f5
  .category-container
    position: relative
    box-sizing: border-box
    padding-left: 85px
    width: 100%
    height: calc(100% - 53px)
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
