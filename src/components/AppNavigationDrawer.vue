<template>
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
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn>
      <v-avatar color="info">
        <span class="text-h6">RM</span>
      </v-avatar>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-dots-vertical</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
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
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 0.5rem;
}
</style>
