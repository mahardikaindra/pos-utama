import type { ICharacterRepository } from '../../../domains/useCases/repository-interfaces/iCharacter'
import type { IEpisodeRepository } from '../../../domains/useCases/repository-interfaces/iEpisode'

export default interface IRepositories {
  character: ICharacterRepository
  episode: IEpisodeRepository
}
