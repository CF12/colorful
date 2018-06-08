import React from 'react'

import './Experiment.css'

const StateContext = new React.createContext()

class Question1 extends React.PureComponent {
  render () {
    return (
      <div>
        <p>What's your gender?</p>
        <StateContext.Consumer>
          <button onClick={(question) => { question = 2 }}>Test</button>
        </StateContext.Consumer>
      </div>
    )
  }
}

class Question2 extends React.PureComponent {
  render() {
    return (
      <p>What's your favorite color?</p>
    )
  }
}

const questions = {
  1: <Question1 />,
  2: <Question2 />
}

export default class Experiment extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      question: 1
    }
  }

  render () {
    return (
      <div>
        <StateContext.Provider value={this.state}>
          <Question1 />
        </StateContext.Provider>
      </div>
    )
  }
}
