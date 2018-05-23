<template>
  <el-container style="height: 100%;">
    <el-aside width="200px" style="background-color: rgb(50, 65, 87);">
      <aside-menu></aside-menu>
    </el-aside>
    
    <el-container style="height: aoto;">
      <el-header>
        <span>admin</span>
      </el-header>
      <el-main style="background:#eee;">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { artListAPI } from "../config/API";
import asideMenu from './common/asideMenu'

export default {
  name: "Index",
  data() {
    return {};
  },
  mounted() {

  },
  methods: {
    toRouter(url) {
      this.$router.push({path: url})
    }
  },
  components: {
    asideMenu
  }
};
</script>

<style>
.el-header {
  background-color: #242f42;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
  color: #fff;
}

.el-aside {
  color: #333;
}
a:hover {
  color: #333;
}
</style>

