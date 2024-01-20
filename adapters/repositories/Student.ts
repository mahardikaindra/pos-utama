import type { IStudentRepository } from '../../domains/useCases/repository-interfaces/iStudent'
import type { IStudentDTO } from '../../domains/dto/StudentDTO'
import type { IHttp } from '../infrastructures/interfaces/iHttp'

class StudentRepository implements IStudentRepository {
  constructor(private readonly http: IHttp) {}

  async getAllStudent(): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: 'http://localhost:3000/students',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      console.log(response)
      return response
    }
  }

  async getStudent({ id }: IStudentDTO): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: `http://localhost:3000/students/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }
}

export default StudentRepository
