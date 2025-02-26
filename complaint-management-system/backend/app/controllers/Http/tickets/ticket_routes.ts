import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
const TicketController = () => import('./ticket_controller.js')

router
  .group(() => {
    router.post('create', [TicketController, 'CreateTicket'])
    router.post('update', [TicketController, 'UpdateTicket'])
    router.post('update-status', [TicketController, 'UpdateTicketStatus'])
    router.post('delete', [TicketController, 'DeleteTicket'])
    router.get('all', [TicketController, 'GetAllTickets'])
    router.get('by-user', [TicketController, 'GetTicketByUser'])
  })
  .middleware(
    middleware.auth({
      guards: ['web'],
    })
  )
  .prefix('ticket')
