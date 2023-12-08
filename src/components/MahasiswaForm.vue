<!-- MahasiswaForm.vue -->
<template>
  <v-container>
    <v-form @submit.prevent="submitForm">
      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="npm" label="NPM" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="nama" label="Nama" required></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-text-field v-model="semester" label="Semester" required></v-text-field>
        </v-col>
      </v-row>

      <v-btn type="submit" color="primary">Submit</v-btn>
    </v-form>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useMahasiswaStore } from '@/stores/mahasiswa'

const npm = ref('')
const nama = ref('')
const semester = ref('')

const mahasiswaStore = useMahasiswaStore()

const submitForm = () => {
  // Handle form submission, e.g., send data to the server
  const mahasiswaData = {
    npm: npm.value,
    nama: nama.value,
    semester: semester.value
  }

  mahasiswaStore.addMahasiswa(mahasiswaData)
  console.log('Mahasiswa Data:', mahasiswaData)
  // You can now perform actions like sending the data to the server
}
</script>
