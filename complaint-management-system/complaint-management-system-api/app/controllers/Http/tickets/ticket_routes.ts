import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const TicketController = () => import('./ticket_controller.js')

router
  .group(() => {
    router.post('create', [TicketController, 'CreateTicket'])
  })
  .middleware(
    middleware.auth({
      guards: ['web'],
    })
  )
  .prefix('ticket')
