import Ticket from '#models/ticket'
import {
  CreateTicket,
  GetTicketById,
  GetTicketByIdAndUserId,
  GetTicketByUser,
  UpdateTicket,
  UpdateTicketStatus,
} from './ticket_type.js'

export default class TicketQuery {
  public async CreateTicket(payload: CreateTicket) {
    return Ticket.create(payload)
  }

  public async UpdateTicket(payload: UpdateTicket) {
    return Ticket.query()
      .where({
        id: payload.id,
        user_id: payload.user_id,
      })
      .update({
        subject: payload.subject,
        description: payload.description,
        is_submitted: payload.is_submitted,
        status: payload.status,
      })
  }

  public async UpdateTicketStatus(payload: UpdateTicketStatus) {
    return Ticket.query().where('id', payload.id).update({
      status: payload.status,
    })
  }
  public async GetTicketById(query: GetTicketById) {
    return Ticket.query().where(query).first()
  }
  public async DeleteTicket(query: GetTicketByIdAndUserId) {
    return Ticket.query().where(query).delete()
  }
  public async GetTicketByUser(query: GetTicketByUser) {
    return Ticket.query().where(query)
  }
  public async GetAllTickets() {
    return Ticket.query()
  }
}
