<template>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">NO</th>
          <th class="text-left">Name</th>
          <th class="text-left">Age</th>
          <th class="text-left">Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in students" :key="item.student_id ">
          <td>{{ item.student_id  }}</td>
          <td>{{ item.student_name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.grade }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import { useStudentStore } from '@/stores/students'
  
  export default defineComponent({
    computed: {
      students() {
        const studentStore = useStudentStore()
        return studentStore.students
      },
      headers() {
        return [
          { text: 'ID', value: 'student_id ' },
          { text: 'Name', value: 'student_name' },
          { text: 'Age', value: 'age' },
          { text: 'Grade', value: 'grade' }
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
  