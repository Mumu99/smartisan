<template>
  <Tabbar
    v-model="active"
    active-color="#d55148"
    inactive-color="#ababab"
    class="tab"
  >
    <TabbarItem
      icon="home-o"
      to="/home"
    >首页</TabbarItem>
    <TabbarItem
      icon="bars"
      to="/category"
    >分类</TabbarItem>
    <TabbarItem
      icon="shopping-cart"
      to="/shopcat"
    >购物车</TabbarItem>
    <TabbarItem
      icon="manager"
      to="/user"
    >个人中心</TabbarItem>
  </Tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
export default {
  name: '',
  components: {
    // 注册组件
    Tabbar,
    TabbarItem
  },
  data () {
    return {
      active: 0
    }
  },
  mounted () {
    this.active = this.$route.meta.active
    // console.log(this.$route)
    // if(this.$route){}
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
.tab
  z-index: 5
</style>
