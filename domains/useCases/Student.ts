import type { IStudentUseCase } from './interfaces/iStudent'
import type { IStudentRepository } from './repository-interfaces/iStudent'
import type { IStudentDTO } from '../dto/StudentDTO'

class StudentUseCase implements IStudentUseCase {
  constructor(private readonly studentRepo: IStudentRepository) {}

  async getAllStudent(): Promise<string> {
    const data = await this.studentRepo.getAllStudent()
    return data
  }
  async getStudent(id: IStudentDTO): Promise<string> {
    const data = await this.studentRepo.getStudent(id)
    return data
  }
}

export default StudentUseCase
