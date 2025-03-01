import TicketQuery from './ticket_query.js'
import {
  CreateTicket,
  GetTicketById,
  GetTicketByIdAndUserId,
  GetTicketByUser,
  UpdateTicket,
  UpdateTicketStatus,
} from './ticket_type.js'

export default class TicketService {
  public ticketQuery: TicketQuery

  constructor() {
    this.ticketQuery = new TicketQuery()
  }

  public async CreateTicket(payload: CreateTicket) {
    return this.ticketQuery.CreateTicket(payload)
  }
  public async UpdateTicket(payload: UpdateTicket) {
    return this.ticketQuery.UpdateTicket(payload)
  }
  public async UpdateTicketStatus(payload: UpdateTicketStatus) {
    return this.ticketQuery.UpdateTicketStatus(payload)
  }
  public async DeleteTicket(query: GetTicketByIdAndUserId) {
    return this.ticketQuery.DeleteTicket(query)
  }

  public async GetAllTickets(filter: any) {
    return this.ticketQuery.GetAllTickets(filter)
  }
  public async GetTicketByUser(query: GetTicketByUser) {
    return this.ticketQuery.GetTicketByUser(query)
  }
}
