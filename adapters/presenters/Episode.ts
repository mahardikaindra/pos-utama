import EpisodeDTO from '../../domains/dto/EpisodeDTO'
import type { IEpisodeUseCase } from '../../domains/useCases/interfaces/iEpisode'
import type { IEpisodePresenter } from './interfaces/iEpisode'

class EpisodePresenter implements IEpisodePresenter {
  constructor(private readonly useCases: IEpisodeUseCase) {}

  async getEpisode(ids: string[]): Promise<any> {
    return await this.useCases.getEpisode(new EpisodeDTO({ ids }))
  }
}

export default EpisodePresenter
