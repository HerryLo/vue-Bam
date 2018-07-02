<template>
    <div>
        <el-row type="flex" justify="end">
          <el-col :span="3">
            <el-button type="primary" @click="AddArt" icon="el-icon-edit">添加文章</el-button>
          </el-col>
        </el-row>
        <el-table
        :data="list"
        style="width: 100%"
        max-height="250">
        <el-table-column
        fixed
        prop="createTime"
        label="创建时间"
        width="200">
        </el-table-column>
        <el-table-column
        prop="userId"
        label="用户ID"
        width="250">
        </el-table-column>
        <el-table-column
        prop="username"
        label="创建者名称"
        width="150">
        </el-table-column>
        <el-table-column
        prop="title"
        label="标题"
        width="200">
        </el-table-column>
        <el-table-column
        prop="imgUrl"
        label="图片地址"
        width="150">
        </el-table-column>
        <el-table-column
        prop="oneNumber"
        label="查看人数"
        width="150">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="Gorouter(scope.$index, tableData4)"
            type="text"
            size="small">
            编辑
            </el-button>
            <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
            type="text"
            size="small">
            下架
            </el-button>
        </template>
        </el-table-column>
        </el-table>
        <el-pagination
            style="margin-top: 20px;float:right"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
  </div>
</template>

<script>
import { articlelist } from '../../config/API'
import { formatTime } from "../../config/utils";

export default {
  name: "articleList",
  data() {
    return {
      tableData4: [
        {
          date: "2016-05-03",
          name: "123123123123123123",
          province: "上海",
          title: "普陀区awdasdasd",
          imgurl: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      skip: 0,
      limit: 20,
      list: []
    };
  },
  created() {
    this.dataList();

  },
  methods: {
    /**
     * 文章下架
     */
    deleteRow(index, rows) {
      
    },
    /**
     * 编辑
     */
    Gorouter(index, rows) {

    },
    /**
     * 添加文章
     */
    AddArt() {
      this.$router.push({path: 'writeArt', query: { id: 'add' }})
    },
    /**
     * 获取文章列表
     */
    async dataList() {
      const params = { skip: this.skip, limit: this.limit };
      const result = await articlelist(params)
      this.formatter(result.data)
    },
    /**
     * 数据过滤
     */
    async formatter(row) {
      let data = row
      for(let i=0;i<data.length;i++){
        data[i].createTime = formatTime(new Date(data[i].createTime));
        if(typeof data[i].tags != "string" ){
          data[i].tags = JSON.stringify(data[i].tags)
        }
      }
      this.list = data
      console.log(this.list)
    }
  }
};
</script>

<style>
  .el-row{
    margin-bottom: 20px;
  }
</style>

