<template>
  <div class='sign'>
    <div class='main'>
        <h4 class="title">
            <div class="normal-title">
                <router-link to="/sign_in" class="active">登录</router-link>
                <b>·</b>
                <router-link id="js-sign-up-btn" to="/sign_up">注册</router-link>
            </div>
        </h4>
        <div class='js-sign-in-container'>
            <div class='sign_form'>
                <div class="input-prepend restyle js-normal">
                    <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number">
                    <i class="iconfont ic-user"></i>
                </div>
                <div class="input-prepend">
                    <input placeholder="密码" type="password" name="session[password]" id="session_password">
                    <i class="iconfont ic-password"></i>
                </div>
                <div class="remember-btn">
                    <input type="checkbox" value="true" checked="checked" name="session[remember_me]" id="session_remember_me"><span>记住我</span>
                </div>
                <input type="submit" name="commit" value="登录" class="sign-in-button" data-disable-with="登录">
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: 'sign_in'
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
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
        vertical-align: middle;
    }
    .sign .sign_form .input-prepend {
        /* position: relative; */
        width: 100%;
        margin-bottom: 20px;
    }
    .sign .sign_form .input-prepend input {
        width: 100%;
        height: 50px;
        margin-bottom: 0;
        padding: 4px 12px 4px 35px;
        border: 1px solid #c8c8c8;
        border-radius: 0 0 4px 4px;
        background-color: hsla(0,0%,71%,.1);
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
    .sign .sign-in-button, .sign .sign-up-button {
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
