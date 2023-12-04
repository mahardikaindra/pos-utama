import type { ICharacterPresenter } from '../../../adapters/presenters/interfaces/iCharacter'
import type { IEpisodePresenter } from '../../../adapters/presenters/interfaces/iEpisode'

export default interface IPresenters {
  character: ICharacterPresenter
  episode: IEpisodePresenter
}
