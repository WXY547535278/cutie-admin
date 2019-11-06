<template>
  <div>
    <ComHead></ComHead>
    <ComLeft num="1-1"></ComLeft>
    <div class="content">
        <div class="title">账户充值</div>
        <div class="box">
            <div class="box-hr">
                <div>可用余额：</div>
                <div>{{money}}元</div>
            </div>
            <div class="box-hr">
                <div>可用余额：</div>
                <div>
                    <el-radio v-model="money" label="100" border>100</el-radio>
                    <el-radio v-model="money" label="300" border>300</el-radio>
                    <el-radio v-model="money" label="500" border>500</el-radio>
                    <el-radio v-model="money" label="1000" border>1000</el-radio>
                    <el-radio v-model="money" label="3000" border>3000</el-radio>
                    <div class="money"><el-input v-model.number="money" placeholder="其他金额"></el-input></div> 元
                </div>
            </div>
            <div class="box-hr">
                <div class="chongzhi">充值方式：</div>
                <div class="alipay"><img src="@/../static/icon/zhifubao.png" alt="" ></div>
            </div>
            <div class="box-hr">
                <div style="color: white;width: 75px"></div>
                <div><el-button type="primary">充值</el-button></div>
            </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      money: '0'
    }
  }
}
</script>

<style scoped>
  .title{margin-left: 2%;line-height: 50px}
  .box{width: 90%;height: 300px;background: white;margin:0 2%;border-radius: 8px;padding: 3%}
  .box-hr{display: flex;line-height: 30px;margin: 20px 0}
  .box-hr >>> .el-radio.is-bordered{height: 30px;padding: 8px 10px 0 10px;margin-right: 0px}
  .box-hr >>> .el-radio__input{display: none}
  .box-hr >>> .el-radio__label{padding: 0 10px}
  .money{width: 100px;height: 30px;margin-left: 10px;display: inline-block;}
  .box-hr >>> .el-input__inner{height: 30px}
  .chongzhi{line-height: 35px}
  .alipay{width: 70px;border: 1px solid #66b1ff;padding: 5px 10px;height: 25px;border-radius: 5px;cursor: pointer}
  .box-hr >>> .el-button{padding: 8px 20px;}
</style>
