<template>
    <div id="asideMenu">
        <el-row style="height: 100%;">
        <el-col :span="4"  style="min-height: 100%; background-color: #324057;width:100%">
            <div style="height:200px;text-align:center;">
            <img 
                src="https://avatars3.githubusercontent.com/u/20215975?s=400&u=70cd2ff9db05211275e5675f80f63d406ebb0ac2&v=4" 
                alt=""
                style="width:100px;margin-top:30px;border-radius: 15%;">
            </div>
            <el-menu 
            :default-active="defaultActive"
            background-color="rgb(50, 65, 87)"
            text-color="#fff"
            active-text-color="#ffd04b"
            style="min-height: 100%;" 
            theme="dark" 
            router>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>管理员</template>
                <el-menu-item index="userAdmin">用户管理</el-menu-item>
                <el-menu-item index="writeArt">文章编辑</el-menu-item>
                <el-menu-item index="articleList">文章列表</el-menu-item>
            </el-submenu>
            </el-menu>
        </el-col>
		</el-row>
    </div>
</template>

<script>
export default {
    name: 'asideMenu',
    computed: {
        defaultActive: function(){
        return this.$route.path.replace('/', '');
        }
    },
}
</script>

