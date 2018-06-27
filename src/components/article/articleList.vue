<template>
    <div>
        <el-table
        :data="tableData4"
        style="width: 100%"
        max-height="250">
        <el-table-column
        fixed
        prop="date"
        label="创建时间"
        width="200">
        </el-table-column>
        <el-table-column
        prop="name"
        label="用户ID"
        width="250">
        </el-table-column>
        <el-table-column
        prop="province"
        label="创建者名称"
        width="100">
        </el-table-column>
        <el-table-column
        prop="title"
        label="标题"
        width="200">
        </el-table-column>
        <el-table-column
        prop="imgurl"
        label="图片地址"
        width="150">
        </el-table-column>
        <el-table-column
        fixed="right"
        label="操作"
        width="120">
        <template slot-scope="scope">
            <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData4)"
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
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    async dataList() {
      const params = { skip: this.skip, limit: this.limit };
      const result = await articlelist(params)
      this.list = result.result;
    }
  }
};
</script>

<style>
</style>

