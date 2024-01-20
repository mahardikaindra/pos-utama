<template>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">NO</th>
          <th class="text-left">Nama Matakuliah</th>
          <th class="text-left">Kode Matakuliah</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in subject" :key="item.subject_id ">
          <td>{{ item.subject_id   }}</td>
          <td>{{ item.subject_name }}</td>
          <td>{{ item.subject_code  }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useSubjectStore } from '@/stores/subjects'
  
  export default defineComponent({
    computed: {
      subject() {
        const subjectStore = useSubjectStore()
        return subjectStore.subjects
      },
      headers() {
        return [
          { text: 'ID', value: 'subject_id ' },
          { text: 'Nama Matakuliah', value: 'subject_name' },
          { text: 'Kode Matakuliah', value: 'subject_code' },
        ]
      }
    }
  })
  </script>
  <style scoped>
  /* Your scoped styles here */
  .v-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .v-table th,
  .v-table td {
    border: 1px solid #e0e0e0;
    padding: 8px;
  }
  </style>
  