import SubjectDTO from '../../domains/dto/SubjectDTO'
import type { ISubjectUseCase } from '../../domains/useCases/interfaces/iSubject'
import type { ISubjectPresenter } from './interfaces/iSubject'

class SubjectPresenter implements ISubjectPresenter {
  constructor(private readonly useCases: ISubjectUseCase) {}

  async getAllSubject(): Promise<any> {
    return await this.useCases.getAllSubject()
  }
  async getSubject(id: number): Promise<any> {
    return await this.useCases.getSubject(new SubjectDTO({ id }))
  }
}

export default SubjectPresenter
