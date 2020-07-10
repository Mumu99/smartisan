<template>
  <section class="palace-content">
    <!-- 第一层 -->
    <section class="palace-one">
      <div
        class="left"
        v-for="item in oneList"
        :key="item.uuid"
      >
        <div
          class="left-content"
          v-if="item.floor[0].activityInfo"
        >
          <h2 class="left-title">{{item.floor[0].titleConfig.title}}</h2>
          <p class="left-palace"><span>{{item.floor[0].activityInfo.homeDescribe}}</span>
            <CountDown
              class="right-palace"
              :time="time"
            />
          </p>
        </div>
        <div
          class="left-content"
          v-if="!item.floor[0].activityInfo"
        >
          <h2 class="left-title">{{item.floor[0].titleConfig.title}}</h2>
          <p class="left-palace">
            {{item.floor[1].titleConfig.promotionTitle}}
          </p>
        </div>
        <p
          class="left-title-2"
          v-if="item.floor[0].activityInfo"
        >{{item.floor[0].titleConfig.subTitle}}</p>
        <p
          class="left-title-2"
          v-else
        >{{item.floor[1].titleConfig.promotionTitle}}</p>
        <!-- 商品 -->
        <div class="shop">
          <a
            href="javascript:;"
            v-for="item in item.floor[0].skuInfo"
            :key="item.uuid"
          >
            <div class="shop-top">
              <img
                :src="item.images"
                alt=""
                width="75px"
                height="75px"
              >
              <div class="info">
                <h4>{{item.skuMobileTitle}}</h4>
                <div class="goods-price">
                  <span class="discount">￥{{item.discountPrice}}</span>
                  <span class="orignal">￥{{item.originalPrice}}</span>
                </div>
              </div>
            </div>
          </a>
          <!-- 第二个 -->
        </div>
      </div>
    </section>
    <!-- 第二层 -->
    <section class="palace-two">
      <div class="left">
        <!-- 头部 -->
        <div
          class="title"
          v-if="twoList[0]"
        >
          <h2 class="left-title">{{twoList[0].titleConfig.title}}</h2>
          <p class="left-palace">
            {{twoList[0].titleConfig.promotionTitle}}
          </p>
        </div>
        <div class="shop-content">
          <!-- 商品 -->
          <div
            class="shop"
            v-for="item in twoList"
            :key="item.uuid"
          >
            <div class="shop-one">
              <img
                :src="item.skuInfo[0].images"
                alt=""
                width="75"
                height="75"
              >
              <div class="goods-price">
                <span class="discount">￥{{item.skuInfo[0].discountPrice}}</span>
                <span class="orignal">￥{{item.skuInfo[0].originalPrice}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="left right">
        <!-- 头部 -->
        <div
          class="title"
          v-if="twoTlist[0]"
        >
          <h2 class="left-title">{{twoTlist[0].titleConfig.title}}</h2>
          <p class="left-palace">
            {{twoTlist[0].titleConfig.promotionTitle}}
          </p>
        </div>
        <div class="shop-content">
          <!-- 商品 -->
          <div
            class="shop"
            v-for="item in twoTlist"
            :key="item.uuid"
          >
            <div class="shop-one">
              <img
                :src="item.skuInfo[0].images"
                alt=""
                width="75"
                height="75"
              >
              <div class="goods-price">
                <span class="discount">￥{{item.skuInfo[0].discountPrice}}</span>
                <span class="orignal">￥{{item.skuInfo[0].originalPrice}}</span>
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
      time: 30 * 60 * 60 * 1000, // 倒计时
      oneList: [],
      twoList: [],
      twoTlist: []
    }
  },
  watch: {
    fourPalace (val) {
      this.result(val)
    }
  },
  methods: {
    result (obj) {
      const list = [...obj.content]
      this.oneList = list.splice(0, 2)
      this.twoList = list[0].floor.splice(0, 2)
      this.twoTlist = list[0].floor
      this.time = (this.oneList[0].floor[0].activityInfo.endTime - this.oneList[0].floor[0].activityInfo.beginTime) * 1000
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
      &:nth-child(2)
        padding-left: 5px
        .left-palace
          padding: 5px
          border-color: #b1d97a !important
          color: #b1d97a
          font-weight: bold
          font-size: 12px
          line-height: 10px
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
              font-size: 10px
            .goods-price
              display: flex
              margin-top: 8px
              width: 100%
              font-weight: bold
              font-size: 10px
              .discount
                color: #d44d44
              .orignal
                margin-left: 5px
                color: #b2b2b2
                text-decoration: line-through
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
              font-size: 10px
              .discount
                color: #d44d44
              .orignal
                margin-left: 3px
                color: #b2b2b2
                text-decoration: line-through
    .right
      padding-left: 10px
</style>
