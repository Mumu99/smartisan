<template>
  <div class="container">
    <!-- 头部，搜索和logo -->
    <header>
      <figure class="logo"></figure>
      <!-- 吸顶 -->
      <sticky @scroll="scrollHeader">
        <Search
          v-model="value"
          placeholder="请输入搜索关键词"
          class="search-v"
          :class="isScroll ? 'pos' : ''"
        />
      </sticky>
    </header>
    <!-- 轮播 -->
    <swiper
      ref="mySwiper"
      :options="swiperOptions"
      class="swiper-container"
    >
      <swiper-slide
        v-for='el in arrItem'
        class="swiper-slide"
        :key="el.name"
      ><img
          class="img"
          :src="el.imgUrl"
        ></swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
    </swiper>
    <!-- warp-新品首发 -->
    <ul class="wrap">
      <li class="wrap-item">
        <img
          src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
          alt=""
        >
        <p>新品首发</p>
      </li>
      <li class="wrap-item">
        <img
          src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
          alt=""
        >
        <p>新品首发</p>
      </li>
      <li class="wrap-item">
        <img
          src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
          alt=""
        >
        <p>新品首发</p>
      </li>
      <li class="wrap-item">
        <img
          src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
          alt=""
        >
        <p>新品首发</p>
      </li>
      <li class="wrap-item">
        <img
          src="https://resource.smartisan.com/resource/3f62018bcc882594a156c3845a4424db.png?x-oss-process=image/resize,w_80/format,webp"
          alt=""
        >
        <p>新品首发</p>
      </li>
    </ul>
    <!-- full -->
    <section>
      <a href="javascript:;">
        <img
          src="https://resource.smartisan.com/resource/e16c311607f131effd414383e918b58c.png?x-oss-process=image/resize,w_750/format,webp"
          alt=""
          height="125px"
        >
      </a>
    </section>
    <!-- 秒杀 -->
    <section class="palace-content">
      <!-- 第一层 -->
      <section class="palace-one">
        <div class="left">
          <div class="left-content">
            <h2 class="left-title">秒杀</h2>
            <p class="left-palace"><span>10点场</span>
              <CountDown
                class="right-palace"
                :time="time"
              />
            </p>
          </div>
          <p class="left-title-2">限时秒杀</p>
          <!-- 商品 -->
          <div class="shop">
            <a href="javascript:;">
              <div class="shop-top">
                <img
                  src="https://resource.smartisan.com/resource/26ed03fda340a490ed0b08a96022c631.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75px"
                  height="75px"
                >
                <div class="info">
                  <h4>小霸王 点读笔</h4>
                  <div class="goods-price">
                    <span class="discount">￥192</span>
                    <span class="orignal">￥218</span>
                  </div>
                </div>
              </div>
            </a>
            <!-- 第二个 -->
            <a href="javascript:;">
              <div class="shop-top">
                <img
                  src="https://resource.smartisan.com/resource/26ed03fda340a490ed0b08a96022c631.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75px"
                  height="75px"
                >
                <div class="info">
                  <h4>小霸王 点读笔</h4>
                  <div class="goods-price">
                    <span class="discount">￥192</span>
                    <span class="orignal">￥218</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="left right">
          <div class="left-content">
            <h2 class="left-title">秒杀</h2>
            <p class="left-palace">
              限时折扣
            </p>
          </div>
          <p class="left-title-2">限时秒杀</p>
          <!-- 商品 -->
          <div class="shop">
            <a href="javascript:;">
              <div class="shop-top">
                <img
                  src="https://resource.smartisan.com/resource/26ed03fda340a490ed0b08a96022c631.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75px"
                  height="75px"
                >
                <div class="info">
                  <h4>小霸王 点读笔</h4>
                  <div class="goods-price">
                    <span class="discount">￥192</span>
                    <span class="orignal">￥218</span>
                  </div>
                </div>
              </div>
            </a>
            <!-- 第二个 -->
            <a href="javascript:;">
              <div class="shop-top">
                <img
                  src="https://resource.smartisan.com/resource/26ed03fda340a490ed0b08a96022c631.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75px"
                  height="75px"
                >
                <div class="info">
                  <h4>小霸王 点读笔</h4>
                  <div class="goods-price">
                    <span class="discount">￥192</span>
                    <span class="orignal">￥218</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
      <!-- 第二层 -->
      <section class="palace-two">
        <div class="left">
          <!-- 头部 -->
          <div class="title">
            <h2 class="left-title">服饰箱包</h2>
            <p class="left-palace">
              限时直降
            </p>
          </div>
          <div class="shop-content">
            <!-- 商品 -->
            <div class="shop">
              <div class="shop-one">
                <img
                  src="https://resource.smartisan.com/resource/31968778391601882accf06eef96d0ba.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75"
                  height="75"
                >
                <div class="goods-price">
                  <span class="discount">￥1299</span>
                  <span class="orignal">￥2508</span>
                </div>
              </div>
            </div>
            <!-- 第二个商品 -->
            <div class="shop">
              <div class="shop-one">
                <img
                  src="https://resource.smartisan.com/resource/31968778391601882accf06eef96d0ba.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75"
                  height="75"
                >
                <div class="goods-price">
                  <span class="discount">￥1299</span>
                  <span class="orignal">￥2508</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右 -->
        <div class="left right">
          <!-- 头部 -->
          <div class="title">
            <h2 class="left-title">服饰箱包</h2>
            <p class="left-palace">
              限时直降
            </p>
          </div>
          <div class="shop-content">
            <!-- 商品 -->
            <div class="shop">
              <div class="shop-one">
                <img
                  src="https://resource.smartisan.com/resource/31968778391601882accf06eef96d0ba.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75"
                  height="75"
                >
                <div class="goods-price">
                  <span class="discount">￥1299</span>
                  <span class="orignal">￥2508</span>
                </div>
              </div>
            </div>
            <!-- 第二个商品 -->
            <div class="shop">
              <div class="shop-one">
                <img
                  src="https://resource.smartisan.com/resource/31968778391601882accf06eef96d0ba.jpg?x-oss-process=image/resize,w_144/format,webp"
                  alt=""
                  width="75"
                  height="75"
                >
                <div class="goods-price">
                  <span class="discount">￥1299</span>
                  <span class="orignal">￥2508</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
    <!-- 商城热销排行 -->
    <section class="goods-row-wrap">
      <div class="title">
        <h2>商城热销排行</h2>
        <span>查看更多
          <Icon name="arrow" /></span>
      </div>
      <!-- 商品 -->
      <div class="goods-shop">
        <ul class="shop-content">
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>
          <li class="s-item">
            <figure class="s-item-top">
              <span class="green">直降</span>
              <img
                src="https://resource.smartisan.com/resource/003bd205a42d0701d481353eaba3cd03.jpg?x-oss-process=image/resize,w_190/format,webp"
                alt=""
                width="100"
                height="100"
              >
            </figure>
            <article class="s-item-bom">
              <p class="van-multi-ellipsis--l2">抖音文创 可折叠多功能桌面工具人</p>
              <div class="goods-price">
                <span class="discount">￥192</span>
                <span class="orignal">￥218</span>
              </div>
            </article>
          </li>

        </ul>
      </div>
    </section>
    <!-- twoFull -->
    <section class="two-full">
      <a href="javascript:;">
        <img
          src="https://resource.smartisan.com/resource/ca885c625c920f584500cfb8062831ea.png?x-oss-process=image/resize,w_375/format,webp"
          alt=""
          height="125"
        >
      </a>
      <a href="javascript:;">
        <img
          src="https://resource.smartisan.com/resource/7928205e91db5b47881f6b6810eb3ac1.png?x-oss-process=image/resize,w_375/format,webp"
          alt=""
          height="125"
        >
      </a>
    </section>
    <!-- 猜你喜欢 -->
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
  </div>
