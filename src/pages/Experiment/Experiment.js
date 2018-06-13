import React from 'react'
import { Link } from 'react-router-dom'

import './Experiment.css'

import { FaAngleDoubleRight, FaAngleDoubleLeft } from 'react-icons/lib/fa'

import Question from './Question/Question'

const StateContext = React.createContext()

const _ = require('lodash')

export default class Experiment extends React.PureComponent {
  constructor () {
    super()

    const getQuestionState = (id) => {
      return this.state.questions[id]
    }

    const setQuestionState = (id, state) => {
      this.setState(_.merge(this.state, {
        questions: {
          [id]: state
        }
      }))
    }

    this.nextQuestion = (value) => this.setState({
      question: (this.state.question + 1 in questionData)
        ? this.state.question + 1
        : this.state.question
    })

    this.prevQuestion = (value) => this.setState({
      question: (this.state.question - 1 in questionData)
        ? this.state.question - 1
        : this.state.question
    })

    let questions = {}

    for (const key in questionData) {
      const data = questionData[key]

      questions[key] = {
        value: '',
        active: -1,
        field: data.field,
        component: <Question
          key={key}
          id={key}
          question={data.question}
          buttons={data.buttons}
          stateUpdater={setQuestionState}
          stateGetter={getQuestionState}
        />
      }
    }

    this.state = {
      question: 1,
      questions: questions
    }
  }

  getData () {
    let res = {}

    for (const entry of _.values(this.state.questions)) {
      res[entry.field] = entry.value
    }

    return res
  }

  render () {
    return (
      <StateContext.Provider value={this.state}>
        <div className='experiment flex--center'>
          <div className='experiment__wrapper flex--center'>

            { this.state.questions[this.state.question].component }

            <div
              className='experiment__button experiment__button--left experiment__button--blue flex--center'
              onClick={this.prevQuestion}>
              <FaAngleDoubleLeft size={32} />
              <p>Back</p>
            </div>

            {
              (this.state.question === _.keys(questionData).length)
                ? <Link to={{ pathname: '/demo', state: JSON.stringify(this.getData()) }}>
                  <div
                    className='experiment__button experiment__button--right experiment__button--green flex--center'
                    onClick={this.nextQuestion}>
                    <p>Submit</p>
                    <FaAngleDoubleRight size={32} />
                  </div>
                </Link>
                : <div className='experiment__button experiment__button--right experiment__button--blue flex--center'
                  onClick={this.nextQuestion}>
                  <p>Next</p>
                  <FaAngleDoubleRight size={32} />
                </div>
            }

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
        iconName: 'question'
      }
    ]},
  2: {
    question: 'Are you a morning, or an evening person?',
    field: 'timeOfDay',
    buttons: [
      {
        text: 'Morning',
        value: 'morning',
        iconName: 'sun-o'
      },
      {
        text: 'Evening',
        value: 'evening',
        iconName: 'moon-o'
      }
    ]},
  3: {
    question: 'What\'s your favorite season?',
    field: 'favSeason',
    buttons: [
      {
        text: 'Summer',
        value: 'summer',
        iconName: 'sun-o'
      },
      {
        text: 'Spring',
        value: 'spring',
        iconName: 'pagelines'
      },
      {
        text: 'Fall',
        value: 'fall',
        iconName: 'leaf'
      },
      {
        text: 'Winter',
        value: 'winter',
        iconName: ''
      }
    ]}
}
