import router from '@adonisjs/core/services/router'
const AuthController = () => import('./auth_controller.js')

router
  .group(() => {
    router.post('register', [AuthController, 'Register'])
    router.post('login', [AuthController, 'Login'])
    router.post('logout', [AuthController, 'Logout'])
  })
  .prefix('api/auth/user')
