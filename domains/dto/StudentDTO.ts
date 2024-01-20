export interface IStudentParams {
    id: number
  }
  
  export interface IStudentDTO {
    readonly id: number
  }
  
  class StudentDTO implements IStudentDTO {
    readonly id: number
  
    constructor(param: IStudentParams) {
      this.id = param.id
    }
  }
  
  export default StudentDTO
  