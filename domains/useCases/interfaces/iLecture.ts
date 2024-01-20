import type { ILectureDTO } from '../../dto/LectureDTO'

export interface ILectureUseCase {
  getAllLecture(): Promise<any>
  getLecture(id: ILectureDTO): Promise<any>
}
