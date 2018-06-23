<template>
    <div>
        <el-table
        :data="tableData4"
        style="width: 100%"
        max-height="250">
        <el-table-column
        fixed
        prop="date"
        label="日期"
        width="200">
        </el-table-column>
        <el-table-column
        prop="name"
        label="用户名"
        width="120">
        </el-table-column>
        <el-table-column
        prop="province"
        label="管理员"
        width="300">
        </el-table-column>
        <el-table-column
        prop="city"
        label="电话"
        width="120">
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
            移除
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
export default {
  name: "articleList",
  data() {
    return {
      tableData4: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  created() {
    this.userlist();
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  }
};
</script>

<style>
</style>

