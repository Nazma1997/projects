import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Ticket extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare user_id: number

  @column()
  declare subject: string
  @column()
  declare description: string

  @column()
  declare is_submitted: boolean

  @column()
  declare status: 'Resolved' | 'Closed' | 'Open' | 'Not submitted'

  @column()
  declare created_at: string
  @column()
  declare updated_at: string
}
