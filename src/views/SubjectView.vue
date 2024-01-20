<template>
    <BaseLayout>
      <v-container>
        <SubjectTable />
      </v-container>
    </BaseLayout>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import SubjectTable from '@/components/SubjectTable.vue'
  import { useSubjectStore } from '@/stores/subjects'
  import BaseLayout from '@/components/BaseLayout.vue'
  
  export default defineComponent({
    components: {
      SubjectTable,
      BaseLayout
    },
    setup() {
      const characterStore = useSubjectStore()
      characterStore.fetchSubjects()
      return {
        subjects: characterStore.subjects
      }
    }
  })
  </script>
  