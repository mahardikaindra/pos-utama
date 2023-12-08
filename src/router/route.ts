import { type RouteRecordRaw } from 'vue-router'
import authGuard from '@/middleware/auth'

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

export default routes
