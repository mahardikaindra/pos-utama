// auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  actions: {
    login() {
      // Perform authentication logic (e.g., API call, token validation)
      // Update isAuthenticated based on the result
      this.isAuthenticated = true
    },
    logout() {
      // Perform logout logic
      this.isAuthenticated = false
    },
    checkAuthentication() {
      // Perform asynchronous authentication check
      // For example, check a token's validity asynchronously
      return new Promise<boolean>((resolve) => {
        // Simulate an asynchronous check
        setTimeout(() => {
          resolve(this.isAuthenticated)
        }, 500)
      })
    }
  }
})
