<template>
  <Tabbar
    v-model="active"
    active-color="#d55148"
    inactive-color="#ababab"
  >
    <TabbarItem
      icon="home-o"
      to="/"
    >首页</TabbarItem>
    <TabbarItem
      icon="search"
      to="/category"
    >分类</TabbarItem>
    <TabbarItem
      icon="friends-o"
      to="/shopcat"
    >购物车</TabbarItem>
    <TabbarItem
      icon="setting-o"
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
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped></style>
