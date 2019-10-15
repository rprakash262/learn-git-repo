import React from 'react'

export const TestContext = React.createContext()

export const TestProvider = props => {
  const value = {
    key1: 'value1',
    key2: 'value2'
  }

  return (
    <TestContext.Provider value={value}>{props.children}</TestContext.Provider>
  )
}
