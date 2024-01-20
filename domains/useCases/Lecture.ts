import type { ILectureUseCase } from './interfaces/iLecture'
import type { ILectureRepository } from './repository-interfaces/iLecture'
import type { ILectureDTO } from '../dto/LectureDTO'

class LectureUseCase implements ILectureUseCase {
  constructor(private readonly lectureRepo: ILectureRepository) {}

  async getAllLecture(): Promise<string> {
    const data = await this.lectureRepo.getAllLecture()
    return data
  }
  async getLecture(id: ILectureDTO): Promise<string> {
    const data = await this.lectureRepo.getLecture(id)
    return data
  }
}

export default LectureUseCase
