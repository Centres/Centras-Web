import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/resume',
      component: () => import('@/views/Resume.vue')
    },
    {
      path: '/project',
      component: () => import('@/views/Project.vue'),
    },
    {
      path: '/covid',
      component: () => import('@/views/Covid/Covid.vue'),
    }
  ]
})

export default router
