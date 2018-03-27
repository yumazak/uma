import Vue from 'vue'
import Router from 'vue-router'
import about from '@/components/about'
import accounts from '@/components/accounts'
import works from '@/components/works'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
