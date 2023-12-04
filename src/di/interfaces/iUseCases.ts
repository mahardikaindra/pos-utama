import type { ICharacterUseCase } from '../../../domains/useCases/interfaces/iCharacter'
import type { IEpisodeUseCase } from '../../../domains/useCases/interfaces/iEpisode'

export default interface IUseCases {
  character: ICharacterUseCase
  episode: IEpisodeUseCase
}
