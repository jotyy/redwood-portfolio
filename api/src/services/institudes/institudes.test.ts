import {
  institudes,
  institude,
  createInstitude,
  updateInstitude,
  deleteInstitude,
} from './institudes'
import type { StandardScenario } from './institudes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('institudes', () => {
  scenario('returns all institudes', async (scenario: StandardScenario) => {
    const result = await institudes()

    expect(result.length).toEqual(Object.keys(scenario.institude).length)
  })

  scenario('returns a single institude', async (scenario: StandardScenario) => {
    const result = await institude({ id: scenario.institude.one.id })

    expect(result).toEqual(scenario.institude.one)
  })

  scenario('creates a institude', async () => {
    const result = await createInstitude({
      input: {
        title: 'String',
        short_title: 'String',
        role: 'String',
        skills: 'String',
        period: 'String',
        startingYear: 'String',
      },
    })

    expect(result.title).toEqual('String')
    expect(result.short_title).toEqual('String')
    expect(result.role).toEqual('String')
    expect(result.skills).toEqual('String')
    expect(result.period).toEqual('String')
    expect(result.startingYear).toEqual('String')
  })

  scenario('updates a institude', async (scenario: StandardScenario) => {
    const original = await institude({ id: scenario.institude.one.id })
    const result = await updateInstitude({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a institude', async (scenario: StandardScenario) => {
    const original = await deleteInstitude({ id: scenario.institude.one.id })
    const result = await institude({ id: original.id })

    expect(result).toEqual(null)
  })
})
