<template>
  <div>
      <ComHead></ComHead>
      <ComLeft num="1-4"></ComLeft>
      <div class="content">
          <div class="title">
              <span>财务报表</span>
              <el-button type="primary" @click="dialogFormVisible = true">申请提现</el-button>
              <el-dialog title="申请提现" :visible.sync="dialogFormVisible">
                  <div class="tixian">请确认账户信息是否为空，避免不必要的损失！ <br>每周提现一次，打款时间基本为周六！</div>
                  <div class="money">当前可提现金额：<span>1602.00</span> 元</div>
                  <el-form :model="form">
                      <el-form-item label="真实姓名:" :label-width="formLabelWidth">
                          <el-input v-model="form.ali_name" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="支付宝账号:" :label-width="formLabelWidth">
                          <el-input v-model="form.ali_num" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="提现金额:" :label-width="formLabelWidth">
                          <el-input v-model="form.money" autocomplete="off"></el-input>
                      </el-form-item>
                      <el-form-item label="备注:" :label-width="formLabelWidth">
                          <el-input v-model="form.remark" autocomplete="off"></el-input>
                      </el-form-item>
                  </el-form>
                  <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                  </div>
              </el-dialog>
              <el-tooltip content="每周提现一次，打款时间基本为周六！" placement="bottom" effect="light">
                  <i class="fa fa-question-circle-o tishi"></i>
              </el-tooltip>
          </div>
          <div class="type">订单号：
              <el-input v-model="form.orderid" placeholder="请输入内容" clearable></el-input>
          </div>
          <div>
              <el-table :data="tableData" border style="width: 100%">
                  <el-table-column prop="orderid" label="订单号" width="200" align="center"></el-table-column>
                  <el-table-column prop="money" label="提现金额" width="200" align="center"></el-table-column>
                  <el-table-column prop="ali_name" label="真实姓名" align="center"  width="120"></el-table-column>
                  <el-table-column prop="ali_num" label="支付宝账号" align="center" width="120"></el-table-column>
                  <el-table-column prop="remark" label="备注" align="center"></el-table-column>
                  <el-table-column prop="state" label="状态" align="center" width="180"></el-table-column>
                  <el-table-column prop="reason" label="原因" width="120" align="center"></el-table-column>
                  <el-table-column prop="createtime" label="创建时间" width="180" align="center"></el-table-column>
              </el-table>
          </div>
        <div class="block">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :page-sizes="[20, 30, 50]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="100">
            </el-pagination>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'withdraw',
  data () {
    return {
      condition: {
        orderid: '',
        limit: '1',
        lenght: '20'
      },
      form: {
        ali_name: '',
        ali_num: '',
        money: '',
        remark: ''
      },
      tableData: [{
        orderid: 'ABD12345678945612',
        money: '100',
        ali_name: '谢先生',
        ali_num: '13545645645',
        remark: '提现内容',
        state: '待提现',
        reason: '提现完成',
        createtime: '2019-10-10 10:10:10'
      }],
      dialogFormVisible: false
    }
  },
  methods: {
    handleSizeChange (val) {
      this.form.lenght = val
    },
    handleCurrentChange (val) {
      this.form.limit = val
    },
    open () {
      this.$prompt('请输入邮箱', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: '邮箱格式不正确'
      }).then(({ value }) => {
        this.$message({
          type: 'success',
          message: '你的邮箱是: ' + value
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    }
  }
}
</script>

<style scoped>
  .title{color: #e84c3d;font-size: 18px;font-weight: bold;padding-bottom: 10px;border-bottom: 1px solid #cccccc}
  .title >>> .el-button{padding: 8px 12px}
  .title > span{margin-right: 20px}
  .tishi{cursor: pointer;color: #409EFF;margin-left: 5px}
  .type{line-height: 40px;margin: 20px 0}
  .type >>> .el-input{width: 300px}
  .block{padding: 10px 10px;text-align: right;background: white;border: 1px solid #EBEEF5;}
  .block >>> .el-pager li.active{background: #409EFF;cursor: default;color: white;}
  .title >>> .el-form-item__label{width: 200px;}
  .title >>> .el-input{width: 280px}
  .tixian{text-align: center;line-height: 25px;margin-bottom: 15px;}
  .money{text-align: center;margin-bottom: 30px;}
  .money > span{color: #e84c3d}
</style>
