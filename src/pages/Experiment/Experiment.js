import React from 'react'

import './Experiment.css'

const StateContext = new React.createContext(this.state)

class Question1 extends React.PureComponent {
  render () {
    return (
      <div>
        <p>What's your gender?</p>
        <StateContext.Consumer>
          <button onClick={() => { this }}
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
        <StateContext.Provider>
          { questions[this.state.question] }
        </StateContext.Provider>
      </div>
    )
  }
}
