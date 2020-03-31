import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Aboutme from '@/pages/Aboutme'
import Share from '@/pages/Share'
import Reward from '@/pages/Reward'
import Message from '@/pages/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: Aboutme
    },
    {
      path: '/share',
      name: 'sharepage',
      component: Share
    },
    {
      path: '/reward',
      name: 'rewardpage',
      component: Reward
    },
    {
      path: '/message',
      name: 'message',
      component:Message
    }
  ]
})
