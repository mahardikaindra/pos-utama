import type { ILectureDTO } from '../../dto/LectureDTO'

export interface ILectureRepository {
  getAllLecture(): Promise<any>
  getLecture(id: ILectureDTO): Promise<any>
}
