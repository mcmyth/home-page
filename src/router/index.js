import Vue from 'vue'
import VueRouter from 'vue-router'
import tool from '@/router/modules/tool'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    meta: {
      title: 'MC Myth'
    }
  },
  {
    path: '/friend',
    name: 'Friend',
    component: () => import('../views/Friend'),
    meta: {
      title: 'Friend'
    }
  },
  {
    path: '*',
    component: () => import('../views/Error404'),
    meta: {
      title: '404 NOT FOUND'
    }
  }
]

// Router Modules
tool(routes)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
