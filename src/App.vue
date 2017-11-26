<template>
  <div id="app">
    <el-container>
        <el-header>
            <TopHeader />
        </el-header>
        <el-main>  
          <router-view />
        </el-main>
        <el-footer >
            footer
        </el-footer>
    </el-container>
  </div>
</template>

<script>
import TopHeader from './components/header'
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
}
body,html{
  margin: 0;
}
</style>
