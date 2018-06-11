import React from 'react'

import './Question.css'

import ButtonBig from '../ButtonBig/ButtonBig'

export default class Question extends React.PureComponent {
  constructor (props) {
    super()

    this.question = props.question
    this.buttons = props.buttons

    this.state = {
      active: -1,
      value: ''
    }
  }

  getValue () {
    return this.state
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
