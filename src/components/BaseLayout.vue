<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <MainContent>
      <slot></slot>
    </MainContent>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import NavigationDrawer from './AppNavigationDrawer.vue'
import MainContent from './AppMain.vue'
import AppFooter from './AppFooter.vue'
</script>
