<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-img
        alt="Vue logo"
        class="logo"
        src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-text-logo-light.svg"
        width="125"
        height="125"
      />
      <v-list data-cy="btn_side_nav">
        <v-list-item v-for="item in menuItems" :key="item.title" link :to="item.link">
          <template v-slot:prepend>
            <v-icon :color="item.color" :icon="item.icon">{{ item.icon }}</v-icon>
          </template>

          <v-list-item-title
            ><span class="text-blue-darken-2">{{ item.title }}</span></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Sistem Mahasiswa</v-app-bar-title>
    </v-app-bar>

    <AppMain>
      <p>Mata Kuliah</p>
    </AppMain>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import AppFooter from '@/components/AppFooter.vue'
import AppMain from '@/components/AppMain.vue'

const drawer = ref(false)

const menuItems = ref([
  {
    icon: 'mdi-monitor-dashboard',
    title: 'Mahasiswa',
    link: '/mahasiswa',
    color: 'orange darken-2'
  },
  {
    icon: 'mdi-api',
    title: 'Mata Kuliah',
    link: '/matkul',
    color: 'green darken-2'
  },
  {
    icon: 'mdi-nature-people',
    title: 'Dosen',
    link: '/dosen',
    color: 'blue darken-2'
  },
  {
    icon: 'mdi-nature-people',
    title: 'About',
    link: '/about',
    color: 'blue darken-2'
  }
])

onMounted(() => {
  // Initialization logic when the component is mounted.
  // const mhs = new Mahasiswa('npm', 'nama', 3);
})
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 0.5rem;
}
</style>
