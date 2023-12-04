<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="onClickDrawer"></v-app-bar-nav-icon>
    <v-app-bar-title>{{ title }}</v-app-bar-title>
  </v-app-bar>
 </template>
 
 <script setup lang="ts">
 import { ref, defineProps, defineEmits } from 'vue';
 
 const { title } = defineProps(['title']);
 const drawer = ref(false);
 const emit = defineEmits(['update:modelValue']);
 
 const onClickDrawer = () => {
  drawer.value = !drawer.value;
  emit('update:modelValue', drawer.value);
 };
 </script>
 