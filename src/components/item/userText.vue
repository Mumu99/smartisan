<template>
  <div
    class="userText"
    id="userText"
  >
    <div class="title van-hairline--bottom">
      <h2>用户评价 (1888)</h2>
      <p>
        查看全部
        <Icon
          class="left"
          name="arrow"
        />
      </p>
    </div>
    <div class="userInfo">
      <div class="top">
        <!-- <img src="" alt=""> -->
        <Icon
          class="userAvator"
          name="flower-o"
        />
        <div class="phone">139****1867</div>
        <Rate
          v-model="value"
          :size="14"
          color="#ffd21e"
          void-icon="star"
          void-color="#eee"
        />
      </div>
      <div class="user-content van-multi-ellipsis--l2">
        质量特别好，音质也很赞 已经推荐身边朋友购买 在活动期间买是最优惠的
        下次再搞点活动可以看看其他商品，性价比都超级赞哦
      </div>
    </div>
  </div>
</template>

<script>
import { Icon, Rate } from 'vant'
export default {
  name: 'UserText',
  components: {
    // 注册组件
    Icon, Rate
  },
  data () {
    return {
      value: 5
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.userText
  margin-top: 10px
  padding: 10px 8px
  width: 100%
  background-color: #fff
  .title
    display: grid
    padding: 10px 8px
    color: #666666
    font-size: 16px
    grid-template-columns: 1fr 1fr
    p
      text-align: right
      .left
        top: 1.3px
  .userInfo
    padding: 10px 8px
    .top
      display: grid
      align-items: center
      font-size: 18px
      grid-template-columns: 1fr 2fr 3fr
      .userAvator
        width: 35px
        height: 35px
        border-radius: 50%
        background-color: #ebebeb
        font-size: 35px
    .user-content
      margin-top: 10px
      font-size: 14px
      line-height: 18px
</style>
