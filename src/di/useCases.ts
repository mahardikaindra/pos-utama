import type IRepositories from './interfaces/iRepositories'
import type IUseCases from './interfaces/iUseCases'
import Character from '../../domains/useCases/Character'
import Lecture from '../../domains/useCases/Lecture'
import Student from '../../domains/useCases/Student'
import Subject from '../../domains/useCases/Subject'
import Episode from '../../domains/useCases/Episode'

export default (repositories: IRepositories): IUseCases => {
  return {
    character: new Character(repositories.character),
    lecture: new Lecture(repositories.lecture),
    student: new Student(repositories.student),
    subject: new Subject(repositories.subject),
    episode: new Episode(repositories.episode)
  }
}
