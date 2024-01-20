export interface IStudentPresenter {
    getAllStudent(): Promise<any>
    getStudent(id: number): Promise<any>
  }
  