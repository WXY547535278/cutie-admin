<template>
  <div>
    <ComHead></ComHead>
    <ComLeft num="1-1"></ComLeft>
    <div class="content">
      <div class="title">我的发票</div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="orderid" label="订单号" width="200" align="center"></el-table-column>
          <el-table-column prop="createtime" label="提交时间" width="200" align="center"></el-table-column>
          <el-table-column prop="content" label="发票状态" align="center"></el-table-column>
          <el-table-column prop="balance" label="开票金额" align="center" width="120"></el-table-column>
          <el-table-column prop="money" label="发票抬头" align="center" width="120"></el-table-column>
          <el-table-column prop="media" label="发票类型" align="center" width="180"></el-table-column>
          <el-table-column prop="state" label="管理操作" width="120" align="center"></el-table-column>
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
  name: 'mybill',
  data () {
    return {
      tableData: [{
        orderid: 'ABD12345678945612',
        createtime: '2019-10-21 01:02:12',
        content: '发布文章',
        balance: '1000',
        money: '-50.00',
        media: '软文管家',
        state: '成功'
      }, {
        orderid: 'ABD12345678945612',
        createtime: '2019-10-21 01:02:12',
        content: '发布文章',
        balance: '1000',
        money: '-50.00',
        media: '软文管家',
        state: '成功'
      }]
    }
  }
}
</script>

<style scoped>
  .title{color: #e84c3d;font-size: 18px;font-weight: bold;padding-bottom: 10px;border-bottom: 1px solid #cccccc;margin-bottom: 15px}
  .block{padding: 10px 10px;text-align: right;background: white;border: 1px solid #EBEEF5;}
  .block >>> .el-pager li.active{background: #409EFF;cursor: default;color: white;}
</style>
