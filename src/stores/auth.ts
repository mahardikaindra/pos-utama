// authentication.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false
  }),
  actions: {
    login(email: string, password: string) {
      // Perform authentication logic (e.g., API call, token validation)
      // Update isAuthenticated based on the result
      console.log(email, password)
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
