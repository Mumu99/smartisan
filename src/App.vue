<template>
  <div id="app">
    <Download />
    <Footer v-if="$route.meta.isShowFooter" />
    <router-view />
  </div>
</template>

<script>
// 顶部广告
import Download from './components/download'
import Footer from './pages/footer'
export default {
  name: 'App',
  components: {
    Footer,
    Download
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding-bottom: 54px;
  height: 100%;
}
</style>
