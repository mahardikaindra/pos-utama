import type { IEpisodeUseCase } from './interfaces/iEpisode'
import type { IEpisodeRepository } from './repository-interfaces/iEpisode'
import type { IEpisodeDTO } from '../dto/EpisodeDTO'

class EpisodeUseCase implements IEpisodeUseCase {
  constructor(private readonly characterRepo: IEpisodeRepository) {}

  async getEpisode(ids: IEpisodeDTO): Promise<string> {
    const data = await this.characterRepo.getEpisode(ids)
    return data
  }
}

export default EpisodeUseCase
