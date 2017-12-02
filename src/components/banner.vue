<template>
  <el-carousel indicator-position="none" interval="4000">
    <el-carousel-item v-for="item in imgArr" :key="item.id">
      <img :src="item.src" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "banner",
  data() {
    return {
      imgArr: [
        { id: '1', src: "./src/assets/banner01.jpg" },
        { id: '2', src: "./src/assets/banner02.jpg" },
        { id: '3', src: "./src/assets/banner03.jpg" },
        { id: '4', src: "./src/assets/banner04.jpg" }
      ]
    };
  }
};
</script>
<style>
.el-carousel {
  width: 960px;
  margin: 0 auto;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
@media (min-width: 768px) {
  .el-carousel {
    width: 750px;
    margin: 0 auto;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
  }
}
.el-carousel__item img {
  max-height: 100%;
  max-width: 100%;
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item {
  border-radius: 8px;
}
.container {
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
}
</style>