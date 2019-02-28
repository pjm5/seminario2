import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Welcome from './views/Welcome.vue'
import Groups from './views/Groups.vue'
import MembersGroup from './views/MembersGroup.vue'
import Profile from './views/Profile.vue'

import Private from './layout/private.vue'
import Public from './layout/public.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Public,
      children: [
        {
          path: '/login',
          component: Login
        },
        {
          path: '/register',
          component: Register
        },
        {
          path: '/welcome',
          component: Welcome
        },
        {
          path: '/',
          component: Welcome
        }
      ]
    },
    {
      path: '/',
      component: Private,
      children: [
        {
          path: '/groups',
          component: Groups
        },
        {
          path: '/home',
          component: Home
        },
        {
          path: '/membersGroup',
          component: MembersGroup
        },
        {
          path: '/profile',
          component: Profile
        }
      ]
    }
  ]
})

export default router
