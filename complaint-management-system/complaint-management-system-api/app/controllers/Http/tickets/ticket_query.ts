import Ticket from '#models/ticket'
import { CreateTicket } from './ticket_type.js'


export default class TicketQuery {
  public async CreateTicket(payload: CreateTicket) {
    return Ticket.create(payload)
  }
}
