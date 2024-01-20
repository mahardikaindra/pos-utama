// subjectStore.ts
import { defineStore } from 'pinia'
import di from '@/di'

interface Subject {
  subject_id: number
  subject_name: string
  subject_code: string
}

export const useSubjectStore = defineStore({
  id: 'subject',
  state: () => ({
    subjects: [] as Subject[]
  }),
  actions: {
    async fetchSubjects() {
      try {
        const { results } = await di.subject.getAllSubject()
        this.subjects = results
      } catch (error) {
        console.log(error)
      }
    }
  }
})
