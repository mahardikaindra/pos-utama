<template>
  <v-app id="inspire">
    <AppNavigationDrawer v-model="drawer"/>
    <AppHeader title="Sistem Perkuliahan" on-click-drawer="drawer = !drawer" />    
    <AppMain>
      <TheWelcome />
    </AppMain>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TheWelcome from '@/components/TheWelcome.vue'
import { useAuthStore } from '@/stores/auth'
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppMain from '@/components/AppMain.vue'
import AppNavigationDrawer from '@/components/AppNavigationDrawer.vue'
const authStore = useAuthStore()
const drawer = ref(false)

const isLogin = ref(authStore.isAuthenticated)

onMounted(() => {
  // Initialization logic when the component is mounted.
  // const mhs = new Mahasiswa('npm', 'nama', 3);
})
</script>