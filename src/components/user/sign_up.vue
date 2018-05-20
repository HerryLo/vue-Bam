<template>
  <div class='sign'>
    <div class='main'>
        <h4 class="title">
            <div class="normal-title">
                <router-link to="/sign_in" >登录</router-link>
                <b>·</b>
                <router-link id="js-sign-up-btn" to="/sign_up" class="active">注册</router-link>
            </div>
        </h4>
        <div class='js-sign-in-container'>
            <div class='sign_form'>
                <div class="input-prepend restyle js-normal">
                    <input placeholder="你的昵称" v-model="user" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number">
                    <i class="iconfont ic-user"></i>
                </div>
                <div class="input-prepend restyle js-normal">
                    <input placeholder="手机号" v-model="photo" type="number" name="session[password]" id="session_photo">
                    <i class="iconfont ic-password"></i>
                </div>
                <div class="input-prepend">
                    <input placeholder="设置密码" v-model="password" type="password"  >
                    <i class="iconfont ic-password"></i>
                </div>
                <input type="submit" v-on:click="register" name="commit" value="注册" class="sign-in-button" >
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { register } from "../../config/API";
import config from "../../config/config";
import md5 from "md5";

export default {
  name: "sign_up",
  data() {
    return {
      user: "",
      password: "",
      photo: ""
    };
  },
  mounted() {},
  methods: {
    async register() {
      let { user, password, photo } = this;
      if (!user || !password || !photo) {
        this.$message({
          message: "请输入用户名或密码/ 手机号",
          type: "warning"
        });
        return false;
      }
      let params = { user, password: md5(password + config.scrent), photo, isadmin: true};
      const result = await register(params);
      if (result.data.code == 0 && result.status == 200) {
        this.$message(
          {
            message: "恭喜你，注册成功",
            type: "success"
          }
        );
        this.$router.push({ path: "/sign_in" });
      } else {
        this.$message({
          message: result.data.desc,
          type: "warning"
        });
      }
    }
  }
};
</script>

<style>
.h4,
h4 {
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
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
  display: inline-block;
}
.sign .reset-title,
.sign .title {
  margin: 0 auto 50px;
  padding: 10px;
  font-weight: 400;
  color: #969696;
}
.sign .reset-title,
.sign .title {
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
.sign div.sign_form .restyle {
  margin-bottom: 0;
}
.sign .sign_form .input-prepend {
  position: relative;
  width: 100%;
  margin-bottom: 20px;
}
.sign .sign_form .restyle input {
  border-bottom: none;
  border-radius: 4px 4px 0 0;
}
.sign .sign_form .input-prepend input {
  width: 50%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
}
.sign .sign_form .input-prepend {
  /* position: relative; */
  width: 100%;
  margin-bottom: 20px;
}
.sign .sign_form .input-prepend input {
  width: 50%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  border-radius: 0 0 4px 4px;
  background-color: hsla(0, 0%, 71%, 0.1);
  vertical-align: middle;
}
.sign .remember-btn {
  float: left;
  margin: 15px 0;
}
.sign .remember-btn span {
  margin-left: 5px;
  font-size: 15px;
  color: #969696;
  vertical-align: middle;
}
.sign .sign-in-button {
  background: #3194d0;
}
.sign .sign-in-button,
.sign .sign-up-button {
  width: 100%;
  padding: 9px 18px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #42c02e;
  cursor: pointer;
  outline: none;
  display: block;
  clear: both;
}
</style>
