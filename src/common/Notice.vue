<template>
 <div :class="['guodu',classD]">
    <div class="noticebox" @click="guanbi"></div>
    <div class="box">
        <div class="image"><img src="/static/img/notice.png" alt=""></div>
        <div class="title">软文管家通知</div>
        <div class="wenhao">亲爱的<span>谢先生</span>,您好！</div>
        <div class="content">{{content}}</div>
        <div class="time">2019-10-18 10:06:11</div>
        <span class="fa fa-times-circle-o fa-2x guanbi" @click="guanbi"></span>
    </div>
 </div>
</template>

<script>
export default {
  name: 'userindex',
  data () {
    return {
      content: '为确保账户安全，媒介盒子将新增IP异地登入短信验证功能，请于10月23号24:00前完善手机号信息，未完善手机号的用户，将无法在异地进行登入。请在个人资料中点击“换绑手机号”按钮,按提示操作。',
      classD: ''
    }
  },
  methods: {
    guanbi () {
      this.classD = 'none'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .none{display: none}.guodu{transition: all 0.5s;}
  .noticebox{position: fixed;top: 0;left: 0;background: rgba(0,0,0,0.3);width: 100%;height: 100%;}
  .box{background: #f5f7f6;width: 500px;padding: 10px 30px;color: #2d3e50;border-radius: 5px;margin:120px auto;position: relative}
  .image{width: 150px;margin: 0 auto;padding-top: 10px}
  .title{text-align: center;font-size: 22px;margin:10px 0}
  .wenhao{line-height: 40px}.wenhao > span{color: #c1392b}
  .content{line-height: 25px}
  .time{text-align: right;font-size: 14px;margin: 10px 0}
  .guanbi{position: absolute;top: 10px;right: 10px;cursor: pointer}
</style>
