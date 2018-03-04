<template>
  <ul class="note-list">
    <li class="have-img" v-if='artList.data' v-for="item in artList.data" :key="item._id">
      <a class="wrap-img" href="/" target="_blank">
        <img class="img-blur-done" :src="item.avatarImg" alt="120">
      </a>
      <div class="content">
        <div class="author">
          <a class="avatar" target="_blank">
            <img :src="item.imgSrc" alt="64">
          </a>
          <div class="info">
            <a class="nickname" target="_blank">{{item.username}}</a>
            <span class="time" data-shared-at="2017-12-02T22:10:22+08:00">1小时前</span>
          </div>
        </div>
        <a class="title" target="_blank">{{item.title}}</a>
        <p class="abstract">
          {{item.content}}
        </p>
        <div class="meta">
          <a target="_blank">
            <i class="iconfont ic-list-read el-icon-view"></i> {{item.attention}}
          </a>
          <a target="_blank" >
            <i class="iconfont ic-list-comments el-icon-message"></i> 0
          </a>
          <span>
            <i class="iconfont ic-list-like el-icon-star-on"></i>{{item.comment}}</span>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "indexArtList",
  props: ["artList"]
};
</script>
<style>
.note-list .have-img > div {
  padding-right: 160px;
}
.note-list .author {
  margin-bottom: 14px;
  font-size: 13px;
}
.note-list .abstract {
  margin: 0 0 8px;
  font-size: 13px;
  line-height: 24px;
}
.note-list .author .avatar,
.note-list .author .info {
  display: inline-block;
  vertical-align: middle;
}
.note-list .author .avatar {
  margin: 0 5px 0 0;
}
.note-list .author a {
  color: #333;
}
.avatar {
  width: 32px;
  height: 32px;
  display: block;
  cursor: pointer;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
img {
  vertical-align: middle;
}
.note-list .author .info .nickname {
  vertical-align: middle;
}
.note-list .author a {
  color: #333;
}
.note-list .author .info span {
  display: inline-block;
  padding-left: 3px;
  color: #969696;
  vertical-align: middle;
}
.note-list .author .time {
  color: #969696;
}
.note-list .meta {
  padding-right: 0 !important;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}
.note-list .meta span {
  margin-right: 10px;
  color: #b4b4b4;
}
.note-list .have-img .wrap-img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 1px solid #f0f0f0;
}
.img-blur,
.img-blur-done {
  transition: all 0.2s cubic-bezier(0.78, 0.14, 0.15, 0.86);
}
img {
  vertical-align: middle;
}
.note-list .have-img .wrap-img {
  position: absolute;
  top: 50%;
  margin-top: -68px;
  right: 0;
  width: 150px;
  height: 120px;
}
.note-list li.have-img {
  min-height: 140px;
}
.note-list li {
  position: relative;
  width: 100%;
  margin: 0 0 17px;
  padding: 0 2px 17px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
}
li {
  line-height: 20px;
}
.note-list .title {
  margin: -7px 0 4px;
  display: inherit;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.5;
}
a {
  cursor: pointer;
}
a,
body {
  color: #333;
}
</style>
