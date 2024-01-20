// lectureStore.ts
import { defineStore } from 'pinia'
import di from '@/di'

interface Lecture {
  lecture_id: number
  lecture_name: string
  lecturer_name: string
  lecture_date: string
  lecture_duration: number
}

export const useLectureStore = defineStore({
  id: 'lecture',
  state: () => ({
    lectures: [] as Lecture[]
  }),
  actions: {
    async fetchLectures() {
      try {
        const { results } = await di.lecture.getAllLecture()
        this.lectures = results
      } catch (error) {
        console.log(error)
      }
    }
  }
})
