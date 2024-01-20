import type { IStudentDTO } from '../../dto/StudentDTO'

export interface IStudentUseCase {
  getAllStudent(): Promise<any>
  getStudent(id: IStudentDTO): Promise<any>
}
