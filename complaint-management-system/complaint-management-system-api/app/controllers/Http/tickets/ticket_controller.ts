import { CreateTicketValidator } from './ticket_validator.js'
import TicketService from './tickets_service.js'
import { HttpContext } from '@adonisjs/core/http'

export default class TicketController {
  public ticketService: TicketService
  constructor() {
    this.ticketService = new TicketService()
  }

  public async CreateTicket({ request, auth }: HttpContext) {
    const payload = await request.validateUsing(CreateTicketValidator)
    this.ticketService.CreateTicket({
      ...payload,
      user_id: auth.user!.id,
    })
  }
}
