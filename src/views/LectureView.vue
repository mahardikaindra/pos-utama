<template>
    <BaseLayout>
      <v-container>
        <LectureTable />
      </v-container>
    </BaseLayout>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import LectureTable from '@/components/LectureTable.vue'
  import { useLectureStore } from '@/stores/lectures'
  import BaseLayout from '@/components/BaseLayout.vue'
  
  export default defineComponent({
    components: {
      LectureTable,
      BaseLayout
    },
    setup() {
      const characterStore = useLectureStore()
      characterStore.fetchLectures()
      return {
        lectures: characterStore.lectures
      }
    }
  })
  </script>
  