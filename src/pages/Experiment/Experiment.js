import React from 'react'

import './Experiment.css'

import Question from './Question/Question'

const StateContext = React.createContext()

export default class Experiment extends React.PureComponent {
  constructor () {
    super()

    this.questions = {
      1: {
        question: 'What\'s your gender?',
        buttons: [
          {
            text: 'Male',
            value: 'male',
            iconName: 'FaMale'
          },
          {
            text: 'Female',
            value: 'female',
            iconName: 'FaFemale'
          },
          {
            text: 'Other / Don\'t specify',
            value: 'other',
            iconName: ''
          }
        ]},
      2: {
        question: 'Are you a morning, or an evening person?',
        buttons: [
          {
            text: 'Morning',
            value: 'morning',
            iconName: ''
          },
          {
            text: 'Evening',
            value: 'evening',
            iconName: ''
          }
        ]},
      3: {
        question: 'What\'s your favorite season?',
        buttons: [
          {
            text: 'Summer',
            value: 'summer',
            iconName: ''
          },
          {
            text: 'Spring',
            value: 'spring',
            iconName: ''
          },
          {
            text: 'Fall',
            value: 'fall',
            iconName: ''
          },
          {
            text: 'Winter',
            value: 'winter',
            iconName: ''
          }
        ]},
      4: {
        question: 'What\'s your favorite color?',
        buttons: [
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
        ]}
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

  render () {
    console.log(this.questions)
    return (
      <div className='experiment flex--center'>
        <div className='experiment__wrapper flex--center'>
          <StateContext.Provider value={this.state}>
            <StateContext.Consumer>
              {
                state => {
                  const currentQuestion = this.questions[state.question]

                  return (
                    <div>
                      <Question
                        key={state.question}
                        question={currentQuestion.question}
                        buttons={currentQuestion.buttons}
                      />

                      <div onClick={state.nextQuestion}>Hello!</div>
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
