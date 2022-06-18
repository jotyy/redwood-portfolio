import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CompanyCreateArgs>({
  company: {
    one: {
      data: {
        name: 'String',
        role: 'String',
        period: 'String',
        skills: 'String',
      },
    },
    two: {
      data: {
        name: 'String',
        role: 'String',
        period: 'String',
        skills: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
