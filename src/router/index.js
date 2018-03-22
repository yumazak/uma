import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import accounts from '@/components/accounts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/accounts',
      name: 'accounts',
      component: accounts
    }
  ]
})
