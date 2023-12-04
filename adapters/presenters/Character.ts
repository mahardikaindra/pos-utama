import CharacterDTO from '../../domains/dto/CharacterDTO'
import type { ICharacterUseCase } from '../../domains/useCases/interfaces/iCharacter'
import type { ICharacterPresenter } from './interfaces/iCharacter'

class CharacterPresenter implements ICharacterPresenter {
  constructor(private readonly useCases: ICharacterUseCase) {}

  async getAllCharacter(): Promise<any> {
    return await this.useCases.getAllCharacter()
  }
  async getCharacter(id: number): Promise<any> {
    return await this.useCases.getCharacter(new CharacterDTO({ id }))
  }
}

export default CharacterPresenter
