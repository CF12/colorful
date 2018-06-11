import React from 'react'

import './Experiment.css'

import ButtonBig from './ButtonBig/ButtonBig'

const StateContext = React.createContext()

class Question1 extends React.PureComponent {
  constructor (props) {
    super()

    this.buttons = [
      {
        text: 'Male',
        value: 'male',
        iconName: ''
      },
      {
        text: 'Female',
        value: 'female',
        iconName: ''
      },
      {
        text: 'Other / Don\'t specify',
        value: 'other',
        iconName: ''
      }
    ]

    this.state = {
      active: -1,
      gender: ''
    }
  }

  getState () {
    return this.state
  }

  clickHandler (key, value) {
    this.setState({
      active: key,
      gender: value
    })
  }

  render (props) {
    return (
      <div>
        <p>What's your gender?</p>

        <div className='flex--row'>
          {
            this.buttons.map((value, key) => {
              return <ButtonBig
                key={key}
                buttonKey={key}
                text={value.text}
                value={value.value}
                iconName={value.iconName}
                active={this.state.active === key}
                handler={(key, value) => { this.clickHandler(key, value) }}
              />
            })
          }
        </div>

        <StateContext.Consumer>
          {
            state => {
              return (
                <button onClick={state.nextQuestion}>Hello!</button>
              )
            }
          }
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

export default class Experiment extends React.PureComponent {
  constructor () {
    super()

    this.questions = {
      1: <Question1 />,
      2: <Question2 />
    }

    this.state = {
      question: 1,
      nextQuestion: (value) => this.setState({
        question: (this.state.question + 1 in this.questions)
          ? this.state.question + 1
          : this.state.question
      }),
      prevQuestion: (value) => this.setState({
        question: (this.state.question - 1 in this.questions)
          ? this.state.question - 1
          : this.state.question
      })
    }
  }

  render (props) {
    return (
      <div className='experiment flex--center'>
        <div className='experiment__wrapper flex--center'>
          <StateContext.Provider value={this.state}>
            <StateContext.Consumer>
              {
                state => {
                  return (
                    <div>
                      {this.questions[state.question]}
                      <p> {state.question} </p>
                    </div>
                  )
                }
              }
            </StateContext.Consumer>
          </StateContext.Provider>
        </div>
      </div>
    )
  }
}
