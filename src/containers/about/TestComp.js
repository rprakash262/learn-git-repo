import React from 'react'

import AnotherTestComp from './AnotherTestComp'

class TestComp extends React.Component {
  render() {
    return (
      <div>
        <p>TestComp</p>
        <AnotherTestComp />
      </div>
    )
  }
}

export default TestComp
