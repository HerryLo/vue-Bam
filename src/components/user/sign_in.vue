<template>
  <div class='sign'>
    <div class='main'>
        <h4 class="title">
            <div class="normal-title">
                <router-link to="/sign_in" class="active">登录</router-link>
                <!-- <b>·</b>
                <router-link id="js-sign-up-btn" to="/sign_up">注册</router-link> -->
            </div>
        </h4>
        <div class='js-sign-in-container'>
            <div class='sign_form'>
                <el-input style="width:300px;margin-bottom:10px" v-model="user" placeholder="手机号或邮箱"></el-input>
                <el-input style="width:300px;margin-bottom:30px" v-model="password" type="password" placeholder="密码"></el-input>
                <el-row>
                    <el-button style="width:100%" type="primary" @click="login">登录</el-button>
                </el-row>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { login } from "../../config/API";
import config from "../../config/config";
import md5 from "md5";

    export default {
        name: 'sign_in',
        data() {
            return {
                user: '',
                password: ''
            }
        },
        methods: {
            async login() {
                let { user, password, photo } = this;
                let params = { user, password: md5(password + config.scrent)}
                const result = await login(params);
                if (result.data.code == 0 && result.status == 200) {
                    this.$message(
                    {
                        message: "登录成功",
                        type: "success"
                    }
                    );
                    localStorage.setItem('LHToken', result.data.token)
                    this.$router.push({ path: "/userAdmin" });
                }else{
                    this.$message({
                        message: result.data.desc,
                        type: "warning"
                    });
                }
            }
        }
    }
</script>

<style>
    .h4, h4 {
        font-size: 18px;
    }
    .sign {
        height: 100%;
        min-height: 750px;
        text-align: center;
        font-size: 14px;
        background-color: #f1f1f1;
    }
    .sign .main {
        width: 400px;
        margin: 60px auto 0;
        padding: 50px 50px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        vertical-align: middle;
        display: inline-block;
    }
    .sign .reset-title, .sign .title {
        margin: 0 auto 50px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
    }
    .sign .reset-title, .sign .title {
        margin: 0 auto 50px;
        padding: 10px;
        font-weight: 400;
        color: #969696;
    }
    .sign .title .active {
        font-weight: 700;
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
    }
    .sign .title a {
        padding: 10px;
        color: #969696;
    }
    .sign_form {
        margin-bottom: 30px;
    }
</style>
