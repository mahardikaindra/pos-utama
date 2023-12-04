<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <AppBar />
    <MainContent>
      <slot></slot>
    </MainContent>
    <AppFooter />
  </v-app>
</template>

<script setup lang="ts">
import NavigationDrawer from './AppNavigationDrawer.vue'
import AppBar from './AppHeader.vue'
import MainContent from './AppMain.vue'
import AppFooter from './AppFooter.vue'
</script>
