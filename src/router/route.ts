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
    path: '/student',
    name: 'student',
    component: () => import('../views/StudentView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/subject',
    name: 'subject',
    component: () => import('../views/SubjectView.vue'),
    meta: { requiresAuth: true },
    beforeEnter: authGuard
  },
  {
    path: '/lecture',
    name: 'lecture',
    component: () => import('../views/LectureView.vue'),
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
