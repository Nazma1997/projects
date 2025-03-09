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

    const tickets = Ticket.query().orderBy('id', 'desc')
    if (query.filter === 'All') {
      return tickets
        .whereIn('status', ['Open', 'Closed', 'Resolved'])
        .where('user_id', query.user_id)
    } else {
      return tickets.where('status', query.filter).where('user_id', query.user_id)
    }
  }
  public async GetAllTickets(filter: any) {
    const tickets = Ticket.query().orderBy('id', 'desc')
    if (filter === 'All') {
      return tickets.whereIn('status', ['Open', 'Resolved', 'Closed'])
    } else {
      return tickets.where('status', filter)
    }
  }
}
