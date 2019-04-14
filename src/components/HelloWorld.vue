<template>
  <div class="main">
    <el-row class="bar">
      <el-col :span="16" :offset="4" class="title">
        <div>
          <h2>INS-Tool</h2>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="context">
          <div class="ins_label">
            <label for="ins_url" style="float:left;padding-left:10px">
              <h3>输入链接开始下载</h3>
            </label>
          </div>

          <div class="ins">
            <el-input id="ins_url" v-model="input" placeholder="请输入内容" class="ins_input"></el-input>
            <el-button @click="getInsUrl()" class="int_btn" type="primary">获取链接</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row v-if="flag">
      <el-col :span="16" :offset="4">
        <div class="result">
          <h3>获取成功</h3>
          <div v-for="r in res" :key="r" class="urls">
            <a :href="r" target="_blank">{{ r }}</a>
          </div>
        </div>
      </el-col>
    </el-row>
    <div class="author">
      Created by
      <a href="https://github.com/ronething" target="_blank">ronething</a>
    </div>
  </div>
</template>

<script>
import ins from "@/models/ins";

export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {
      input: "",
      flag: false,
      res: []
    };
  },
  methods: {
    async getInsUrl() {
      if (/https:\/\/www.instagram.com\/p/.test(this.input)) {
        this.$message.warning("正在获取链接🔗");
        const ins_res = await ins.getUrls({ url: this.input });
        if (ins_res.code === 200) {
          this.res = ins_res.data.urls;
          this.$message.success("获取链接成功");
          this.flag = true;
        } else {
          this.$message.error(ins_res.message);
        }
      } else {
        this.$message.error("请输入正确链接🔗");
      }
    }
  }
};
</script>

<style scoped>
.bar {
  background: rgb(226, 137, 214);
  margin-bottom: 10px;
}
.title h2 {
  color: transparent;
}
.title {
  background-image: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
  
}
h1,
h3,
a {
  color: rgb(226, 137, 214);
}
.context {
  height: 200px;
  border: 2px solid rgb(226, 137, 214);
}
.result {
  min-height: 200px;
  border: 2px solid rgb(226, 137, 214);
  margin-top: 30px;
}
.ins {
}
.ins_label::after {
  content: " ";
  clear: both;
  display: block;
  visibility: hidden;
  height: 0;
}
.ins_input {
  display: inline-block;
  max-width: 85%;
}
.ins_btn {
  display: inline-block;
}
.urls {
  overflow: auto;
  margin-bottom: 5px;
}
.author {
  margin-top: 20px;
}
</style>
