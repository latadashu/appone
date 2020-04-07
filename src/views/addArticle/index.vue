<template>
    <div class="">
      添加文章
      <el-input placeholder='文章标题' v-model="title"></el-input>
      <el-input placeholder='文章内容' v-model="content"></el-input>
    </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      content: ''
    }
  }
}
</script>

<style lang='less' scoped>
</style>
