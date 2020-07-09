<template>
  <div class="container">
    <Sticky>
      <header>
        <h1>购物车</h1>
        <Button
          v-if="!isShowCat"
          @click="writer"
        >{{isWriter ? '完成' : '编辑'}}</Button>
      </header>
    </Sticky>
    <!-- 内容 -->
    <section
      class="content"
      v-if="isShowCat"
    >
      <div class="logo"></div>
      <h2>购物车暂无商品</h2>
      <p>添加到购物车的商品将会显示在这里</p>
      <footer>
        <Button
          type="primary"
          color="#5a80e1"
          class="login"
        >登录</Button>
        <Button
          class="xg"
          plain
        >现在选购</Button>
      </footer>
    </section>
    <!-- 购物车有物品时展示的 -->
    <section class="cat-content">
      <Sticky :offset-top="60">
        <!-- 优惠券 -->
        <div
          class="discount"
          v-if="!isWriter"
        >
          <div class="left">
            <Icon
              name="balance-list"
              class="left"
              color="#d44d44"
            />
            <p class="title">点击领取优惠券</p>
          </div>
          <Icon
            name="arrow"
            class="right"
            color="#d44d44"
            size="16px"
          />
        </div>
      </Sticky>
      <!-- 商品 -->
      <div class="group">
        <!-- 商品列表 -->
        <div class="item">
          <div
            class="top"
            v-if="isNoPrice"
          >
            <span class="top-one">秒杀</span>
            <span class="top-two">距离活动结束时间还剩</span>
            <CountDown
              :time="time"
              class="top-time"
            >
              <template v-slot="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </CountDown>
          </div>
          <div class="main">
            <Checkbox
              class="main-check"
              v-model="checked"
            />
            <div class="shop">
              <img
                src="https://resource.smartisan.com/resource/67f82995c2980f9042e12d0ba78c7510.jpg?x-oss-process=image/resize,w_180/format,webp"
                alt=""
                width="90"
                height="90"
              >
              <div class="info">
                <h4 class="info-title">鹿客(LOOCK) 智能猫眼 CatY青春版</h4>
                <p class="info-color">黑色</p>
                <div class="price">
                  <p class="info-price">
                    ￥899.00 <span>1</span>
                  </p>
                  <p
                    v-if="isNoPrice"
                    class="no-price"
                  >
                    ￥85.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div
            class="top"
            v-if="isNoPrice"
          >
            <span class="top-one">秒杀</span>
            <span class="top-two">距离活动结束时间还剩</span>
            <CountDown
              :time="time"
              class="top-time"
            >
              <template v-slot="timeData">
                <span class="block">{{ timeData.hours }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.minutes }}</span>
                <span class="colon">:</span>
                <span class="block">{{ timeData.seconds }}</span>
              </template>
            </CountDown>
          </div>
          <div class="main">
            <Checkbox
              class="main-check"
              v-model="checked"
            />
            <div class="shop">
              <img
                src="https://resource.smartisan.com/resource/67f82995c2980f9042e12d0ba78c7510.jpg?x-oss-process=image/resize,w_180/format,webp"
                alt=""
                width="90"
                height="90"
              >
              <div class="info">
                <h4 class="info-title">鹿客(LOOCK) 智能猫眼 CatY青春版</h4>
                <p class="info-color">黑色</p>
                <div class="price">
                  <p class="info-price">
                    ￥899.00 <span>1</span>
                  </p>
                  <p
                    v-if="isNoPrice"
                    class="no-price"
                  >
                    ￥85.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 相关推荐 -->
      <div class="recommend">
        <!-- 头部 -->
        <div class="title van-hairline--bottom">
          <h2>相关推荐</h2>
        </div>
        <!-- 商品 -->
        <div class="shop-content">
          <aside class="shop-content-main">
            <!-- 商品列表 -->
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
            <figure class="shop-item ">
              <div class="item-img">
                <div class="img van-hairline--surround">
                  <img
                    src="https://resource.smartisan.com/resource/a668d1a5f41b04ece82d76ded1e94d3a.jpg?x-oss-process=image/resize,w_342/format,webp"
                    alt=""
                    width="171"
                    height="171"
                  >
                </div>
                <!-- 价格标签 -->
                <Tag
                  round
                  class="item-img-tag"
                  type="warning"
                >直降</Tag>
              </div>
              <!-- 详细信息 -->
              <div class="item-info">
                <p class="van-ellipsis item-info-title">坚果 QuickCharge 4+ 快速充电器</p>
                <p class="van-ellipsis item-info-desc">全面兼容的 18W 快速充电</p>
                <div class="goods-price">
                  <span class="goods-discount">￥192</span>
                  <span class="goods-orignal">￥218</span>
                </div>
              </div>
            </figure>
          </aside>
        </div>
      </div>
      <!-- 底部结算 -->
      <div
        class="bottom-bar"
        v-if="!isShowCat"
      >
        <!-- 选择 -->
        <div class="select-info">
          <Checkbox
            class="main-check"
            v-model="checked"
          />
          <span>已选<span :class="isWriter ? 'red' : ''">3</span> 件</span>
        </div>
        <!-- 结算 -->
        <div class="sum-info">
          <div
            class="desc"
            v-if="!isWriter"
          >
            <p class="desc-p1">合计: <span>￥218.80</span></p>
            <p class="desc-p2">应付总额不含运费</p>
          </div>
          <Button
            class="btn"
            :class="isWriter ? 'delect' : ''"
          >{{isWriter ? '删除所选' : '现在结算'}}</Button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Button, Icon, Checkbox, CountDown, Tag, Sticky } from 'vant'
