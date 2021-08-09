import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:breed?',
    name: 'home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: () => import('../views/Favorites')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
