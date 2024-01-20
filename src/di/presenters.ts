import type IUseCases from './interfaces/iUseCases'
import CharacterPresenter from '../../adapters/presenters/Character'
import LecturePresenter from '../../adapters/presenters/Lecture'
import StudentPresenter from '../../adapters/presenters/Student'
import SubjectPresenter from '../../adapters/presenters/Subject'
import EpisodePresenter from '../../adapters/presenters/Episode'

export default (useCases: IUseCases) => {
  return {
    character: new CharacterPresenter(useCases.character),
    lecture: new LecturePresenter(useCases.lecture),
    student: new StudentPresenter(useCases.student),
    subject: new SubjectPresenter(useCases.subject),
    episode: new EpisodePresenter(useCases.episode)
  }
}
