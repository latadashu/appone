<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router="true"
      >
        <el-menu-item index="/welcome">
          <i class="el-icon-setting"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>文章页</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/addArticle">添加文章</el-menu-item>
            <el-menu-item index="/article-one">文章1</el-menu-item>
            <el-menu-item index="/article-two">文章2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-button @click="goout">退出</el-button>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    goout() {
      this.$confirm('您要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          this.$router.push({ path: '/login' });
        })
        .catch(() => {});
    }
  }
};
</script>
<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-aside {
    background-color: #323745;
  }
  .el-header {
    background-color: gray;
  }
  .el-main {
    background-color: #eee;
  }
}
</style>
