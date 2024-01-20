// studentStore.ts
import { defineStore } from 'pinia'
import di from '@/di'

interface Student {
  student_id : number
  student_name: string
  age: string
  grade: string
}

export const useStudentStore = defineStore({
  id: 'student',
  state: () => ({
    students: [] as Student[]
  }),
  actions: {
    async fetchStudents() {
      try {
        const { results } = await di.student.getAllStudent()
        this.students = results
      } catch (error) {
        console.log(error)
      }
    }
  }
})
