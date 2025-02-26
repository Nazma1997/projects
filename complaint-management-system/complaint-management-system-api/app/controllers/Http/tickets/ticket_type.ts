export interface CreateTicket {
  user_id: number
  subject: string
  description: string
  is_submitted: boolean
  status: 'Resolved' | 'Closed' | 'Open' | 'Not submitted'
}
export interface UpdateTicket {
  id: number
  user_id: number
  subject?: string
  description?: string
  is_submitted?: boolean
  status?: 'Resolved' | 'Closed' | 'Open' | 'Not submitted'
}
export interface UpdateTicketStatus {
  id: number
  status: 'Resolved' | 'Closed' | 'Open' | 'Not submitted'
}
export interface GetTicketByIdAndUserId {
  id: number
  user_id: number
}
export interface GetTicketByUser {
  user_id: number
}
