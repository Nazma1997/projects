import TicketQuery from './ticket_query.js'
import { CreateTicket } from './ticket_type.js'

export default class TicketService {
  public ticketQuery: TicketQuery

  constructor() {
    this.ticketQuery = new TicketQuery()
  }

  public async CreateTicket(payload: CreateTicket) {
    return this.ticketQuery.CreateTicket(payload)
  }
}