</template>

<script>
import { Search, CountDown, Sticky, Icon, List } from 'vant'
export default {
  name: 'Home',
  data () {
    return {
      value: '', // 搜索框的value
      time: 30 * 60 * 60 * 1000, // 倒计时
      isScroll: false, // 控制吸顶效果
      arrItem: [
        {
          name: 'swiperSlide5',
          imgUrl: 'https://resource.smartisan.com/resource/6014e295b5b8feb95b45372d80bc6b17.png?x-oss-process=image/resize,w_750/format,webp'
        },
        {
          name: 'swiperSlide1',
          imgUrl: 'https://resource.smartisan.com/resource/a73535d1204892c03088a54afc2e92a9.png?x-oss-process=image/resize,w_750/format,webp'
        },
        {
          name: 'swiperSlide51',
          imgUrl: 'https://resource.smartisan.com/resource/ecd8e2db4847089719121dc0804fe9a8.png?x-oss-process=image/resize,w_750/format,webp'
        },
        {
          name: 'swiperSlide1111115',
          imgUrl: 'https://resource.smartisan.com/resource/de101ce00936a02e47871d8eee96be8f.png?x-oss-process=image/resize,w_750/format,webp'
        }
      ],
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
      },
      // 瀑布流需要的数据
      list: [],
      loading: false,
      finished: false
    }
  },
  components: {
    Search,
    CountDown,
    Sticky,
    Icon,
    List
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // this.swiper.slideTo(1, 1000, false)
  },
  methods: {
    scrollHeader (a) {
      a.isFixed === true ? this.isScroll = true : this.isScroll = false
    },
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
>>> .swiper-pagination-bullet-active
  background-color: #fff
.container
  position: relative
  overflow: hidden
  width: 100%
  height: 100%
  header
    position: absolute
    z-index: 2
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    .search-v
      margin: 10px auto 0
      padding: 0
      width: 90%
      background-color: transparent
      .van-search__content
        border-radius: 5px
    .pos
      margin: 0
      padding: 10px 12px
      width: 100%
      background-color: #fff
    .logo
      margin-top: 5px
      width: 25px
      height: 25px
      background: url('../assets/smartisan/logo.png')
      background-size: 100%
    .logo ~ div
      width: 100%
  .swiper-container
    width: 100%
    height: 234px
    img
      width: 100%
      height: 100%
      .swiper-pagination
        .swiper-pagination-bullet
          width: 40px
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
  .palace-content
    margin: 0 auto
    width: 95%
    border: 1px solid rgba(0, 0, 0, 0.08)
    border-radius: 10px
    .palace-one
      display: flex
      padding: 0 0 0 10px
      width: 100%
      .left
        padding-top: 20px
        width: 50%
        border-right: 1px solid rgba(0, 0, 0, 0.08)
        .left-content
          display: flex
          justify-content: space-between
          align-items: center
          padding: 0 10px 0 0
          width: 100%
          .left-title
            font-size: 14px
          .left-palace
            display: flex
            align-items: center
            overflow: hidden
            border: 1px solid #d44d44
            border-radius: 5px
            span
              padding: 5px
              height: 20px
              background-color: #d44d44
              color: #fff
              font-weight: bold
              font-size: 10px
              line-height: 10px
            .right-palace
              padding: 0 5px
              color: #d44d44
              font-weight: bold
              font-size: 12px
        .left-title-2
          margin: 5px 0
          font-size: 12px
        .shop
          display: flex
          flex-direction: column
          padding: 10px 10px 0 0
          width: 100%
          .shop-top
            display: flex
            justify-content: space-between
            width: 100%
            .info
              margin-top: 20px
              width: 100%
              h4
                color: #696969
                font-weight: bold
                font-size: 12px
              .goods-price
                display: flex
                margin-top: 8px
                width: 100%
                font-weight: bold
                font-size: 12px
                .discount
                  color: #d44d44
                .orignal
                  margin-left: 5px
                  color: #b2b2b2
                  text-decoration: line-through
      .right
        padding-left: 10px
        border: none
        .left-palace
          padding: 5px
          border-color: #b1d97a !important
          color: #b1d97a
          font-weight: bold
          font-size: 12px
          line-height: 10px
    .palace-two
      display: flex
      padding: 0 0 0 10px
      width: 100%
      border-top: 1px solid rgba(0, 0, 0, 0.08)
      .left
        padding-top: 20px
        width: 50%
        border-right: 1px solid rgba(0, 0, 0, 0.08)
        .title
          display: flex
          justify-content: space-between
          align-items: center
          padding-right: 10px
          width: 100%
          .left-title
            font-size: 14px
          .left-palace
            padding: 5px
            border: 1px solid #b1d97a
            border-radius: 5px
            color: #b1d97a
            font-weight: bold
            font-size: 12px
            line-height: 10px
        .shop-content
          display: flex
          padding-top: 5px
          width: 100%
          .shop
            padding-bottom: 10px
            width: 50%
            .shop-one
              width: 100%
              .goods-price
                display: flex
                margin-top: 8px
                width: 100%
                font-weight: bold
                font-size: 12px
                .discount
                  color: #d44d44
                .orignal
                  margin-left: 5px
                  color: #b2b2b2
                  text-decoration: line-through
      .right
        padding-left: 10px
  .goods-row-wrap
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
    .goods-shop
      width: 100%
      .shop-content
        display: flex
        overflow-x: scroll
        width: 100%
        .s-item
          margin-right: 5px
          width: 100px
          background-color: #f5f5f5
          .s-item-top
            position: relative
            width: 100%
            .green
              position: absolute
              top: 15px
              right: 15px
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
  .two-full
    display: flex
    margin: 0 auto
    width: 100%
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
