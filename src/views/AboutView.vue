<template>
  <div class="about">
    <div v-for="(item, index) in listItems" :key="index">
       {{item?.name}}
     </div>
  </div>
</template>

<script lang="ts">
import di from '../di'

interface Item {
  name: string;
}

export default {
  data(): { listItems: Item[] } {
    return {
      listItems: []
    }
  },
  methods: {
    async fetchingCharacters() {
      try {
        const {results} = await di.character.getAllCharacter()
        this.listItems = results;
      } catch (error) {
        console.error(error);
      }
    }
  },
  mounted() {
    this.fetchingCharacters();
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
