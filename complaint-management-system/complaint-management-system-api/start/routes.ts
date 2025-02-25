/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import '#controllers/Http/auth/auth_routes'

router.get('/', async () => {
  return {
    hello: 'You are landed an empty ocean',
  }
})
