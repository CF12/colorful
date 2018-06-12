import React from 'react'

import './Experiment.css'

import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/lib/fa'

import Question from './Question/Question'

const StateContext = React.createContext()

const _ = require('lodash')

export default class Experiment extends React.PureComponent {
  constructor () {
    super()

    this.questions = {}

    for (const key in questionData) {
      const data = questionData[key]

      this.questions[key] = {
        value: '',
        active: -1,
        field: data.field,
        component: <Question
          key={key}
          id={key}
          question={data.question}
          buttons={data.buttons}
          stateUpdater={this.setQuestionState}
          stateGetter={this.getQuestionState}
        />
      }
    }

    this.state = {
      question: 1,
      questions: this.questions,
      nextQuestion: (value) => this.setState({
        question: (this.state.question + 1 in questionData)
          ? this.state.question + 1
          : this.state.question
      }),
      prevQuestion: (value) => this.setState({
        question: (this.state.question - 1 in questionData)
          ? this.state.question - 1
          : this.state.question
      })
    }
  }

  getQuestionState = (id) => {
    return this.state.questions[id]
  }

  setQuestionState = (id, state) => {
    console.log(state)
    this.setState(_.merge(this.state, {
      questions: {
        [id]: state
      }
    }))

    console.log(this.state.questions[id])
  }

  render () {
    return (
      <StateContext.Provider value={this.state}>
        <div className='experiment flex--center'>
          <div className='experiment__wrapper flex--center'>

            { this.state.questions[this.state.question].component }

            <div className='experiment__button experiment__button--next flex--center' onClick={this.state.nextQuestion}>
              <p>Next</p>
              <FaAngleDoubleRight size={32} />
            </div>

            <div className='experiment__button experiment__button--prev flex--center' onClick={this.state.prevQuestion}>
              <FaAngleDoubleLeft size={32} />
              <p>Back</p>
            </div>

            <div className='experiment__counter'>
              <p> {this.state.question} / {Object.keys(questionData).length} </p>
            </div>

          </div>
        </div>
      </StateContext.Provider>
    )
  }
}

const questionData = {
  1: {
    question: 'What\'s your gender?',
    field: 'gender',
    buttons: [
      {
        text: 'Male',
        value: 'male',
        iconName: 'male'
      },
      {
        text: 'Female',
        value: 'female',
        iconName: 'female'
      },
      {
        text: 'Other / Don\'t specify',
        value: 'other',
        iconName: ''
      }
    ]},
  2: {
    question: 'Are you a morning, or an evening person?',
    field: 'timeOfDay',
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
    field: 'favSeason',
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
    field: 'favColor',
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
