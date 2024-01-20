import type { ILectureRepository } from '../../domains/useCases/repository-interfaces/iLecture'
import type { ILectureDTO } from '../../domains/dto/LectureDTO'
import type { IHttp } from '../infrastructures/interfaces/iHttp'

class LectureRepository implements ILectureRepository {
  constructor(private readonly http: IHttp) {}

  async getAllLecture(): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: 'http://localhost:3000/lectures',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }

  async getLecture({ id }: ILectureDTO): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: `http://localhost:3000/lectures/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }
}

export default LectureRepository
