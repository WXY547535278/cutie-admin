<template>
  <div>
    <ComHead></ComHead>
    <ComLeft num="1-1"></ComLeft>
    <div class="content">
      <div class="title">申请发票</div>
      <div class="box">
        <div class="tishi">* 完善资料后可进行其他操作 </div>
        <el-form :model="form">
          <el-form-item label="角色:">
            <el-radio v-model="form.role" label="1">增值税普通发票（6%税点）</el-radio>
            <el-radio v-model="form.role" label="2">增值税专用发票（6%税点） </el-radio>
          </el-form-item>
          <el-form-item label="发票抬头:">
            <el-input v-model="form.linkman"></el-input>
          </el-form-item>
          <el-form-item label="税务登记证号:">
            <el-input v-model="form.company"></el-input>
          </el-form-item>
          <el-form-item label="基本开户银行名称:">
            <el-input v-model="form.alipay_name"></el-input>
          </el-form-item>
          <el-form-item label="基本开户账号:">
            <el-input v-model="form.alipay_num"></el-input>
          </el-form-item>
          <el-form-item label="注册场所地址:">
            <el-input v-model="form.qq"></el-input>
          </el-form-item>
          <el-form-item label="注册固定电话:">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="发票明细:" >
            <el-input v-model="form.mobile" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item label="发票金额:">
            <el-input v-model="form.mobile" class="money"></el-input>
            <span style="color: #e84c3d"> * 可开票金额:0元</span>
          </el-form-item>
          <el-form-item label="收件姓名:">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="联系电话:">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="收件地址:">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-button type="primary">提交申请</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addbill',
  data () {
    return {
      form: {
        role: '1',
        linkman: '',
        company: '',
        alipay_name: '',
        alipay_num: '',
        qq: '',
        mobile: ''
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
  .content >>> .el-input{width: 430px}
  .content >>> .el-button--primary{margin-left: 200px}
  .box >>> .money{width: 300px}
  .money >>> .el-input__inner{width: 300px}
</style>
