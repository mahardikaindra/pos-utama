<!-- Login.vue -->
<template>
  <v-container>
    <v-card>
      <v-card-title class="headline">Login</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field v-model="email" label="Email"></v-text-field>
          <v-text-field v-model="password" label="Password" type="password"></v-text-field>
          <v-btn type="submit" color="primary">Login</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const login = () => {
  // Implement login logic here
  console.log('Login clicked with email:', email.value, 'and password:', password.value)
}
</script>

<style scoped>
/* Add your styles here */
</style>
