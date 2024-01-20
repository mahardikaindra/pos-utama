export interface ISubjectParams {
    id: number
  }
  
  export interface ISubjectDTO {
    readonly id: number
  }
  
  class SubjectDTO implements ISubjectDTO {
    readonly id: number
  
    constructor(param: ISubjectParams) {
      this.id = param.id
    }
  }
  
  export default SubjectDTO
  