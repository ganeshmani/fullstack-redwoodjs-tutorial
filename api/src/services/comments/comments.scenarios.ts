import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    one: {
      data: {
        body: 'String',
        post: {
          create: {
            title: 'String',
            body: 'String',
            author: {
              create: {
                email: 'String6330464',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        author: {
          create: {
            email: 'String447016',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        body: 'String',
        post: {
          create: {
            title: 'String',
            body: 'String',
            author: {
              create: {
                email: 'String1582979',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
        author: {
          create: {
            email: 'String9018547',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
