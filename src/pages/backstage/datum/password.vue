<template>
  <div>
    <ComHead></ComHead>
    <ComLeft num="1-1"></ComLeft>
    <div class="content">
      <div class="title">修改密码</div>
      <div class="box">
        <el-form :model="form">
          <el-form-item label="旧密码:">
            <el-input v-model="form.oldpassword"></el-input>
          </el-form-item>
          <el-form-item label="新密码:">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item label="重复密码:">
            <el-input v-model="form.passwords"></el-input>
          </el-form-item>
          <el-button type="primary">确认修改</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return {
      form: {
        oldpassword: '',
        password: '',
        passwords: ''
      }
    }
  }
}
</script>

<style scoped>
  .title{color: #e84c3d;font-size: 18px;font-weight: bold;padding-bottom: 10px;border-bottom: 1px solid #cccccc}
  .box{padding: 50px;background: white}
  .content >>> .el-form-item__label{width: 200px;}
  .content >>> .el-input{width: 280px}
  .content >>> .el-button--primary{margin-left: 200px}
</style>
