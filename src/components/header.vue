<template>
    <nav class="navbar-default" style="border-color: #f0f0f0;" v-show="navstate">
    <div class="marginLR">
        <div class='imgLogo'>
            <img :src="logo" alt="图片">
            <span></span>
        </div>
        <div style="float: left;" class='search'>
            <ul class="navbar-nav">
                <li class="tab active">
                <router-link to="/">
                    <span class="menu-text">首页</span><i class="iconfont ic-navigation-discover menu-icon"></i>
                </router-link>
                </li>
                <li class="search">
                    <form target="_blank" action="/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="✓">
                    <input type="text" name="q" id="q" value="" autocomplete="off" placeholder="搜索" class="search-input">
                    <a class="search-btn" href="javascript:void(null)"><i class="el-icon-search ic-search iconfont"></i></a>
                    </form>         
                </li>
            </ul>
        </div>
        <div class='login'>
            <router-link to="/" class="btn log-in">登录</router-link>
            <router-link to="/" class="btn sign-in">注册</router-link>
            <router-link to="/" class="btn sign-in article_bg ">
                <i class="el-icon-edit"></i>写文章
            </router-link>
        </div>
    </div>
    </nav>
</template>

<script>
import logo1 from '../assets/logo1.png'
import {mapState} from 'vuex';

export default {
    name: 'header',
    data() {
        return {
            activeIndex: '1',
            logo: logo1
        }
    },
    computed:{
        ...mapState({
            navstate : state=>state.navstate
        })
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
    color:#969696;
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
.navbar-nav{
    margin-left:19rem;
    list-style:none;
}
.navbar-nav li{
    float:left;
    margin-right: 53px;
}
.navbar-nav li a{
    text-decoration: none;
    color: #ea6f5a;
    font-size:18px;
}
.navbar-nav li .search{
    padding-left: 15px;
}
.navbar-nav li form {
    position: relative;
    top: -5px;
}
form {
    margin: 0 0 5px;
}
.navbar-nav li form .search-input {
    padding: 0 40px 0 20px;
    width: 160px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width .5s;
    -moz-transition: width .5s;
    -webkit-transition: width .5s;
    -o-transition: width .5s;
    transition-delay: .1s;
    -moz-transition-delay: .1s;
    -webkit-transition-delay: .1s;
    -o-transition-delay: .1s;
}
.navbar-nav li form .search-btn {
    position: absolute;
    top: 7px;
    right: 5px;
    width: 30px;
    height: 30px!important;
    line-height: normal!important;
    padding: 0!important;
    color: #969696!important;
    text-align: center;
}
#navbar-search-tips, #navbar-search-tips:before {
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
}
#navbar-search-tips {
    margin-top: 9px;
    width: 250px;
    left: 0;
    top: 100%;
    visibility: hidden;
    opacity: 0;
    border-radius: 4px;
}
</style>
