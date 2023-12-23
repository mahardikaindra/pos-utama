import UserDTO from '../../domains/dto/UserDTO'
import type { ISessionUseCase } from '../../domains/useCases/interfaces/iSession'
import type { ISessionPresenter } from './interfaces/iSession'

class SessionPresenter implements ISessionPresenter {
  constructor(private readonly useCases: ISessionUseCase) {}

  async login(id: string, pw: string): Promise<string> {
    return await this.useCases.login(new UserDTO({ id, pw }))
  }

  getToken(): Promise<string> {
    return this.useCases.getToken()
  }

  setToken(token: string): void {
    this.useCases.setToken(token)
  }

  removeToken(): void {
    this.useCases.removeToken()
  }
}

export default SessionPresenter
