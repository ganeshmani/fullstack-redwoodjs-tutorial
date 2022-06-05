import { render } from '@redwoodjs/testing/web'

import NewpostPage from './NewpostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewpostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewpostPage />)
    }).not.toThrow()
  })
})
