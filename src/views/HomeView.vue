<template>
  <BaseLayout>
    <v-container>
      <CharacterTable />
    </v-container>
  </BaseLayout>
 </template>
 
 <script lang="ts">
 import { defineComponent } from 'vue';
 import CharacterTable from '@/components/CharacterTable.vue';
 import { useCharacterStore } from '@/stores/character';
 import BaseLayout from '@/components/BaseLayout.vue';
 
 export default defineComponent({
  components: {
    CharacterTable,
    BaseLayout
  },
  setup() {
    const characterStore = useCharacterStore();
    characterStore.fetchCharacters();
    return {
      characters: characterStore.characters
    };
  }
 });
 </script>
 