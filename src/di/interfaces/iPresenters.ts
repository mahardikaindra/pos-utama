import type { ICharacterPresenter } from '../../../adapters/presenters/interfaces/iCharacter'
import type { ILecturePresenter } from '../../../adapters/presenters/interfaces/iLecture'
import type { IStudentPresenter } from '../../../adapters/presenters/interfaces/iStudent'
import type { ISubjectPresenter } from '../../../adapters/presenters/interfaces/iSubject'
import type { IEpisodePresenter } from '../../../adapters/presenters/interfaces/iEpisode'

export default interface IPresenters {
  character: ICharacterPresenter
  lecture: ILecturePresenter
  student: IStudentPresenter
  subject: ISubjectPresenter
  episode: IEpisodePresenter
}
