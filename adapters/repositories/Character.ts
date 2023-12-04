import type { ICharacterRepository } from '../../domains/useCases/repository-interfaces/iCharacter'
import type { ICharacterDTO } from '../../domains/dto/CharacterDTO'
import type { IHttp } from '../infrastructures/interfaces/iHttp'

class CharacterRepository implements ICharacterRepository {
  constructor(private readonly http: IHttp) {}

  async getAllCharacter(): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: 'https://rickandmortyapi.com/api/character',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }

  async getCharacter({ id }: ICharacterDTO): Promise<any> {
    const response = await this.http.request({
      method: 'GET',
      url: `https://rickandmortyapi.com/api/character/${id}`,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (response) {
      return response
    }
  }
}

export default CharacterRepository
