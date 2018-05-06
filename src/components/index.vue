<template>
<el-container style="height: 100%;">
  <el-aside width="200px" style="background-color: rgb(50, 65, 87);">
    <div style="height:200px;text-align:center;">
      <img 
        src="https://avatars3.githubusercontent.com/u/20215975?s=400&u=70cd2ff9db05211275e5675f80f63d406ebb0ac2&v=4" 
        alt=""
        style="width:100px;margin-top:30px;border-radius: 15%;">
    </div>
    <el-menu 
      :default-openeds="['1']"
      default-active="2"
      background-color="rgb(50, 65, 87)"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message">管理员</i></template>
        <el-menu-item-group>
          <template slot="title">管理</template>        
          <el-menu-item index="1-1" @click="toRouter('/userAdmin')">
            用户管理
          </el-menu-item>
          <el-menu-item index="1-2" @click="toRouter('/writeArt')">
            文章编辑
          </el-menu-item>
        </el-menu-item-group>
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
            { index: "1-1", name: "用户管理", url: "/userAdmin" },
            { index: "1-2", name: "文章编辑", url: "/writeArt" }
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
  methods: {
    toRouter(url) {
      this.$router.push({path: url})
    }
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
a:hover {
  color: #333;
}
</style>