export default {
  name: 'shopcat',
  components: {
    // 注册组件
    Button,
    Icon,
    Checkbox,
    CountDown,
    Tag,
    Sticky
  },
  data () {
    return {
      isShowCat: false, // 购物车是否有数据
      checked: true, // 是否选中
      isNoPrice: false, // 是否是秒杀进入
      time: 30 * 60 * 60 * 1000, // 倒计时
      isWriter: false // 是否为编辑状态
    }
  },
  methods: {
    writer () {
      this.isWriter = !this.isWriter
      this.checked = false
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  position: relative
  width: 100%
  height: 100%
  background-color: #ededed
  header
    position: relative
    width: 100%
    height: 60px
    background-color: #1b1b1b
    h1
      color: #fff
      text-align: center
      font-size: 20px
      line-height: 60px
    Button
      position: absolute
      top: 50%
      right: 5%
      box-sizing: border-box
      height: 32px
      border-color: transparent
      border-radius: 4px
      background: linear-gradient(#131313, #070707)
      color: #fff
      font-size: 12px
      line-height: 1
      transform: translateY(-50%)
      &:after
        position: absolute
        top: 1px
        right: 1px
        bottom: 1px
        left: 1px
        z-index: -1
        border-radius: 3px
        background: linear-gradient(#2a2a29, #151515)
        box-shadow: inset 0 1px 1px hsla(0, 0%, 100%, 0.1), inset 0 0 1px rgba(0, 0, 0, 0.5)
        content: ' '
  .content
    position: absolute
    top: 50%
    left: 50%
    display: flex
    flex-direction: column
    align-items: center
    width: 90%
    transform: translate(-50%, -50%)
    .logo
      width: 114px
      height: 114px
      background: url('../assets/smartisan/cat.png')
      background-size: 100% 100%
      opacity: 0.3
    h2
      margin-top: 15px
      color: #ccc
      font-size: 20px
    p
      margin: 10px 0
      color: #cacaca
      font-size: 16px
    footer
      width: 100%
      button
        width: 49%
        border: 1px solid #ccc
        border-radius: 8px
        &.login
          background-color: linear-gradient(#6f94e8, #5178df)
          box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)
        &.xg
          background-color: #ebebeb
  .cat-content
    width: 100%
    .discount
      display: flex
      justify-content: space-between
      align-items: center
      height: 60px
      background-color: #fee6e4
      box-shadow: inset 0 5px 13px rgba(0, 0, 0, 0.12), 0 5px 13px rgba(0, 0, 0, 0.12)
      .left
        display: flex
        align-items: center
        margin-left: 10px
        .title
          margin-left: 10px
          color: #d44d44
          font-weight: bold
          font-size: 18px
      .right
        margin-right: 20px
        font-weight: bold
    .group
      margin: 7px 0
      width: 100%
      .item
        margin-bottom: 7px
        padding: 10px
        background-color: #fff
        .top
          display: flex
          align-items: center
          padding: 10px 0 15px 25px
          width: 100%
          .top-one
            font-weight: bold
            font-size: 14px
          .top-two
            margin-left: 10px
            font-size: 14px
          .top-time
            margin-left: 10px
            .colon
              display: inline-block
              color: #d44d44
              font-weight: bold
              font-size: 16px
            .block
              display: inline-block
              width: 22px
              border: 0.5px solid #d44d44
              border-radius: 2px
              color: #d44d44
              text-align: center
              font-size: 12px
        .main
          display: flex
          justify-content: space-between
          width: 100%
          .main-check
            margin-left: 0
          .shop
            display: flex
            flex: 1
            .info
              padding: 20px 0 0
              width: 100%
              .info-title
                color: #000
                font-size: 14px
              .info-color
                margin: 5px 0
                color: #7f7f7f
                font-size: 12px
              .price
                display: flex
                margin-top: 10px
                .info-price
                  color: #d44d44
                  font-weight: bold
                  font-size: 14px
                  span
                    position: relative
                    display: inline-block
                    padding-left: 14px
                    color: #999
                    &:after
                      position: absolute
                      bottom: 0.5px
                      left: 0
                      content: 'x'
                .no-price
                  margin-left: 20px
                  color: #7f7f7f
                  text-decoration: line-through
                  font-size: 14px
    .recommend
      width: 100%
      background-color: #fff
      .title
        width: 100%
        h2
          padding: 15px 0 15px 10px
          width: 100%
          color: #6b6b6b
          font-size: 18px
      .shop-content
        margin: 20px auto 0
        width: 95%
        .shop-content-main
          display: flex
          flex-wrap: wrap
          justify-content: space-between
          margin-bottom: 130px
          width: 100%
          .shop-item
            width: 49%
            border-radius: 5px
            .item-img
              position: relative
              width: 100%
              .item-img-tag
                position: absolute
                top: 10px
                left: 10px
            .item-info
              padding: 10px 10px 30px
              width: 100%
              .item-info-title
                font-weight: bold
                font-size: 16px
              .item-info-desc
                margin: 10px 0 5px
                color: #7f7f7f
                font-size: 16px
              .goods-price
                display: flex
                margin-top: 8px
                width: 100%
                font-weight: bold
                font-size: 14px
                .goods-discount
                  color: #d44d44
                .goods-orignal
                  margin-left: 5px
                  color: #b2b2b2
                  text-decoration: line-through
    .bottom-bar
      position: fixed
      right: 0
      bottom: 60px
      left: 0
      z-index: 90
      display: flex
      justify-content: space-between
      align-items: center
      box-sizing: border-box
      padding: 0 12px
      height: 54px
      background: #fafafa
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
      color: #666
      font-size: 12px
      .select-info
        display: flex
        align-items: center
        span
          margin-left: 10px
          span
            font-weight: bold
            font-size: 14px
          .red
            color: #f00
      .sum-info
        display: flex
        align-items: center
        .desc
          margin-right: 10px
          .desc-p1
            margin-bottom: 10px
            color: #000
            font-weight: bold
            font-size: 12px
            span
              color: #d44d44
        .btn
          display: block
          height: 40px
          border-radius: 6px
          background: #5e8bdd
          background: linear-gradient(#6f94e8, #5178df)
          box-shadow: inset 0 -1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)
          color: #fff
          text-align: center
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.15)
          font-size: 14px
          line-height: 40px
        .delect
          background: linear-gradient(#bfbfbf, #999)
          background-color: #acacac
</style>
