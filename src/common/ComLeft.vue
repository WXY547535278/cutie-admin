<script src="../../../xiaokeai/src/common/ComHead.js"></script>
<template>
  <div class="comleft">
      <el-menu  :default-active="num" class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :default-openeds="['1','2','3','4']"
      background-color="#2a80b9" text-color="#ecf0f1"
      >
        <el-submenu index="1">
          <template slot="title">
            <i :class="column[0].icon"></i>&nbsp;&nbsp;{{column[0].title}}
          </template>
          <el-menu-item-group>
            <router-link :to="column[0].list[0].route"><el-menu-item index="1-1"><i :class="column[0].list[0].icon"></i>&nbsp;&nbsp;{{column[0].list[0].title}}</el-menu-item></router-link>
            <router-link :to="column[0].list[1].route"><el-menu-item index="1-2"><i :class="column[0].list[1].icon"></i>&nbsp;&nbsp;{{column[0].list[1].title}}</el-menu-item></router-link>
            <router-link :to="column[0].list[2].route"><el-menu-item index="1-3"><i :class="column[0].list[2].icon"></i>&nbsp;&nbsp;{{column[0].list[2].title}}<span class="message_num">{{message_num}}</span></el-menu-item></router-link>
            <router-link :to="column[0].list[3].route"><el-menu-item index="1-4"><i :class="column[0].list[3].icon"></i>&nbsp;&nbsp;{{column[0].list[3].title}}</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i :class="column[1].icon"></i>&nbsp;&nbsp;{{column[1].title}}
          </template>
          <el-menu-item-group>
            <router-link :to="column[1].list[0].route"><el-menu-item index="2-1"><i :class="column[1].list[0].icon"></i>&nbsp;&nbsp;{{column[1].list[0].title}}</el-menu-item></router-link>
            <router-link :to="column[1].list[1].route"><el-menu-item index="3-2"><i :class="column[1].list[1].icon"></i>&nbsp;&nbsp;{{column[1].list[1].title}}</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i :class="column[2].icon"></i>&nbsp;&nbsp;{{column[2].title}}
          </template>
          <el-menu-item-group>
            <router-link :to="column[2].list[0].route"><el-menu-item index="3-1"><i :class="column[2].list[0].icon"></i>&nbsp;&nbsp;{{column[2].list[0].title}}</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i :class="column[3].icon"></i>&nbsp;&nbsp;{{column[3].title}}
          </template>
          <el-menu-item-group>
            <router-link :to="column[3].list[0].route"><el-menu-item index="4-1"><i :class="column[3].list[0].icon"></i>&nbsp;&nbsp;{{column[3].list[0].title}}</el-menu-item></router-link>
            <router-link :to="column[3].list[1].route"><el-menu-item index="4-2"><i :class="column[3].list[1].icon"></i>&nbsp;&nbsp;{{column[3].list[1].title}}</el-menu-item></router-link>
          </el-menu-item-group>
        </el-submenu>

      </el-menu>
      <div class="gonggao">
          <div><i class="fa fa-bookmark"></i>&nbsp;&nbsp;公告</div>
          <div>合作加盟:3005215681</div>
          <div>
            售后QQ:3001889369
            <a href=""><img src="/static/img/qq.gif.jpg" alt=""></a>
          </div>
          <div>
            售后QQ:3001889369
            <a href=""><img src="/static/img/qq.gif.jpg" alt=""></a>
          </div>
          <div>
            售后QQ:3001889369
            <a href=""><img src="/static/img/qq.gif.jpg" alt=""></a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComLeft',
  props: ['num'],
  data () {
    return {
      column: [
        {title: '个人中心',icon:'fa fa-user',list:[
            {title:'我要充值',icon:'fa fa-cny',route: {name: 'Alipay'}},
            {title:'财务报表',icon:'fa fa-table',route: {name: 'Finance'}},
            {title:'系统消息',icon:'fa fa-volume-up',route: {name: 'Message'}},
            {title:'提现',icon:'fa fa-money',route: {name: 'Withdraw'}},
          ]},
        {title: '文章管理',icon:'fa fa-book',list:[
            {title:'文章发布',icon:'fa fa-pencil-square-o',route: {name: 'Home'}},
            {title:'文章列表',icon:'fa fa-list',route: {name: 'Home'}},
          ]},
        {title: '订单管理',icon:'fa fa-folder',list:[
            {title:'我的订单',icon:'fa fa-shopping-cart',route: {name: 'Home'}},
          ]},
        {title: '资源管理',icon:'fa fa-file-video-o',list:[
            {title:'添加资源',icon:'fa fa-plus',route: {name: 'Home'}},
            {title:'我的资源',icon:'fa fa-video-camera',route: {name: 'Home'}},
          ]}
      ],
      message_num:0 // 未读消息量
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comleft{position: fixed;min-height: 100%;overflow-y: scroll;top: 60px;bottom: 0px;background: #4aa3df;width: 250px;}
  .el-menu-vertical-demo:not(.el-menu--collapse) {width: 200px; min-height: 400px;}
  .comleft >>> .el-submenu .el-menu-item{height: 40px; line-height: 40px}
  .comleft >>> .el-submenu__title{height: 40px;line-height: 40px}
  .comleft >>> .el-menu-item-group__title{padding: 0}
  .comleft >>> .el-submenu__title{background-color: #4aa3df !important}
  .comleft >>> .el-submenu__title i{color: white}
  .comleft >>> .el-menu-item i{color: white}
  .comleft >>> .el-menu{width: 240px !important;}
  .comleft >>> .el-menu-item.is-active{background: #2d3e50 !important;color:#fff !important;}
  .message_num{background-color: #e84c3d;margin-left: 10px;padding: 2px 8px;font-size: 12px;margin-top: 10px;border-radius: 5px}
  .gonggao{background: #fff;margin: 10px;padding: 10px;line-height: 28px;font-size: 14px;color: #2d3e50}
  .gonggao img {width: 25px;vertical-align: middle}
</style>
