import type { ISubjectUseCase } from './interfaces/iSubject'
import type { ISubjectRepository } from './repository-interfaces/iSubject'
import type { ISubjectDTO } from '../dto/SubjectDTO'

class SubjectUseCase implements ISubjectUseCase {
  constructor(private readonly subjectRepo: ISubjectRepository) {}

  async getAllSubject(): Promise<string> {
    const data = await this.subjectRepo.getAllSubject()
    return data
  }
  async getSubject(id: ISubjectDTO): Promise<string> {
    const data = await this.subjectRepo.getSubject(id)
    return data
  }
}

export default SubjectUseCase
