import React from 'react'

import './ButtonBig.css'

export default class ButtonBig extends React.PureComponent {
  constructor (props) {
    super()

    this.buttonKey = props.buttonKey
    this.text = props.text
    this.iconName = props.iconName
    this.handler = props.handler
    this.valueKey = props.valueKey
    this.value = props.value
    this.active = props.active

    this.icon = require(`react-icons/lib/fa/${this.iconName || 'question'}`)
  }

  componentWillReceiveProps (newProps) {
    this.active = newProps.active
  }

  render () {
    return (
      <div
        className={'flex--center flex--column button--big ' + (this.active ? 'button--big__active' : '')}
        onClick={() => { this.handler(this.buttonKey, this.value) }}>
        <p>{this.text}</p>
        <this.icon size={80} />
      </div>
    )
  }
}
