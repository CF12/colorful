import React from 'react'

import './Question.css'

import ButtonBig from '../ButtonBig/ButtonBig'

export default class Question extends React.Component {
  constructor (props) {
    super()

    this.id = props.id
    this.question = props.question
    this.buttons = props.buttons

    this.state = {
      active: -1,
      value: ''
    }
  }

  componentWillMount () {
    const state = this.props.stateGetter(this.props.id)

    this.setState({
      active: state.active,
      value: state.value
    })
  }

  componentWillUnmount () {
    this.props.stateUpdater(this.props.id, this.state)
  }

  clickHandler (key, value) {
    this.setState({
      active: key,
      value: value
    })
  }

  render (props) {
    return (
      <div>
        <div className='flex--center flex--column'>
          <p className='question__title'>{this.question}</p>

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
        </div>
      </div>
    )
  }
}
