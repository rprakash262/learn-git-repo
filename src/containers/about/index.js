import React from 'react'

import { TestProvider, TestContext } from '../../contexts/TestContext'
import TestComp from './TestComp'

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Page</h1>
        <p>Did you get here via Redux?</p>
        <p>This is the change made on first branch.</p>
        <p>This change was also made on first branch.</p>
        <TestProvider>
          <TestComp />
        </TestProvider>
      </div>
    )
  }
}

export default About
