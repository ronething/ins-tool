<template>
  <div>
    <el-row>
      <el-col :span="24">
        <div class="title">
          <h1>ins-tool</h1>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="16" :offset="4">
        <div class="context">
          <div class="label">
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
          <div v-for="r in res">
            <a :href="r">{{ r }}</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
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
    getInsUrl() {
      this.$message.warning("获取链接");
      this.res = ["http://xxx.com", "http://bbb.com"];
      this.flag = true;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  height: 200px;
  border: 2px solid rgb(226, 137, 214);
  margin-top: 30px;
}
.ins {
}
.ins_input {
  display: inline-block;
  width: 85%;
}
.ins_btn {
  display: inline-block;
}
</style>
