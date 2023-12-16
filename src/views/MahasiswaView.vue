<template>
  <BaseLayout>
    <v-container>
      <h1>Mahasiswa</h1>
      <MahasiswaForm />
      <v-container>
        <v-list>
          <v-list-item v-for="mahasiswa in mahasiswas" :key="mahasiswa.npm">
            <v-list-item-content>
              <v-list-item-title>{{ mahasiswa.npm }}</v-list-item-title>
              <v-list-item-title>{{ mahasiswa.nama }}</v-list-item-title>
              <v-list-item-subtitle>{{ mahasiswa.semester }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-container>
  </BaseLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import BaseLayout from '@/components/BaseLayout.vue'
import MahasiswaForm from '@/components/MahasiswaForm.vue'
import { useMahasiswaStore } from '@/stores/mahasiswa'

const mahasiswaStore = useMahasiswaStore()
const mahasiswas = mahasiswaStore.getMahasiswas()

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
