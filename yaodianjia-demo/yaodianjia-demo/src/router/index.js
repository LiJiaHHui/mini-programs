import Vue from 'vue'
import Router from 'vue-router'
import Member from '../components/member'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Member',
      component: Member
    }
  ]
})
