import AuthQuery from './auth_query.js'
import { Register } from './auth_type.js'

export default class AuthService {
  public authQuery: AuthQuery
  constructor() {
    this.authQuery = new AuthQuery()
  }

  public async Register(payload: Register) {
    return this.authQuery.Register(payload)
  }
}
