export interface ILecturePresenter {
    getAllLecture(): Promise<any>
    getLecture(id: number): Promise<any>
  }
  