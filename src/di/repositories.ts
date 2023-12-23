import type IRepositories from './interfaces/iRepositories'
import type IInfrastructures from './interfaces/iInfrastructures'
import CharacterRepository from '../../adapters/repositories/Character'
import EpisodeRepository from '../../adapters/repositories/Episode'

export default (infrastructure: IInfrastructures): IRepositories => {
  return {
    character: new CharacterRepository(infrastructure.http),
    episode: new EpisodeRepository(infrastructure.http)
  }
}
