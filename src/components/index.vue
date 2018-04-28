<template>
<el-container style="height: 100%;">
  <el-aside width="200px" style="background-color: rgb(50, 65, 87);">
    <el-menu :default-openeds="[]">
      <el-submenu :index="item.index" v-for="item in nav" :key="item.index">
        <template slot="title"><i class="el-icon-message"></i>{{item.name}}</template>
        <el-submenu index="route.index" v-for="route in item.routes" :key="route.index">
          <template slot="title">{{route.name}}</template>
          <el-menu-item :index="child.index" v-for="child in route.child" :key="child.index">
            <router-link :to="child.url">{{child.name}}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container style="height: aoto;">
    <el-header>
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
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

export default {
  name: "Index",
  data() {
    return {
      nav: [
        {
          index: "1",
          name: "管理员",
          routes: [
            {
              index: "1-1",
              name: "管理",
              child: [{ index: "1-1", name: "文章编辑", url: '/writeArt' }]
            }
          ]
        }
      ]
    };
  },
  created() {
    // artListAPI("")
    //   .then(res => {
    //     this.artList = res.data;
    //     console.log(this.artList.data);
    //   })
    //   .catch(res => {
    //     console.log(res.data);
    //   });
  },
  components: {}
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
a:hover{
  color: #333;
}
</style>

