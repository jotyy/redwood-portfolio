import { render } from '@redwoodjs/testing/web'

import AboutCard from './AboutCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AboutCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AboutCard />)
    }).not.toThrow()
  })
})
