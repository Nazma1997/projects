export interface CreateTicket {
  user_id: number
  subject: string
  description: string
  is_submitted: boolean
  status: 'Resolved' | 'Closed' | 'Open' | 'Not submitted'
}
