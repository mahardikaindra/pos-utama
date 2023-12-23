<!-- LoginView.vue -->
<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" title="tailwindcss" />
    </div>
  </header>

  <v-container>
    <v-card>
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="SubmitForm">
          <v-text-field v-model="email" label="Email" required :rules="rules.email"></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            required
            :rules="rules.password"
          ></v-text-field>
          <v-btn type="submit" color="primary" :disabled="!isFormValid">Login</v-btn>
        </v-form>
        <v-snackbar v-model="errorSnackbar" color="error">
          {{ errorMessage }}
        </v-snackbar>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

export default {
  components: {
    HelloWorld
  },
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()

    return {
      router,
      authStore
    }
  },
  data() {
    return {
      email: 'raka@mahardika.com',
      password: 'password',
      rules: {
        email: [(val: any) => !!val || 'Email is required'],
        password: [(val: any) => !!val || 'Password is required']
      },
      errorSnackbar: false,
      errorMessage: ''
    }
  },
  computed: {
    isFormValid() {
      return (
        this.rules.email.every((rule) => rule(this.email) === true) &&
        this.rules.password.every((rule) => rule(this.password) === true)
      )
    }
  },
  methods: {
    SubmitForm() {
      try {
        this.authStore.login(this.email, this.password)
        this.router.push('/')
      } catch (error: any) {
        this.showErrorSnackbar(error.message || 'An error occurred during login')
      }
    },
    showErrorSnackbar(message: string) {
      this.errorMessage = message
      this.errorSnackbar = true
    }
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
