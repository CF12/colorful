import React from 'react'

import './Experiment.css'

const QuestionContext = new React.createContext(1)

class Question1 extends React.PureComponent {
  render () {
    return (
      <div>
        <p>What's your gender?</p>
        <QuestionContext.Consumer>
          <button onClick={(question) => { question = 2 }}>Test</button>
        </QuestionContext.Consumer>
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
        <QuestionContext.Provider>
          <QuestionContext.Consumer>
            {question => console.log(question)}
            { question => questions[question] }
          </QuestionContext.Consumer>
        </QuestionContext.Provider>
      </div>
    )
  }
}
