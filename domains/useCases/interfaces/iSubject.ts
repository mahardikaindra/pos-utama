import type { ISubjectDTO } from '../../dto/SubjectDTO'

export interface ISubjectUseCase {
  getAllSubject(): Promise<any>
  getSubject(id: ISubjectDTO): Promise<any>
}
