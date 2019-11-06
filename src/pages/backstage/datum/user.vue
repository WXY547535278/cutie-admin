<template>
  <div>
    <ComHead></ComHead>
    <ComLeft num="1-1"></ComLeft>
    <div class="content">
      <div class="title">完善个人资料</div>
      <div class="box">
        <div class="tishi">* 完善资料后可进行其他操作 </div>
        <el-form :model="form">
          <el-form-item label="角色:">
            <el-radio v-model="form.role" label="1">广告主</el-radio>
            <el-radio v-model="form.role" label="2">媒体主</el-radio>
            <el-radio v-model="form.role" label="3">写手</el-radio>
          </el-form-item>
          <el-form-item label="联系人:">
            <el-input v-model="form.linkman"></el-input>
          </el-form-item>
          <el-form-item label="公司名称:">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="支付宝名称:">
            <el-input v-model="form.alipay_name"></el-input>
          </el-form-item>
          <el-form-item label="支付宝账号:">
            <el-input v-model="form.alipay_num"></el-input>
          </el-form-item>
          <el-form-item label="QQ号:">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
          <el-form-item label="手机号码:">
            <el-input v-model="form.mobile"  :disabled="true"></el-input>
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
        role: '1',
        linkman: '',
        company: '',
        alipay_name: '',
        alipay_num: '',
        qq: '',
        mobile: '15625559428'
      }
    }
  }
}
</script>

<style scoped>
  .title{color: #e84c3d;font-size: 18px;font-weight: bold;padding-bottom: 10px;border-bottom: 1px solid #cccccc}
  .tishi{margin-left: 200px;color: #e84c3d;margin-bottom: 10px}
  .box{padding: 50px;background: white}
  .content >>> .el-form-item__label{width: 200px;}
  .content >>> .el-input{width: 350px}
  .content >>> .el-button--primary{margin-left: 200px}
</style>
