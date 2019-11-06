<template>
  <div>
      <ComHead></ComHead>
      <ComLeft num="1-2"></ComLeft>
      <div class="content">
          <div class="title">财务报表</div>
          <div class="type">
              <div>交易类型：
                  <el-select v-model="form.type" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
                  </el-select>
              </div>
              <div class="money">累计充值：0元 &nbsp;&nbsp;&nbsp; 累计收益：0元</div>
          </div>
          <div>
              <el-table :data="tableData" border style="width: 100%">
                  <el-table-column prop="orderid" label="订单号" width="200" align="center"></el-table-column>
                  <el-table-column prop="createtime" label="交易时间" width="200" align="center"></el-table-column>
                  <el-table-column prop="content" label="交易说明" align="center"></el-table-column>
                  <el-table-column prop="balance" label="原始金额" align="center" width="120"></el-table-column>
                  <el-table-column prop="money" label="交易金额" align="center" width="120"></el-table-column>
                  <el-table-column prop="media" label="交易媒体" align="center" width="180"></el-table-column>
                  <el-table-column prop="state" label="交易状态" width="120" align="center">
                      <template slot-scope="scope">
                        <el-tag :type="scope.row.state === '成功' ? 'success' : 'danger'" disable-transitions>{{scope.row.state}}</el-tag>
                      </template>
                  </el-table-column>
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
  name: 'finance',
  data () {
    return {
      options: [
        {value: '0', label: '全部'},
        {value: '1', label: '充值'},
        {value: '2', label: '消费'},
        {value: '3', label: '收益'},
        {value: '4', label: '其他'}
      ],
      form: {
        type: '0',
        limit: '1',
        lenght: '20'
      },
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
  },
  methods: {
    handleSizeChange (val) {
      this.form.lenght = val
    },
    handleCurrentChange (val) {
      this.form.limit = val
    }
  }
}
</script>

<style scoped>
  .title{color: #e84c3d;font-size: 18px;font-weight: bold;padding-bottom: 10px;border-bottom: 1px solid #cccccc}
  .type{display: flex;line-height: 40px;margin: 20px 0}
  .money{margin-left: 100px}
  .block{padding: 10px 10px;text-align: right;background: white;border: 1px solid #EBEEF5;}
  .block >>> .el-pager li.active{background: #409EFF;cursor: default;color: white;}
</style>
