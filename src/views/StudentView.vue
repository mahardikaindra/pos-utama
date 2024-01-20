<template>
    <BaseLayout>
      <v-container>
        <StudentTable />
      </v-container>
    </BaseLayout>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import StudentTable from '@/components/StudentTable.vue'
  import { useStudentStore } from '@/stores/students'
  import BaseLayout from '@/components/BaseLayout.vue'
  
  export default defineComponent({
    components: {
      StudentTable,
      BaseLayout
    },
    setup() {
      const studentStore = useStudentStore()
      studentStore.fetchStudents()
      return {
        students: studentStore.students
      }
    }
  })
  </script>
  