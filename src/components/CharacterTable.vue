<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">NO</th>
        <th class="text-left">Name</th>
        <th class="text-left">Gender</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in characters" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.gender }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCharacterStore } from '@/stores/character'

export default defineComponent({
  computed: {
    characters() {
      const characterStore = useCharacterStore()
      return characterStore.characters
    },
    headers() {
      return [
        { text: 'ID', value: 'id' },
        { text: 'Name', value: 'name' },
        { text: 'Images', value: 'images' },
        { text: 'Gender', value: 'gender' }
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
