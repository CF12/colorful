import React from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'

import './Home.css'

import { IoErlenmeyerFlask, IoAndroidColorPalette } from 'react-icons/lib/io'

import particleConfig from './particles.json'

export default class Home extends React.Component {
  render () {
    return (
      <div className='body flex--center'>
        <div className='body__wrapper flex--center flex--column'>
          <Particles
            params={particleConfig}
            className='particles'
          />

          <p className='body__title'>colorful</p>
          <p className='body__description'>
            A colorful experiment that aims to find out how certain people react to certain color schemes
          </p>
          <p className='body__description'>
            Developed by <a href='https://github.com/cf12/'>Brian Xiang</a>
          </p>

          <div className='body__button__wrapper flex--center'>
            {/* <Link to='/' className='body__button body__button--colors flex--center flex--column'>
              <IoAndroidColorPalette size={64} />
              <p className='body__button__text'>Browse Palettes</p>
            </Link> */}

            <Link to='experiment' className='body__button body__button--experiment flex--center flex--column'>
              <IoErlenmeyerFlask size={64} />
              <p className='body__button__text'>Do the Experiment</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
