import type { ISubjectDTO } from '../../dto/SubjectDTO'

export interface ISubjectRepository {
  getAllSubject(): Promise<any>
  getSubject(id: ISubjectDTO): Promise<any>
}
