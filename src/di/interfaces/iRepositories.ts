import type { ICharacterRepository } from '../../../domains/useCases/repository-interfaces/iCharacter'
import type { ILectureRepository } from '../../../domains/useCases/repository-interfaces/iLecture'
import type { IStudentRepository } from '../../../domains/useCases/repository-interfaces/iStudent'
import type { ISubjectRepository } from '../../../domains/useCases/repository-interfaces/iSubject'
import type { IEpisodeRepository } from '../../../domains/useCases/repository-interfaces/iEpisode'

export default interface IRepositories {
  character: ICharacterRepository
  lecture: ILectureRepository
  student: IStudentRepository
  subject: ISubjectRepository
  episode: IEpisodeRepository
}
