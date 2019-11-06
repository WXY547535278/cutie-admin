<template>
  <div>
      <ComHead></ComHead>
      <ComLeft num="1-3"></ComLeft>
      <div class="content">
          <div class="title">财务报表</div>
          <div class="table-box">
              <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="read" label="状态" width="120" align="center">
                      <template slot-scope="scope">
                            <span v-if="scope.row.read == 1"><i class="fa fa-file-text-o"></i> 已读</span>
                            <span v-else><i class="fa fa-file-text"></i> 未读</span>
                      </template>
                  </el-table-column>
                  <el-table-column prop="title" label="邮件标题" width="220" align="center"></el-table-column>
                  <el-table-column prop="content" label="邮件内容" align="center">
                      <template slot-scope="scope">
                          <el-button type="text" @click="open(scope.row.content)">{{scope.row.content|subString}}</el-button>
                      </template>
                  </el-table-column>
                  <el-table-column prop="createtime" label="时间" width="200" align="center"></el-table-column>
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
  name: 'message',
  data () {
    return {
      form: {
        limit: '1',
        lenght: '20'
      },
      tableData: [{
        read: '1',
        title: '邮件标题',
        content: '上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄',
        createtime: '2018-10-10 10:12:00'
      }, {
        read: '0',
        title: '邮件标题',
        content: '上海市普陀区金沙江路 1518 弄',
        createtime: '2018-10-10 10:12:00'
      }]
    }
  },
  methods: {
    handleSizeChange (val) {
      this.form.lenght = val
      console.log(this.form)
    },
    handleCurrentChange (val) {
      this.form.limit = val
    },
    open (content) {
      this.$alert(content, '邮件内容', {
        callback: action => {}
      })
    }
  },
  filters: {
    subString (value) {
      if (value !== '' && value.length > 25) {
        return value.substr(0, 25) + '…'
      } else {
        return value
      }
    }
  }
}
</script>

<style scoped>
  .title{color: #e84c3d;font-size: 18px;font-weight: bold;padding-bottom: 10px;border-bottom: 1px solid #cccccc}
  .block{padding: 10px 10px;text-align: right;background: white;border-bottom: 1px solid #EBEEF5;}
  .table-box{margin-top: 20px}
  .block >>> .el-pager li.active{background: #409EFF;cursor: default;color: white;}
</style>
