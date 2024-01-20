import type { IStudentDTO } from '../../dto/StudentDTO'

export interface IStudentRepository {
  getAllStudent(): Promise<any>
  getStudent(id: IStudentDTO): Promise<any>
}
