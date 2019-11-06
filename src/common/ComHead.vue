<template>
  <div class="head">
      <div class="left">
        <div class="logo"><img src="@/../static/logo.png" alt=""></div>
        <div>
          <ul class="list">
            <li>自媒体推广<span class="fa fa-caret-up hover-icon"></span></li>
            <li>媒体价格<span class="fa fa-caret-up hover-icon"></span></li>
            <li>软文代写<span class="fa fa-caret-up hover-icon"></span></li>
            <li><router-link to="userindex">后台首页<span class="fa fa-caret-up hover-icon"></span></router-link></li>
          </ul>
        </div>
      </div>
      <div class="right">
          <div class="user-list">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <i class="el-icon-user-solid"></i> 谢先生
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <router-link to="Addbill"><el-dropdown-item icon="el-icon-film">申请发票</el-dropdown-item></router-link>
                <router-link to="Mybill"><el-dropdown-item icon="el-icon-document-copy">我的发票</el-dropdown-item></router-link>
                <router-link to="User"><el-dropdown-item icon="el-icon-info">修改个人资料</el-dropdown-item></router-link>
                <router-link to="Password"><el-dropdown-item icon="el-icon-connection">修改密码</el-dropdown-item></router-link>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="user-list tuichu"><i class="fa fa-power-off"></i>&nbsp;退出 <span class="fa fa-caret-up hover-icon"></span></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ComHead',
  props: ['title'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .head{display: flex;background: #2a80b9;color: white;height: 60px;justify-content: space-between;line-height: 58px;position: fixed;width: 100%;top: 0;z-index: 999}
  .logo{width: 250px;}
  .logo >img{width: 120px;margin-top: 10px;margin-left: 20px}
  .list{display: flex;}
  .list >li{margin-right: 25px;cursor: pointer;position: relative;}
  .list > li >a{color: white}
  .list > li:hover{border-bottom: 1px solid #405871}
  .left{display: flex}
  .right{display: flex}
  .user-list{margin-right: 30px;cursor: pointer;position: relative;}
  .tuichu:hover{border-bottom: 2px solid #405871;}
  .hover-icon{display: none;font-size: 25px;position: absolute;bottom: -10px;left: 40%;margin-right: 5px;color: #405871}
  .user-list:hover span{display: inline;bottom: -9px}
  .user-list>>>.el-dropdown{color: white}
  .list > li:hover span{display: inline}
  .el-dropdown-link{cursor: pointer}
</style>
