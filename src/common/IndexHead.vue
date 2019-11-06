<template>
  <div class="head">
    <div class="head-box1">
      <div class="wind1200 box1-list">
        <div>你好,欢迎来到软文管家！<strong>客服电话：4000-000-000</strong>（工作日9:00-18:00）</div>
        <div class="box1-mess">
          <div>信誉保证</div>
          <div>合作加盟</div>
          <div>帮助中心</div>
          <div>关于我们</div>
        </div>
      </div>
    </div>
    <div class="head-box2">
      <div class="wind1200 list">
        <div><img src="@/../static/logo.png" alt="" class="logo"></div>
        <ul class="daohan">
          <li class="active">首页</li>
          <li>新闻价格</li>
          <li>自媒体价格</li>
          <li>软文代写</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHead',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .head-box1{background: #f9f9f9;line-height: 40px;font-size: 14px}
  .head-box2{background: #ffffff}
  .box1-list{display: flex;justify-content: space-between}
  .box1-mess{display: flex}
  .box1-mess > div{margin-left: 30px}
  .logo{width: 150px;padding: 20px 0;cursor: pointer}
  .list{display: flex;justify-content: space-between}
  .daohan{display: flex;margin: 20px 0;line-height: 50px;font-size: 18px;height: 50px}
  .daohan > li{margin: 0 20px;padding: 0 10px;cursor: pointer}
  .daohan > li:last-child{margin-right: 0;padding-right: 0}
  .active{color: #239ad4;border-bottom: 3px solid #239ad4}
  .daohan > li:hover{color: #239ad4;border-bottom: 3px solid #239ad4}
</style>
