import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import UserIndex from '@/pages/backstage/Userindex'
import Alipay from '@/pages/backstage/user/alipay'
import Finance from '@/pages/backstage/user/finance'
import Message from '@/pages/backstage/user/message'
import Withdraw from '@/pages/backstage/user/withdraw'
import Addbill from '@/pages/backstage/datum/addbill'
import Mybill from '@/pages/backstage/datum/mybill'
import User from '@/pages/backstage/datum/user'
import Password from '@/pages/backstage/datum/password'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      meta: {title: '前台首页'},
      name: 'Home',
      component: Home
    },
    {
      path: '/UserIndex',
      meta: {title: '用户后台-首页'},
      name: 'UserIndex',
      component: UserIndex
    },
    {
      path: '/Alipay',
      meta: {title: '用户后台-我要充值'},
      name: 'Alipay',
      component: Alipay
    },
    {
      path: '/Finance',
      meta: {title: '用户后台-财务报表'},
      name: 'Finance',
      component: Finance
    },
    {
      path: '/Message',
      meta: {title: '用户后台-系统消息'},
      name: 'Message',
      component: Message
    },
    {
      path: '/Withdraw',
      meta: {title: '用户后台-提现'},
      name: 'Withdraw',
      component: Withdraw
    },
    {
      path: '/Addbill',
      meta: {title: '用户后台-申请发票'},
      name: 'Addbill',
      component: Addbill
    },
    {
      path: '/Mybill',
      meta: {title: '用户后台-我的发票'},
      name: 'Mybill',
      component: Mybill
    },
    {
      path: '/User',
      meta: {title: '用户后台-完善个人资料'},
      name: 'User',
      component: User
    },
    {
      path: '/Password',
      meta: {title: '用户后台-修改密码'},
      name: 'Password',
      component: Password
    }
  ]
})
