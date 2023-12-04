<template>
  <v-navigation-drawer v-model="drawerProp">
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
          <v-icon :class="item.icon" class="white--text">{{ item.icon }}</v-icon>
        </template>
 
        <v-list-item-title><span class="text-blue-darken-2">{{ item.title }}</span></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
 </template>
 <script setup lang="ts">
 import { ref, defineProps, defineEmits, onUpdated } from 'vue';
 
 const { modelValue } = defineProps(['modelValue']);
 
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
 ]);
 
 const drawerProp = ref(modelValue);
 const emit = defineEmits(['update:modelValue']);
 
 onUpdated(() => {
  emit('update:modelValue', drawerProp.value);
 });
 </script>
 
 <style scoped>
 .logo {
  display: block;
  margin: 0 auto 0.5rem;
 }
 </style>
 