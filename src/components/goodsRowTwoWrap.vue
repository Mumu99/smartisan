<template>
  <section class="goods-row-wrap">
    <div
      class="title"
      v-if="goodsRow2.titleConfig"
    >
      <h2>{{goodsRow2.titleConfig.title}}</h2>
      <span>{{goodsRow2.titleConfig.linkText}}
        <Icon name="arrow" /></span>
    </div>
    <!-- 商品 -->
    <div class="goods-shop">
      <ul class="shop-content">
        <li
          class="s-item"
          v-for="item in goodsRow2.skuInfo"
          :key="item.uuid"
        >
          <figure class="s-item-top">
            <span class="green">直降</span>
            <img
              :src="item.images"
              alt=""
              width="100"
              height="100"
            >
          </figure>
          <article class="s-item-bom">
            <p class="van-multi-ellipsis--l2">{{item.skuTitle}}</p>
            <div class="goods-price">
              <span class="discount">￥{{item.discountPrice}}</span>
              <span class="orignal">￥{{item.originalPrice}}</span>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { Icon } from 'vant'
export default {
  name: 'GoodsRowWrap',
  components: {
    // 注册组件
    Icon
  },
  props: {
    goodsRow2: Object
  },
  data () {
    return {

    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
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
            font-size: 10px
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
</style>
