import { createRouter, createWebHistory } from 'vue-router'
import CounterView from '../views/CounterView.vue'
import MinusCounterView from '@/views/MinusCounterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: CounterView
    },
    {
      path: '/minus',
      component: MinusCounterView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
