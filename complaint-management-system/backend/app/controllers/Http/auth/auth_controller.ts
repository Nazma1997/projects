import User from '#models/user'
import { HttpContext } from '@adonisjs/core/http'
import AuthService from './auth_service.js'
import { LoginValidator, RegisterValidator } from './auth_validator.js'

export default class AuthController {
  public authService: AuthService
  constructor() {
    this.authService = new AuthService()
  }

  public async Register({ request }: HttpContext) {
    const payload = await request.validateUsing(RegisterValidator)
    return this.authService.Register(payload)
  }
  public async Login({ request, auth }: HttpContext) {
    const payload = await request.validateUsing(LoginValidator)
    const { email, password } = payload

    const user = await User.verifyCredentials(email, password)
    await auth.use('web').login(user)
    return {
      user_type: user.user_type,
      name: user.name,
    }
  }

  public async Logout({ auth }: HttpContext) {
    return await auth.use('web').logout()
  }
}
