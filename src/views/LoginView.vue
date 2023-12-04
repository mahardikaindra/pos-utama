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
 
 <script lang="ts">
 export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // Implement login logic here
      console.log('Login clicked with email:', this.email, 'and password:', this.password)
    }
  }
 }
 </script>
 
 <style scoped>
 /* Add your styles here */
 </style>
 