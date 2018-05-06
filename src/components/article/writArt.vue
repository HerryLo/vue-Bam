<template>
   <!-- bidirectional data binding（双向数据绑定） -->
   <div style="height:100%">
     <div style="width:800px;margin-bottom:20px;">
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
      <el-button type="primary" style="margin-top: 20px;">提交</el-button>
   </div>

</template>
<script>
// you can also register quill modules in the component
import Quill from "quill";
// Quill.register("modules/someModule");

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
      desc: ""
    };
  },
  // manually control the data synchronization
  // 如果需要手动控制数据同步，父组件需要显式地处理changed事件
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

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  },
  mounted() {
    console.log("this is current quill instance object", this.editor);
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

