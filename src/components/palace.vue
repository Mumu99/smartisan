<template>
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
</template>

<script>
import { CountDown } from 'vant'
export default {
  name: 'Palace',
  components: {
    // 注册组件
    CountDown
  },
  props: { fourPalace: Object },
  data () {
    return {
      time: 30 * 60 * 60 * 1000 // 倒计时
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
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
</style>
