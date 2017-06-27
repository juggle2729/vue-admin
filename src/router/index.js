import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: './activity'
    },
    {
      path: '/activity',
      component: resolve => require(['../components/Operate/Activity.vue'], resolve)
    },
    {
      path: '/goods',
      component: resolve => require(['../components/Operate/Goods.vue'], resolve)
    },
    {
      path: '/activity/add',
      component: resolve => require(['../components/Operate/Add.vue'], resolve)
    }
  ]
})
