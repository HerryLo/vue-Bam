<template>
    <div class="marginLR">
        <div class='imgLogo'>
            <img :src="logo" alt="图片">
            <span>LiuHeng</span>
        </div>
        <div class='login'>
            <a>登录</a>
            <a>注册</a>
        </div>
    </div>
</template>

<script>
import logo from '../assets/logo.png'

export default {
    name: 'header',
    data() {
        return {
            activeIndex: '1',
            logo: logo
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
.marginLR{
    margin: 0px 400px;
    position: relative;
    height: 100%;
}
.login{
    position: absolute;
    right: 0px;
    top: 20px;
}
.login a{
    margin-left: 10px;
    display:inline-block;
    cursor: pointer;
}
.imgLogo{
    height:100%;
}
.imgLogo>img{
    height: 80%;
    position: relative;
    top: 8px;
}
</style>
