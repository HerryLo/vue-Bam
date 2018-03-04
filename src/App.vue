<template>
  <div>
    <TopHeader />
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
import TopHeader from './components/header'
import './style/index.css'

export default {
  name: 'app',
  components:{
      TopHeader: TopHeader
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height:100%;
  padding-top:56px;
}
*{
  box-sizing: border-box;
}
</style>
