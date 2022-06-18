import { render } from '@redwoodjs/testing/web'

import NavLink from './NavLink'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavLink', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavLink />)
    }).not.toThrow()
  })
})
