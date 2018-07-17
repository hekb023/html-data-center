import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },{
      path: '/login',
      name: 'login',
      component: resolve => require.ensure([], () => resolve(require('src/views/login/login')), 'login')
    },{
      path: '/layout',
      name: 'layout',
      component: resolve => require.ensure([], () => resolve(require('src/views/layout/layout')), 'layout')
    }
  ]
})
