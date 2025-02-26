import User from '#models/user'
import { Register } from './auth_type.js'

export default class AuthQuery {
  public async Register(payload: Register) {
    return User.create(payload)
  }
}
