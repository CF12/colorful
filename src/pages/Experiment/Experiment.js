import React from 'react'

import './Experiment.css'

const StateContext = new React.createContext()

class Question1 extends React.PureComponent {
  render (props) {
    return (
      <div>
        <p>What's your gender?</p>
        <StateContext.Consumer>
          { state => <button onClick={() => { state.setQuestion(2) }}>Hello!</button> }
        </StateContext.Consumer>
      </div>
    )
  }
}

class Question2 extends React.PureComponent {
  render () {
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
      question: 1,
      setQuestion: (value) => this.setState({ question: value })
    }
  }

  render (props) {
    return (
      <div className='experiment flex--center'>
        <div className='experiment__wrapper flex--center'>
          <StateContext.Provider value={this.state}>
            <Question1 />
            <StateContext.Consumer>
              { state => <p> {state.question} </p> }
            </StateContext.Consumer>
          </StateContext.Provider>
        </div>
      </div>
    )
  }
}
