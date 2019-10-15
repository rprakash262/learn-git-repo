import React from 'react'

import { TestContext } from '../../contexts/TestContext'

class AnotherTestComp extends React.Component {
  static contextType = TestContext

  render() {
    console.log({ this: this })
    return (
      <div>
        <p>AnotherTestComp</p>
        <p>{this.context.key1}</p>
        <p>{this.context.key2}</p>
      </div>
    )
  }
}

export default AnotherTestComp
