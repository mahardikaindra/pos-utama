<template>
  <BaseLayout>
    <h1>Matakuliah Page</h1>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'

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
