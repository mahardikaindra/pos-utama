// router.ts
import { createRouter, createWebHistory } from 'vue-router'
import routes from './route'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes
})

export default router
