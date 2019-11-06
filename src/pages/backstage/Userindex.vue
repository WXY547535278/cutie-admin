<template>
    <div>
        <ComHead></ComHead>
        <ComLeft></ComLeft>
        <div class="content">
           <div class="box">
               <div class="userdatum">
                   <el-card class="box-card" shadow="hover">
                     <div slot="header" class="clearfix">
                        <span>个人信息</span>
                     </div>
                     <div class="user-box">
                        <div class="headimg"><el-avatar :size="80" :src="circleUrl"></el-avatar></div>
                        <div>
                           <div class="name">你好! <span>谢谢先生</span></div>
                           <div class="level">
                               用户级别 <span>V0</span>
                               <span class="tishi">（如何提升等级?）</span>
                           </div>
                           <div class="level">
                              余额 <span>￥9000</span>
                              <span><el-button type="danger">充值</el-button></span>
                           </div>
                        </div>
                     </div>
                   </el-card>
               </div>
               <div class="order">
                   <el-card class="box-card" shadow="hover">
                      <div slot="header" class="clearfix">
                         <span>我的订单</span>
                      </div>
                      <div class="order-box">
                         <div>
                            <img src="@/../static/icon/shangchuan.png" alt=""><br>
                            消费订单
                         </div>
                         <div>
                            <img src="@/../static/icon/xiewenzhang.png" alt=""><br>
                            收稿订单
                         </div>
                      </div>
                 </el-card>
               </div>
           </div>
           <div class="box">
               <div class="media">
                   <el-card class="box-card" shadow="hover">
                       <div slot="header" class="clearfix">
                         <span>添加资源</span>
                       </div>
                       <div>
                           <div class="order-box">
                               <div>
                                   <img src="@/../static/icon/meitishu.png" alt=""><br>
                                   添加新闻媒体
                               </div>
                               <div>
                                   <img src="@/../static/icon/meitishu_1.png" alt=""><br>
                                   添加自媒体
                               </div>
                               <div>
                                   <img src="@/../static/icon/xiaofeidingdan.png" alt=""><br>
                                   添加带写
                               </div>
                           </div>
                       </div>
                   </el-card>
               </div>
               <div class="media">
                   <el-card class="box-card" shadow="hover">
                       <div slot="header" class="clearfix">
                          <span>添加资源</span>
                       </div>
                       <div>
                           <div class="order-box">
                               <div>
                                   <img src="@/../static/icon/order.png" alt=""><br>
                                   新闻源发布
                               </div>
                               <div>
                                   <img src="@/../static/icon/gaojian2.png" alt=""><br>
                                   自媒体发布
                               </div>
                               <div>
                                   <img src="@/../static/icon/fabu.png" alt=""><br>
                                   代写发布
                               </div>
                           </div>
                       </div>
                   </el-card>
               </div>
           </div>
           <div class="box liucheng">
               <el-tabs type="border-card">
                 <el-tab-pane label="发稿流程"><img src="@/../static/img/process_fagao.png" alt=""></el-tab-pane>
                 <el-tab-pane label="收稿流程"><img src="@/../static/img/process_shougao.png" alt=""></el-tab-pane>
                 <el-tab-pane label="注意事项">
                   <div>
                     <p>1、所有充值款如需提现必须扣除余额的10%手续费后方可提现（支付宝所收取的手续费以及本平台提供的服务费），收益部分免费提现。</p>
                     <p>2、所有发布出的链接默认时效为保证一个月，如有备注保证时效的媒体按照媒体备注为准，违规违法稿件一经发现会立马删除且扣除编辑发布成功的收益！</p>
                   </div>
                 </el-tab-pane>
               </el-tabs>
           </div>
        </div>
        <!--<Notice></Notice>-->
    </div>
</template>

<script>
export default {
  name: 'userindex',
  data () {
    return {
      circleUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1624240531,2195794812&fm=26&gp=0.jpg"
    }
  },
  methods: {}
}
</script>

<style scoped>
  .content >>> .el-card{height: 220px}
  .box{display: flex;margin-bottom: 10px}
  .userdatum{width: 60%}
  .order{width: 35%;margin-left: 10px}
  .media{width: 47.5%;margin-right: 10px}
  .liucheng >>> .el-tabs--border-card{width: 96%}
  .user-box{display: flex;color: #2d3e50}
  .headimg{margin-right: 20px}
  .name{font-size: 18px;line-height: 30px;}
  .level{line-height: 25px;color: #34495e}
  .level > span{color: #e84c3d;margin-left: 10px}
  .level >>> .el-button{padding: 0px 10px;height: 30px;}
  .tishi{color: #95a5a5 !important;font-size: 12px}
  .order-box{display: flex;color: #34495e}
  .order-box > div{width: 100px;padding: 10px;margin-left: 10px;text-align: center;cursor: pointer}
  .order-box > div > img{width: 80px}
  .order-box > div:hover{background: #ecf0f1}

</style>
