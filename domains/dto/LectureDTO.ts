export interface ILectureParams {
    id: number
  }
  
  export interface ILectureDTO {
    readonly id: number
  }
  
  class LectureDTO implements ILectureDTO {
    readonly id: number
  
    constructor(param: ILectureParams) {
      this.id = param.id
    }
  }
  
  export default LectureDTO
  