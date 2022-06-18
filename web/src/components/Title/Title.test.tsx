import { render } from '@redwoodjs/testing/web'

import Title from './Title'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Title', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Title underlineColor="#444" />)
    }).not.toThrow()
  })
})
