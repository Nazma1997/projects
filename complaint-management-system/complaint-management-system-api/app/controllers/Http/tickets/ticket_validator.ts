import vine from '@vinejs/vine'

export const CreateTicketValidator = vine.compile(
  vine.object({
    subject: vine.string().minLength(2).maxLength(64),
    description: vine.string().minLength(10).maxLength(500),
    is_submitted: vine.boolean(),
    status: vine.enum(['Resolved', 'Closed', 'Open', 'Not submitted']),
  })
)
