<template>
  <div
    class="container"
    style="height:100%"
  >
    <!-- 头部 -->
    <div class="header">
      <icon
        name="down"
        class="icon-header"
        @click="$router.push('/home')"
      />
      <h2>限时秒杀</h2>
    </div>
    <!-- 内容区域 -->
    <div
      class="center"
      style="height:100%; background:#e9e9e9"
    >
      <div
        class="center-header"
        :style="'height:'+height"
      ></div>
      <div class="center-wrap">
        <ul>
          <li
            :class="{active:currentIndex===index}"
            @click="showActive(index)"
            v-for="(item,index) in seckTime"
            :key="index"
          >
            <h2>{{Math.floor((item.endTime-item.beginTime)/3600).toString().length === 1 ? '0'+Math.floor((item.endTime-item.beginTime)/3600) : Math.floor((item.endTime-item.beginTime)/3600)}}:00</h2>
            <p>{{item.describe}}</p>
          </li>
        </ul>
      </div>
      <!-- 商品 -->
      <div class="scroll-wrap">
        <aside v-if="showBuy">
          <h3 v-if="seckTime[0]">
            <span class="sp1">本场还剩:</span>
            <CountDown :time="seckTime[0].noticeTime - seckTime[0].surplusTime">
              <template v-slot="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </CountDown>
          </h3>
          <p
            class="wrap-p1"
            v-if="seckTime[0]"
          >{{seckTime[0].statusDesc}}</p>
        </aside>
        <aside
          v-else
          class="asT"
        >
          <p>
            <icon name="underway-o" />
            {{seckTime[currentIndex].statusDesc}}
          </p>
        </aside>
        <!-- sku -->
        <div class="goods-list">
          <ul>
            <li
              v-for="item in (showBuy ? seckSkuInfo : seckSkuInfoWait)"
              :key="item.spuId"
            >
              <img
                v-lazy="item.images"
                alt=""
                width="103"
                height="103"
              >
              <div class="shop-info">
                <p class="van-ellipsis">{{item.skuName}}</p>
                <span
                  class="van-ellipsis"
                  style="display:block; font-size:14px; margin-top: 4px; color:#888"
                >{{item.skuSubTitle}}</span>
                <div class="price">
                  <span class="newPrice">￥{{item.discountPrice}}</span>
                  <span class="oldPrice">￥{{item.originalPrice}}</span>
                </div>
                <div class="btn-shop">
                  <Progress
                    class="progress"
                    :percentage="item.ratio"
                    stroke-width="15"
                    show-pivot
                    :pivot-text="item.ratio === 100 ? '已售完' : '已售'+item.ratio+'%'"
                    color="#e65c53"
                  />
                  <Button
                    type="danger"
                    class="infoBtn"
                    :class="item.ratio === 100 ? 'activeInfo' : ''"
                    size="small"
                  >{{item.ratio === 100 ? '已抢完': '马上抢'}}</Button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, CountDown, Progress, Button } from 'vant'
