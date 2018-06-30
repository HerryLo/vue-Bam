<template>
   <!-- bidirectional data binding（双向数据绑定） -->
   <div style="height:100%">
     <div style="width:800px;margin-bottom:20px;">
       <el-upload
          class="upload-demo"
          action=""
          :auto-upload="false"
          multiple
          :limit="1"
          :file-list="fileList"
          :before-remove="beforeRemove"
          :on-exceed="handleExceed"
          :on-change="changeFile"
          style="margin-bottom: 20px;">
          <el-button size="small" type="primary">上传图片</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
       <el-input placeholder="请输入标题" v-model="title">
        <template slot="prepend">标题</template>
       </el-input>
       <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入描述内容"
        v-model="desc">
       </el-input>
     </div>
     <quill-editor
        style="width:800px;height:450px;background:#fff;padding-bottom: 60px;"
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
      </quill-editor>
      <div style="margin-top:20px;">
        <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)">
        {{tag}}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm">
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ 标签</el-button>
      </div>
      <el-button @click="submit" type="primary" style="margin-top: 20px;">提交</el-button>
   </div>

</template>
<script>
// import Quill from "quill";
import { createarticle } from "../../config/API";
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'

export default {
  data() {
    return {
      content: "<h2>文章编辑</h2>",
      editorOption: {
        // some quill options
      },
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      title: "",
      desc: "",
      fileList: []
    };
  },
  methods: {
    onEditorBlur(quill) {
      console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      console.log("editor ready!", quill);
    },
    onEditorChange({ quill, html, text }) {
      console.log("editor change!", quill, html, text);
      this.content = html;
    },
    /**
     * 删除标签
     */
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },
    /**
     * 标签的输入框是否显示
     */
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    /**
     * 确认保存标签
     */
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },
    /**
     * 图片个数限制
     */
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    /**
     * 移除图片
     */
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    /**
     * 文件状态改变时
     */
    changeFile(file, fileList) {
      this.fileList = fileList
    },
    checkParam() {
      const data = this.$data;
      if(data.fileList.length == 0){
        this.$message.warning('请上传图片文件');
        return false;
      }else if(!data.content || data.content.length < 20){
        this.$message.warning('文章内容小于20个字');
        return false;
      }else if(data.dynamicTags.length == 0){
        this.$message.warning('请输入标签类型');
        return false;
      }else if(!data.desc){
        this.$message.warning('请文章描述内容');
        return false;
      }else if(!data.title){
        this.$message.warning('请输入文章标题');
        return false;
      }
      return true
    },
    /**
     * 提交按钮
     */
    async submit() {
      const data = this.$data
      let formdata = new FormData();
      if(!this.checkParam()) return false;
      formdata.append('file', data.fileList[0].raw);
      formdata.append('oneNumber', 0);
      formdata.append('content', data.content);
      formdata.append('tag',data.dynamicTags);
      formdata.append('desc', data.desc);
      formdata.append('title', data.title);
      const result =await createarticle(formdata);
      if(result){
        console.log(result);
        this.$router.push({ path : 'articleList'})
      }
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
  },
  components: {
    quillEditor
  }
};
</script>
<style>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>

