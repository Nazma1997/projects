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

  public async CreateTicket(ctx: HttpContext) {
    const payload = await ctx.request.validateUsing(CreateTicketValidator)
    return this.ticketService.CreateTicket({
      ...payload,
      user_id: ctx.auth.user!.id,
    })
  }
  public async UpdateTicket({ request, auth }: HttpContext) {
    console.log('request', request)
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

  public async GetAllTickets({ auth, request }: HttpContext) {
    const queryParams = request.qs()
    const filter = queryParams.filter || 'All'

    if (auth.user!.user_type === 'ADMIN') {
      return this.ticketService.GetAllTickets(filter)
    } else
      return this.ticketService.GetTicketByUser({
        user_id: auth.user!.id,
        filter: filter,
      })
  }
}
