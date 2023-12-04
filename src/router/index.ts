// router.ts
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const authGuard = async (to: any, from: any, next: any) => {
  const authStore = useAuthStore()

  if (to.meta.requiresAuth) {
    // Check authentication asynchronously
    const isAuthenticated = await authStore.checkAuthentication()

    if (!isAuthenticated) {
      // Redirect to login if not authenticated
      next('/login')
      return
    }
  }

  // If authentication is not required or is successful, proceed with navigation
  next()
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/mahasiswa',
    name: 'mahasiswa',
    component: () => import('../views/MahasiswaView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/matkul',
    name: 'matkul',
    component: () => import('../views/MatakulView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/dosen',
    name: 'dosen',
    component: () => import('../views/DosenView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    // Add a meta field to specify that login does not require authentication
    meta: { requiresAuth: false }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_API_BASE_URL),
  routes
})

export default router
