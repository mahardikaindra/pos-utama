<template>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">NO</th>
          <th class="text-left">Dosen Matakuliah</th>
          <th class="text-left">Nama Dosen</th>
          <th class="text-left">Tanggal Mengajar</th>
          <th class="text-left">Durasi Mengajar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in students" :key="item.lecture_id  ">
          <td>{{ item.lecture_id   }}</td>
          <td>{{ item.lecture_name }}</td>
          <td>{{ item.lecturer_name }}</td>
          <td>{{ formatDate(item.lecture_date) }}</td>
          <td>{{ item.lecture_duration }} Jam</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useLectureStore } from '@/stores/lectures'
  import moment from 'moment'

  export default defineComponent({
    computed: {
    students() {
      const lectureStore = useLectureStore()
      return lectureStore.lectures
    },
    headers() {
      return [
        { text: 'ID', value: 'lecture_id' },
        { text: 'Dosen Matakuliah', value: 'lecture_name' },
        { text: 'Nama Dosen', value: 'lecturer_name' },
        { text: 'Tanggal Mengajar', value: 'lecture_date' },
        { text: 'Durasi Mengajar', value: 'lecture_duration' }
      ]
    }
  },
  methods: {
    formatDate(date: string) {
      return moment(date).format('DD MMMM YYYY')
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
  