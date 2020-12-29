import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/table',
    name: 'Table',
    component: () => import(/* webpackChunkName: "about" */ '../views/Table.vue')
  },
  {
    path: '/Add',
    name: 'Add',
    component: () => import('../views/add.vue')
  },
  {
    path: '/map',
    name: 'Map',
    component: () => import('../views/map.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('../views/index/index.vue'),
    children:[
      {
        path: '/indexuser',
        name: 'indexUser',
        component: () => import('../views/user/index.vue'),
      }
    ]
  }
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
        return originalPush.call(this, location).catch(err => err)
      }
const router = new VueRouter({
  routes
})

export default router
