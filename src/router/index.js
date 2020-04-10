import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: resolve=> require(['@/pages/Login'],resolve)
    },
    {
      path: '/',
      name: 'home',
      component: resolve=> require(['@/pages/Home'],resolve)
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: resolve=> require(['@/pages/Aboutme'],resolve)
    },
    {
      path: '/share',
      name: 'sharepage',
      component: resolve=> require(['@/pages/Share'],resolve)
    },
    {
      path: '/reward',
      name: 'rewardpage',
      component: resolve=> require(['@/pages/Reward'],resolve)
    },
    {
      path: '/message',
      name: 'message',
      component:resolve=> require(['@/pages/Message'],resolve)

    },
    {
      path: '/userinfo',
      name: 'userinfo',
      component:resolve=> require(['@/pages/Userinfo'],resolve)
    },
    {
      path: '/detailshare',
      name: 'detailshare',
      component:resolve=> require(['@/pages/DetailShare'],resolve)
    },
    {
      path: '/resource',
      name: 'resource',
      component:resolve=> require(['@/pages/Resource'],resolve)
    },
  ]
})
