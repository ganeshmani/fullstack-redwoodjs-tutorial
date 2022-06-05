import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String3639726',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: 'String',
      },
    },
    two: {
      data: {
        email: 'String5399869',
        hashedPassword: 'String',
        salt: 'String',
        resetToken: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
