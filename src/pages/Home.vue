<template>
  <div class="home">
    <IndexHead></IndexHead>
    <div class="banner">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item" style="background: url('/static/img/banner.jpg')no-repeat;"></el-carousel-item>
      </el-carousel>
      <div class="login-box">
        <div class="smbox">
          <div class="login-title">登录</div>
          <div class="login-input">
            <el-input placeholder="手机号码" v-model="account">
              <template slot="prepend"><i class="fa fa-user-circle-o"></i></template>
            </el-input>
          </div>
          <div class="login-input">
            <el-input placeholder="密码" v-model="account">
              <template slot="prepend"><i class="fa fa-key"></i></template>
            </el-input>
          </div>
          <div class="login-input">
            <el-input placeholder="验证码" v-model="account">
              <template slot="prepend"><i class="fa fa-server"></i></template>
            </el-input>
            <img src="@/../static/img/yanzhen.png" alt="" class="yanzhen">
          </div>
          <div><el-button type="warning">警告按钮</el-button></div>
          <div class="login-liajie">
            <span>立即注册</span>
            <span>忘记密码</span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="wind1200 mydo">
        <div class="mydo-title">我们能做什么?</div>
        <div class="mydo-remark">为企业提供“全方位”的互联网品牌推广营销服务！</div>
        <div class="mydo-remark-o">致力于打造“中国互联网新闻营销第一品牌”，以“多、快、好、省”的良好的口碑，赢得市场和企业的一致认可</div>
        <div class="mydo-tuiguang">
          <div class="mydo-smbox">
            <div><img src="@/../static/img/toutiao.png" alt=""></div>
            <div>软文推广</div>
            <div>为企业提供各种形式的新闻报道，发布在权威的网络媒体上，提高公众对企业产品或服务的 认知度，塑造良好品牌形象，并提高销售转化率的营销服务。 </div>
          </div>
          <div class="mydo-smbox">
            <div><img src="@/../static/img/baidu.png" alt=""></div>
            <div>新闻源营销</div>
            <div>一般指在百度上，发布带有“百度新闻源”属性的媒体，通过搜索相关关键字就可直接在百度首页相关 形象区域展示，在最短的时间内获得最大的信息曝光率。 </div>
          </div>
          <div class="mydo-smbox">
            <div><img src="@/../static/img/weixin.png" alt=""></div>
            <div>微信推广</div>
            <div>利用公众账户的大量精准粉丝进行推广，企业根据不同的行业广告选择合适的公众号，提供用户需要 的信息，推广自己的产品，从而实现点对点的营销。  </div>
          </div>
          <div class="mydo-smbox">
            <div><img src="@/../static/img/xinlang.png" alt=""></div>
            <div>微博推广</div>
            <div>利用大V账户发布和转发微博广告，每一个粉丝都是潜在营销对象，企业利用发布的微型博客向网友 传播企业、产品的信息，树立良好的企业形象和产品形象。  </div>
          </div>
        </div>
      </div>
    </div>
    <div class="youshi">
      <div class="wind1200">
        <div class="youshi-title">我们的优势</div>
        <div class="youshi-box">
          <div class="youshi-smbox">
            <div><img src="@/../static/icon/tubiao.png" alt=""></div>
            <div>
              <span>10000媒体资源</span><br>
              <span>媒体合作覆盖国内各大门户行业网站</span>
            </div>
          </div>
          <div class="youshi-smbox">
            <div><img src="@/../static/icon/tubiao_3.png" alt=""></div>
            <div>
              <span>5000企业合作</span><br>
              <span>上市集团、政府机构、公关机关战略合作</span>
            </div>
          </div>
          <div class="youshi-smbox">
            <div><img src="@/../static/icon/tubiao_5.png" alt=""></div>
            <div>
              <span>200专业写手</span><br>
              <span>国内各大新闻媒体专业主编级别写手服务</span>
            </div>
          </div>
          <div class="youshi-smbox">
            <div><img src="@/../static/icon/tubiao_2.png" alt=""></div>
            <div>
              <span>方便快捷</span><br>
              <span>免费注册，24小时自助新闻发布平台</span>
            </div>
          </div>
          <div class="youshi-smbox">
            <div><img src="@/../static/icon/tubiao_4.png" alt=""></div>
            <div>
              <span>优势发稿</span><br>
              <span>当天初稿，高效率高服务，效果立竿见影</span>
            </div>
          </div>
          <div class="youshi-smbox">
            <div><img src="@/../static/icon/tubiao_6.png" alt=""></div>
            <div>
              <span>企业保障</span><br>
              <span>正规流程、正规合同、正规发票、企业定制</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="wind1200">
        <div class="type-title">软文类型分析</div>
        <div class="mydo-remark">针对行业及传播需求，可选择不同的软文类型，采用最优媒体投放组合，帮助广告主获得高效传播</div>
        <div class="type-img">
          <img src="@/../static/img/type.png" alt="">
        </div>
      </div>
    </div>
    <div class="liucheng">
      <div class="wind1200">
        <div class="youshi-title">服务流程</div>
        <div class="liucheng-img"><img src="@/../static/img/liucheng.png" alt=""></div>
      </div>
    </div>
    <div style="padding: 30px 0">
      <div class="wind1200">
        <div class="type-title">海量资源媒体</div>
        <div class="mydo-remark">海量媒体资源，每日不断更新中</div>
        <div class="meidia_list">
          <img src="@/../static/media/media_1_1.png" alt="">
          <img src="@/../static/media/media_1_2.png" alt="">
          <img src="@/../static/media/media_1_3.png" alt="">
          <img src="@/../static/media/media_1_4.png" alt="">
          <img src="@/../static/media/media_1_5.png" alt="">
          <img src="@/../static/media/media_1_6.png" alt="">
          <img src="@/../static/media/media_1_7.png" alt="">
          <img src="@/../static/media/media_1_8.png" alt="">
          <img src="@/../static/media/media_1_9.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
        </div>
      </div>
    </div>
    <div>
      <div class="wind1200">
        <div class="type-title">合作客户</div>
        <div class="mydo-remark">海量媒体资源，每日不断更新中</div>
        <div class="meidia_list">
          <img src="@/../static/media/media_1_1.png" alt="">
          <img src="@/../static/media/media_1_2.png" alt="">
          <img src="@/../static/media/media_1_3.png" alt="">
          <img src="@/../static/media/media_1_4.png" alt="">
          <img src="@/../static/media/media_1_5.png" alt="">
          <img src="@/../static/media/media_1_6.png" alt="">
          <img src="@/../static/media/media_1_7.png" alt="">
          <img src="@/../static/media/media_1_8.png" alt="">
          <img src="@/../static/media/media_1_9.png" alt="">
          <img src="@/../static/media/media_1_10.png" alt="">
        </div>
      </div>
    </div>
    <IndexFoot></IndexFoot>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .home{background: white}
  .home >>> .el-carousel__container{height: 450px}
  .home >>> .el-carousel__item{background-position: center;background-attachment: fixed;}
  .banner{position:relative}
  .login-box{position: absolute;top:0;z-index: 999;width: 1200px;height: 100%;left: 50%;margin-left: -600px}
  .smbox{background: rgba(0,0,0,0.2);width: 300px;position: absolute;right: 0;padding: 20px;border-radius: 10px;margin-top: 70px;height: 265px}
  .login-title{color: #ebb401;border-bottom: 2px solid #ebb401;text-align: center;line-height: 30px;font-size: 16px;font-weight: bold;margin-bottom: 10px}
  .login-input{margin: 10px 0;position: relative}
  .yanzhen{position: absolute;top: 0;right: 0;width: 100px;height: 40px;border-radius: 0px 5px 5px 0}
  .smbox >>> .el-button--warning{background: #ebb401;width: 100%}
  .login-liajie{color: white;display: flex;margin-top: 10px;justify-content: space-between}
  .mydo{padding-top: 20px;padding-bottom: 60px}
  .mydo-title{font-size: 30px;text-align: center;line-height: 60px}
  .mydo-remark{text-align: center;font-size: 16px;line-height: 25px}
  .mydo-remark-o{text-align: center;font-size: 14px}
  .mydo-tuiguang{display: flex;justify-content: space-between;margin-top: 50px}
  .mydo-tuiguang > div{width: 20%}.youshi-title
  .mydo-tuiguang > div >div{text-align: center}
  .mydo-tuiguang img{width: 150px}
  .mydo-smbox{text-align: center}
  .mydo-smbox > div:nth-child(2){font-size: 16px;margin-top: 10px;line-height: 30px;font-weight: bold}
  .mydo-smbox > div:nth-child(3){text-indent: 2em;text-align: left;line-height: 22px}
  .mydo-smbox span{text-indent: 2em;}
  .youshi{background: #f6f6f6;padding: 15px}
  .youshi-title{width: 180px;font-size: 25px;text-align: center;line-height: 40px;border-bottom: 2px solid #cccccc;margin: 0 auto}
  .youshi-box{display: flex;flex-wrap: wrap;margin-top: 40px}
  .youshi-smbox{display: flex;width: 33.33%;margin: 18px 0}
  .youshi-smbox img{width: 70px}
  .youshi-smbox div:nth-child(1){margin-right: 10px}
  .youshi-smbox div:nth-child(2){line-height: 25px;margin-top: 15px}
  .youshi-smbox div:nth-child(2) > span:nth-child(1){color: #2a80b9}
  .type-title{width: 220px;font-size: 25px;text-align: center;line-height: 40px;border-bottom: 2px solid #cccccc;margin: 15px auto}
  .liucheng-img{padding: 20px 0}
  .liucheng{background: #f6f6f6;padding-top: 20px}
  .meidia_list{display: flex;flex-wrap: wrap;margin: 10px 0}
  .meidia_list > img{width: 20%;cursor: pointer}
  .meidia_list > img:hover{box-shadow: 0px 0px 15px rgba(107, 155, 240, 0.3);}
  .gengduo{text-align: center;font-size: 40px;margin-top: -30px}
</style>
