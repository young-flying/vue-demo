import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Embind from '@/page/employee/bind'
import EmbindSuccess from '@/page/employee/bind_success'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/content/:id',
      component: Content
    }, {
      path: '/home',
      component: Index,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/home/embind',
          component: Embind
        },
        {
          // 当 /user/:id/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: '/home/embindSuccess',
          component: EmbindSuccess
        }
      ]
    }
  ]
})
