import type IUseCases from './interfaces/iUseCases'
import CharacterPresenter from '../../adapters/presenters/Character'
import EpisodePresenter from '../../adapters/presenters/Episode'

export default (useCases: IUseCases) => {
  return {
    character: new CharacterPresenter(useCases.character),
    episode: new EpisodePresenter(useCases.episode)
  }
}
