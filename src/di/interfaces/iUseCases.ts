import type { ICharacterUseCase } from '../../../domains/useCases/interfaces/iCharacter'
import type { ILectureUseCase } from '../../../domains/useCases/interfaces/iLecture'
import type { IStudentUseCase } from '../../../domains/useCases/interfaces/iStudent'
import type { ISubjectUseCase } from '../../../domains/useCases/interfaces/iSubject'
import type { IEpisodeUseCase } from '../../../domains/useCases/interfaces/iEpisode'

export default interface IUseCases {
  character: ICharacterUseCase
  lecture: ILectureUseCase
  student: IStudentUseCase
  subject: ISubjectUseCase
  episode: IEpisodeUseCase
}
