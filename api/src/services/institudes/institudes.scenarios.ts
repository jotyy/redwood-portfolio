import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.InstitudeCreateArgs>({
  institude: {
    one: {
      data: {
        title: 'String',
        short_title: 'String',
        role: 'String',
        skills: 'String',
        period: 'String',
        startingYear: 'String',
      },
    },
    two: {
      data: {
        title: 'String',
        short_title: 'String',
        role: 'String',
        skills: 'String',
        period: 'String',
        startingYear: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
