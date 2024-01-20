import type { ISubjectRepository } from '../../domains/useCases/repository-interfaces/iSubject'
import type { ISubjectDTO } from '../../domains/dto/SubjectDTO'
import type { IHttp } from '../infrastructures/interfaces/iHttp'

class SubjectRepository implements ISubjectRepository {
  constructor(private readonly http: IHttp) {}

  async getAllSubject(): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: 'http://localhost:3000/subjects',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }

  async getSubject({ id }: ISubjectDTO): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: `http://localhost:3000/subjects/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }
}

export default SubjectRepository
