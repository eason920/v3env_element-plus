import { createRouter, createWebHistory } from 'vue-router'
import Button from '../views/Button.vue'
import Layout from '../views/Layout.vue'

const routes = [
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/try',
    name: 'Try',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Try.vue')
  },
  {
    path: '/layout',
    name: 'Layout',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
