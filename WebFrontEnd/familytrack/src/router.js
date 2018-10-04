import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Welcome from './views/Welcome.vue'
import Groups from './views/Groups.vue'
import MembersGroup from './views/MembersGroup.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/groups',
      name: 'groups',
      component: Groups
    },
    {
      path: '/membersGroup',
      name: 'membersGroup',
      component: MembersGroup
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }

  ]
})

router.beforeEach((to, from, next) => {
  /*
  if ($localStorage.get('IsAuthenticated') === "false"){
    return next('/login');
  }
  */
  next()
})

export default router
