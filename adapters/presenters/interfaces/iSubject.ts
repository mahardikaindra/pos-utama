export interface ISubjectPresenter {
    getAllSubject(): Promise<any>
    getSubject(id: number): Promise<any>
  }
  