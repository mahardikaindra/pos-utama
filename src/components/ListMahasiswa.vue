<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-pagination :length="info.pages" @input="fetchCharacters"></v-pagination>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6">
        <v-list>
          <v-list-item v-for="character in listItems" :key="character?.id">
            <v-list-item-content>
              <v-list-item-title>{{ character.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import di from '../di'

interface Character {
  id: number
  name: string
}

interface Info {
  count: number
  pages: number
  next: string
  prev: string
}

export default {
  data(): { listItems: Character[]; info: Info } {
    return {
      listItems: [],
      info: {
        count: 0,
        pages: 0,
        next: '',
        prev: ''
      }
    }
  },
  methods: {
    async fetchCharacters() {
      try {
        const { results, info } = await di.character.getAllCharacter()
        this.listItems = results
        this.info = info
      } catch (error) {
        console.error(error)
      }
    }
  },
  mounted() {
    this.fetchCharacters()
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
