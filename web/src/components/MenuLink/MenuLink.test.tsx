import { render } from '@redwoodjs/testing/web'

import MenuLink from './MenuLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MenuLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MenuLink />)
    }).not.toThrow()
  })
})
