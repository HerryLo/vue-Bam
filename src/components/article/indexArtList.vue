<template>
    <div>
        <ul class="note-list">
            <li class="have-img">
                <a class="wrap-img" href="/p/c5d761b9e01e" target="_blank">
                    <img class="  img-blur-done" src="//upload-images.jianshu.io/upload_images/3810775-d4361a41b22572b1.png?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="120">
                </a>
                <div class="content">
                    <div class="author">
                        <a class="avatar" target="_blank" href="/u/9142b2802fa2">
                            <img src="//upload.jianshu.io/users/upload_avatars/3810775/25aeca3f-5cab-4597-b8c4-2abd10fedd03.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" alt="64">
                        </a>
                        <div class="info">
                            <a class="nickname" target="_blank" href="/u/9142b2802fa2">HustWolf</a>
                            <span class="time" data-shared-at="2017-12-02T22:10:22+08:00">1小时前</span>
                        </div>
                    </div>
                    <a class="title" target="_blank" href="/p/c5d761b9e01e">【计算机本科补全计划】CCF计算机职业资格认证 201709-01/02详解</a>
                    <p class="abstract">
                        正文之前 貌似我找到的那个题目网站更新了一波最新的题目。不过201709 只有1、2 题，所以先做了吧（其实是我自己对能不能做出第三题 持怀疑态度！）宝宝心里苦啊！！！😭！！...
                    </p>
                    <div class="meta">
                        <a target="_blank" href="/p/c5d761b9e01e">
                            <i class="iconfont ic-list-read"></i> 54
                        </a>
                        <a target="_blank" href="/p/c5d761b9e01e#comments">
                            <i class="iconfont ic-list-comments"></i> 0
                        </a>
                        <span>
                            <i class="iconfont ic-list-like"></i> 3</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "indexArtList"
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
.img-blur, .img-blur-done {
    transition: all .2s cubic-bezier(.78,.14,.15,.86);
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
a, body {
    color: #333;
}
</style>
