import React from 'react'
import axios from 'axios'

import './Demo.css'

export default class Demo extends React.PureComponent {
  constructor (props) {
    super()

    this.state = {
      style: 'dark',
      colors: [
        '#345392',
        '#397ec3',
        '#70a8dd',
        '#8fc0e7',
        '#c7deed'
      ]
    }
  }

  componentWillMount () {
    this.fetchColors(JSON.parse(this.props.location.state))
  }

  fetchColors (query) {
    axios.post('/api/palette', query)
      .then((res) => {
        this.setState(res.data[0])
      })
  }

  render () {
    const textStyles = {
      color: (this.state.style === 'dark') ? 'white' : 'black'
    }

    return (
      <div className='demo'>
        {/* <div className='demo__navbar' style={{ backgroundColor: this.state.colors[0] }} />
        <div className='demo__sidebar' style={{ backgroundColor: this.state.colors[1] }} /> */}

        <div
          className='demo__body flex--center flex--column'
          style={{ backgroundImage: `linear-gradient(to right, ${this.state.colors[0]}, ${this.state.colors[2]})` }}>
          <p className='demo__title' style={textStyles}>How does this color scheme look?</p>

          <div className='demo__button-wrapper flex--center flex--row'>
            <div className='demo__button demo__button--1 flex--center'>
              <p>Straight garbage; trash website, 0 / 10, would never recommend.</p>
            </div>

            <div className='demo__button demo__button--2 flex--center'>
              <p>I've seen worse.</p>
            </div>

            <div className='demo__button demo__button--3 flex--center'>
              <p>I can live with it, I guess...</p>
            </div>

            <div className='demo__button demo__button--4 flex--center'>
              <p>It's pretty neato</p>
            </div>

            <div className='demo__button demo__button--5 flex--center'>
              <p>I didn't even know such perfection existed...</p>
            </div>
          </div>

          <div className='demo__demos flex--center flex--row'>
            <div
              className='demo__demo-button flex--center'
              style={{
                backgroundColor: this.state.colors[3]
              }}>
              <p style={textStyles}>This is a demo button!</p>
            </div>

            <div
              className='demo__demo-box flex--center'
              style={{
                backgroundColor: this.state.colors[4],
                border: `3px dashed ${this.state.colors[2]}`
              }}>
              <p style={textStyles}>This is a demo box!</p>
            </div>

            <div
              className='demo__demo-paragraph flex--column'
              style={{
                backgroundColor: this.state.colors[4]
              }}>
              <div
                className='demo__demo-paragraph__wrapper flex--center'
                style={{
                  backgroundColor: this.state.colors[1]
                }}>
                <p style={textStyles}>This is a demo sticky note!</p>
              </div>

              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor neque turpis. Proin faucibus magna id hendrerit cursus. Aenean ac congue turpis. Suspendisse purus nunc, mattis sed porttitor non, eleifend ac metus. Proin sed tempus odio. Suspendisse auctor lorem eu felis luctus, at dignissim est semper. Donec ornare, ante sed sollicitudin luctus, quam sem volutpat augue, nec semper ligula neque et nunc. Vivamus justo mi, lacinia sed leo eget, efficitur suscipit magna. Phasellus finibus consequat nisl quis volutpat. </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
