import vine from '@vinejs/vine'

export const RegisterValidator = vine.compile(
  vine.object({
    email: vine
      .string()
      .email()
      .unique(async (db, value) => {
        const exists = await db.from('users').where('email', value).first()

        return !exists
      }),
    name: vine.string().minLength(2).maxLength(64),
    password: vine.string().minLength(6).maxLength(12),
  })
)

export const LoginValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6).maxLength(12),
  })
)
