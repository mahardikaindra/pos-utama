import type { IEpisodeRepository } from '../../domains/useCases/repository-interfaces/iEpisode'
import type { IEpisodeDTO } from '../../domains/dto/EpisodeDTO'
import type { IHttp } from '../infrastructures/interfaces/iHttp'

class EpisodeRepository implements IEpisodeRepository {
  constructor(private readonly http: IHttp) {}

  async getEpisode({ ids }: IEpisodeDTO): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/episode/${ids}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }
}

export default EpisodeRepository
