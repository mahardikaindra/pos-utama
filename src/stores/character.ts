// characterStore.ts
import { defineStore } from 'pinia'
import di from '@/di'

interface Character {
  id: number
  name: string
  images: string
  gender: string
}

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    characters: [] as Character[]
  }),
  actions: {
    async fetchCharacters() {
      try {
        const { results } = await di.character.getAllCharacter()
        this.characters = results
      } catch (error) {
        console.log(error)
      }
    }
  }
})
