<template>
    <nav class="navbar-default" style="border-color: #f0f0f0;">
    <div class="marginLR">
        <div class='imgLogo'>
            <img :src="logo" alt="图片">
            <span></span>
        </div>
        <div class='login'>
            <a class="btn log-in">登录</a>
            <a class="btn sign-in">注册</a>
            <a class="btn sign-in article_bg ">
                <i class="el-icon-edit"></i>写文章</a>
        </div>
    </div>
    </nav>
</template>

<script>
import logo1 from '../assets/logo1.png'

export default {
    name: 'header',
    data() {
        return {
            activeIndex: '1',
            logo: logo1
        }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style>
.navbar-default {
    background-color: #fff;
    border-color: #f0f0f0;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    min-height: 56px;
    border: 1px solid transparent;
    margin-bottom: 20px;
}
.marginLR{
    position: relative;
    height:56px;
    width: 100%;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
}
.login{
    position: absolute;
    right: 0px;
}
.login a.sign-in{
    margin-left: 10px;
    display:inline-block;
    cursor: pointer;
    width: 80px;
    height: 24px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
}
.login a.log-in{
    margin: 11px 6px 0 10px;
    font-size: 15px;
}
.login .btn{
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.login a.article_bg{
background-color: #ea6f5a;
color:#fff;
}
.imgLogo{
    height:100%;
    position:absolute;
}
.imgLogo>img{
    height: 80%;
    position: relative;
    top: 8px;
}
</style>
