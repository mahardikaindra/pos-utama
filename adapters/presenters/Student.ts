import StudentDTO from '../../domains/dto/StudentDTO'
import type { IStudentUseCase } from '../../domains/useCases/interfaces/iStudent'
import type { IStudentPresenter } from './interfaces/iStudent'

class StudentPresenter implements IStudentPresenter {
  constructor(private readonly useCases: IStudentUseCase) {}
  
  async getAllStudent(): Promise<any> {
    return await this.useCases.getAllStudent()
  }
  
  async getStudent(id: number): Promise<any> {
    return await this.useCases.getStudent(new StudentDTO({ id }))
  }
}

export default StudentPresenter
