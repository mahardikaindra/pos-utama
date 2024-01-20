import type IRepositories from './interfaces/iRepositories'
import type IInfrastructures from './interfaces/iInfrastructures'
import CharacterRepository from '../../adapters/repositories/Character'
import LectureRepository from '../../adapters/repositories/Lecture'
import StudentRepository from '../../adapters/repositories/Student'
import SubjectRepository from '../../adapters/repositories/Subject'
import EpisodeRepository from '../../adapters/repositories/Episode'

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    character: new CharacterRepository(infrastructure.http),
    lecture: new LectureRepository(infrastructure.http),
    student: new StudentRepository(infrastructure.http),
    subject: new SubjectRepository(infrastructure.http),
    episode: new EpisodeRepository(infrastructure.http)
  }
}
