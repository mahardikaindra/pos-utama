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

export default authGuard
