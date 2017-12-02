<template>
  <div>
    <Banner />
    <div class="container">
      <div class='row'>
        <div class='col-xs-24 col-sm-16 main'>
          <articleNav />
          <indexArtlist />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import banner from "./banner";
import articleNav from "./article/articleNav.vue";
import indexArtList from "./article/indexArtList.vue";

export default {
  name: "Index",
  components: {
    Banner: banner,
    articleNav: articleNav,
    indexArtlist: indexArtList
  }
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
