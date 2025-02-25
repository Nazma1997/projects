import { HttpContext } from '@adonisjs/core/http'

import AuthService from './auth_service.js'
import { RegisterValidator } from './auth_validator.js'

export default class AuthController {
  public authService: AuthService
  constructor() {
    this.authService = new AuthService()
  }

  public async Register({ request }: HttpContext) {
    const payload = await request.validateUsing(RegisterValidator)
    return this.authService.Register(payload)
  }
}
