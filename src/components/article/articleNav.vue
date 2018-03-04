<template>
    <ul class="trigger-menu" data-pjax-container="#list-container">
        <li class="">
            <a>
                <i class="iconfont ic-latestcomments el-icon-document"></i> 最新评论</a>
        </li>
        <li class="active">
            <a>
                <i class="iconfont ic-articles el-icon-message"></i> 最新收录</a>
        </li>
        <li class="">
            <a>
                <i class="iconfont ic-hot el-icon-star-on"></i> 热门</a>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'articleNav'
}
</script>
<style>
.trigger-menu {
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  font-size: 0;
  list-style: none;
}
.trigger-menu li {
  position: relative;
  display: inline-block;
  padding: 8px 0;
  margin-bottom: -1px;
}
.trigger-menu li.active {
  border-bottom: 2px solid #646464;
}
li {
  line-height: 20px;
}
.trigger-menu a {
  padding: 13px 20px;
  font-size: 15px;
  font-weight: 700;
  color: #969696;
  line-height: 25px;
}
a {
  cursor: pointer;
}
.trigger-menu i {
  margin-right: 5px;
  font-size: 17px;
}
.trigger-menu li:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -2px;
  width: 100%;
  opacity: 0;
  border-bottom: 2px solid #646464;
  transform: translate(-50%) scaleX(0);
  -webkit-transform: translate(-50%) scaleX(0);
  -moz-transform: translate(-50%) scaleX(0);
  -o-transform: translate(-50%) scaleX(0);
  -ms-transform: translate(-50%) scaleX(0);
}
</style>
