import vine from '@vinejs/vine'

export const CreateTicketValidator = vine.compile(
  vine.object({
    subject: vine.string().minLength(2).maxLength(64),
    description: vine.string().minLength(10).maxLength(500),
    status: vine.enum(['Resolved', 'Closed', 'Open', 'Not submitted']),
  })
)

export const UpdateTicketValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    subject: vine.string().minLength(2).maxLength(64).optional(),
    description: vine.string().minLength(10).maxLength(500).optional(),
    status: vine.enum(['Resolved', 'Closed', 'Open', 'Not submitted']).optional(),
  })
)

export const UpdateTicketStatusValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    status: vine.enum(['Resolved', 'Closed', 'Open', 'Not submitted']),
  })
)
export const GetTicketByIdValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)

export const GetTicketByUserValidator = vine.compile(
  vine.object({
    user_id: vine.number().positive(),
  })
)
