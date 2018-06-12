import React from 'react'

import './Demo.css'

// TODO: https://stackoverflow.com/questions/45598854/passing-props-through-react-router-v4-link/45599159

export default class Demo extends React.PureComponent {
  constructor () {
    super()

    this.state = {
      colors: {
        primary: '#FFFFFF',
        secondary: '#000000',
        tertiary: '#4A4A4A',
        primary2: '#F0F0F0',
        secondary2: '#565656'
      }
    }
  }

  render () {
    return (
      <div>
        <div className='demo__navbar' style={{ backgroundColor: this.state.colors.tertiary }} />
        <div className='demo__sidebar' style={{ backgroundColor: this.state.colors.primary2 }}>
        
        </div>
        
        <p>How does this look?</p>

      </div>
    )
  }
}