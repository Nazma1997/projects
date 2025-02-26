import {
  CreateTicketValidator,
  GetTicketByIdValidator,
  UpdateTicketStatusValidator,
  UpdateTicketValidator,
} from './ticket_validator.js'
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
  public async UpdateTicket({ request, auth }: HttpContext) {
    const payload = await request.validateUsing(UpdateTicketValidator)
    return this.ticketService.UpdateTicket({
      user_id: auth.user!.id,
      ...payload,
    })
  }
  public async UpdateTicketStatus({ request, auth }: HttpContext) {
    const isAdmin = auth.user!.user_type === 'ADMIN'
    if (!isAdmin) {
      throw new Error('Unauthorized')
    }
    const payload = await request.validateUsing(UpdateTicketStatusValidator)
    return this.ticketService.UpdateTicketStatus(payload)
  }

  public async DeleteTicket({ request, auth }: HttpContext) {
    const payload = await request.validateUsing(GetTicketByIdValidator)
    return this.ticketService.DeleteTicket({
      user_id: auth.user!.id,
      ...payload,
    })
  }

  public async GetAllTickets({ auth }: HttpContext) {
    const isAdmin = auth.user!.user_type === 'ADMIN'
    if (!isAdmin) {
      throw new Error('Unauthorized')
    }
    return this.ticketService.GetAllTickets()
  }
  public async GetTicketByUser({ auth }: HttpContext) {
    return this.ticketService.GetTicketByUser({
      user_id: auth.user!.id,
    })
  }
}
