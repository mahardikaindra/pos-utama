import LectureDTO from '../../domains/dto/LectureDTO'
import type { ILectureUseCase } from '../../domains/useCases/interfaces/iLecture'
import type { ILecturePresenter } from './interfaces/iLecture'

class LecturePresenter implements ILecturePresenter {
  constructor(private readonly useCases: ILectureUseCase) {}

  async getAllLecture(): Promise<any> {
    return await this.useCases.getAllLecture()
  }
  async getLecture(id: number): Promise<any> {
    return await this.useCases.getLecture(new LectureDTO({ id }))
  }
}

export default LecturePresenter