import { mapGetters } from 'vuex'
export default {
  name: 'Event',
  components: {
    // 注册组件
    Icon,
    CountDown,
    Progress,
    Button
  },
  data () {
    return {
      currentIndex: 0,
      list: [1, 23, 4, 5, 6],
      time: 30 * 60 * 60 * 1000,
      percentage: 100,
      infoBtn: '马上抢',
      page: 1,
      pageSize: 10,
      showBuy: true,
      ofTop: 0,
      height: '110px'
    }
  },
  methods: {
    showActive (index) {
      if (this.currentIndex === index) return
      if (this.seckTime[index].describe === '即将开抢') {
        this.showBuy = false
        const { page, pageSize } = this
        this.$store.dispatch('getSeckTimeWait', { page, pageSize })
      } else {
        this.showBuy = true
      }
      this.currentIndex = index
    },
    getScroll () {
      console.log(document.getElementsByClassName('scroll-wrap')[0].clientTop)
      this.ofTop = document.getElementsByClassName('scroll-wrap')[0].offsetTop
      if (this.ofTop < 154) {
        this.height = '80px'
      } else {
        this.height = '110px'
      }
    }
  },
  computed: {
    ...mapGetters(['seckTime', 'seckSkuInfo', 'seckTimeWait', 'seckSkuInfoWait'])
  },
  mounted () {
    const { page, pageSize } = this
    this.$store.dispatch('getSeckTime', { page, pageSize })
    window.addEventListener('scroll', this.getScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.getScroll)
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.header
  position: fixed
  top: 0
  left: 0
  z-index: 12
  width: 100%
  height: 60px
  background: #fff
  h2
    color: #777777
    text-align: center
    font-size: 20px
    line-height: 60px
  .icon-header
    position: absolute
    top: 50%
    left: 20px
    margin-top: -10px
    color: #929292
    font-weight: bold
    transform: rotate(90deg)
.center
  padding-top: 60px
  width: 100%
  .center-header
    position: fixed
    top: 60px
    right: 0
    left: 0
    z-index: 10
    width: 100%
    height: 110px
    background: #e65c53
    transition: all 0.1s ease-in
  .center-wrap
    position: fixed
    top: 60px
    z-index: 11
    overflow: hidden
    box-sizing: border-box
    width: 100%
    height: 80px
    background: #e65c53
    text-align: center
    white-space: nowrap
    line-height: 80px
    ul
      display: flex
      align-items: center
      overflow: auto
      margin-left: 42%
      width: 58%
      height: 100%
      li
        margin-left: 20px
        opacity: 0.5
        &:nth-child(1)
          margin-left: 0
        &:last-child
          padding-right: 10px
        &.active
          opacity: 1
        h2
          padding: 5px
          color: #fff
          font-weight: 100
          font-size: 20px
          line-height: 20px
        p
          padding: 3px 8px
          border-radius: 20px
          background-color: #fff
          color: #e65c53
          font-weight: bold
          font-size: 16px
          line-height: 16px
  .scroll-wrap
    position: relative
    left: 50%
    z-index: 10
    box-sizing: border-box
    margin-top: 80px
    width: 95%
    border-radius: 10px
    transform: translateX(-50%)
    aside
      padding: 30px 0
      border-radius: 10px
      background-color: #fff
      &.asT
        p
        text-align: center
        font-size: 16px
      h3
        display: flex
        justify-content: center
        padding: 0 0 10px
        color: #000
        .sp1
          margin-right: 10px
          font-weight: 300
          font-size: 16px
        .colon
          display: inline-block
          color: #333333
        .block
          display: inline-block
          width: 20px
          border-radius: 2px
          background-color: #333333
          color: #fff
          text-align: center
          font-size: 12px
      .wrap-p1
        text-align: center
        font-size: 16px
    .goods-list
      margin-top: 5px
      border-radius: 10px
      background-color: #fff
      ul
        display: flex
        flex-direction: column
        li
          display: flex
          justify-content: space-between
          padding: 10px
          .shop-info
            width: 65%
            p
              font-weight: bold
              font-size: 18px
              & ~ span
                font-size: 16px
            .price
              display: flex
              margin-top: 10px
              width: 100%
              font-size: 14px
              .newPrice
                color: #e65c53
                font-weight: bold
                font-size: 16px
              .oldPrice
                margin-left: 5px
                color: #888
                text-decoration: line-through
            .btn-shop
              display: flex
              justify-content: space-between
              width: 100%
              .progress
                position: relative
                margin-top: 10px
                width: 40%
                border: 1px solid #e65c53
                border-radius: 10px
                /deep/ span.van-progress__pivot
                  position: absolute
                  left: 85px !important
                  background-color: transparent !important
                  color: #e65c53
                  font-size: 10px
              .infoBtn
                background-color: #e65c53
                &.activeInfo
                  opacity: 0.4
</style>
