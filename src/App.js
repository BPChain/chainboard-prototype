import React from 'react'

import DataRetrieval from './DataRetrieval'

class App extends React.Component {
  render () {
    return (
      <div className="ui container">
        <header className="App-header">

          <h1 className="App-title">Welcome to ChainBoard</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <DataRetrieval />
      </div>
    )
  }
}

export default App
