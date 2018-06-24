<template>
  <div>
  <el-table
    :data="dataList"
    style="width: 100%;"
    max-height="250"
    cell-class-name="word-style">
    <el-table-column
      fixed
      prop="regtime"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="user"
      label="用户名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="_id"
      label="用户ID"
      width="250">
    </el-table-column>
    <el-table-column
      prop="isadmin"
      label="管理员"
      width="120">
    </el-table-column>
    <el-table-column
      prop="photo"
      label="电话"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, dataList)"
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
import { userlist } from "../../config/API";
import { formatTime } from "../../config/utils";

export default {
  data() {
    return {
      dataList:[]
    };
  },
  mounted() {

  },
  created(){
    this.userlist();
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    async userlist() {
      const result = await userlist();
      this.formatter(result.data)
    },
    async formatter(row) {
      let data = row
      for(let i=0;i<data.length;i++){
        data[i].isadmin = data[i].isadmin?'是':'否';
        data[i].regtime = formatTime(new Date(data[i].regtime));
      }
      this.dataList =JSON.parse(JSON.stringify(data))
    }
  }
};
</script>

<style>
  .word-style{
    overflow:hidden;
    text-overflow:ellipsis!important;
    white-space:nowrap!important;
  }
</style>


