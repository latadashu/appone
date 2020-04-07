<template>
  <div class="form-el">
    <el-form ref="loginFormref" :v-model="loginForm" label-width="80px" class="loginform">
      <el-form-iemt>
        <el-input placeholder="请输入手机号" v-model="loginForm.moblie" ></el-input>
      </el-form-iemt>
      <el-form-iemt>
        <el-input placeholder="请输入验证码" v-model="loginForm.code" class="code"></el-input>
      </el-form-iemt>
      <el-button type="primary" class="loginbtn" @click="logingo">登录</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        moblie: '13734192232',
        code: '246810'
      }
    }
  },
  methods: {
    logingo () {
      this.$router.push({
        path: '/home'
      })
    }
  }
};
</script>
<style lang="less" scoped>
.form-el {
  width: 400px;
  height: 300px;
  background-color: #ccc;
  margin: 150px auto;
  .loginform {
    width: 80%;
    margin: 0 auto;
    padding: 80px 0 0;
    .code {
      display: block;
      padding: 15px 0;
    }
    .loginbtn {
      display: block;
      margin: 0 auto;
    }

  }
}
</style>
