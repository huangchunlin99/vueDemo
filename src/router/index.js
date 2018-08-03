import Vue from 'vue'
import Router from 'vue-router'
import endTask from '@/components/endTask'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'nav',
    //   component: sideNav
    // },
    {
      path: '/endTask',
      name: 'endTask',
      component: resolve=>require(['@/components/endTask'],resolve)
    },
  ]
})
