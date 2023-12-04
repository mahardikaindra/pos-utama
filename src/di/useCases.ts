import type IRepositories from './interfaces/iRepositories'
import type IUseCases from './interfaces/iUseCases'
import Character from '../../domains/useCases/Character'
import Episode from '../../domains/useCases/Episode'

export default (repositories: IRepositories): IUseCases => {
  return {
    character: new Character(repositories.character),
    episode: new Episode(repositories.episode)
  }
}
