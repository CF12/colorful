import React from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-particles-js'

import './Home.css'

import { IoErlenmeyerFlask, IoAndroidColorPalette } from 'react-icons/lib/io'

export default class Home extends React.Component {
  render () {
    return (
      <div className='body flex--center flex--column'>
        <Particles
          params={particleConfig}
          className='particles'
        />

        <p className='body__title'>colorful</p>
        <p className='body__description'>A very colorful experiment.</p>
        <p className='body__description'>
          Developed by <a href='https://github.com/cf12/'>Brian Xiang</a>
        </p>

        <div className='body__button__wrapper flex--center'>
          <Link to='/' className='body__button body__button--colors flex--center flex--column'>
            <IoAndroidColorPalette size={64} />
            <p className='body__button__text'>Browse Palettes</p>
          </Link>

          <Link to='experiment' className='body__button body__button--experiment flex--center flex--column'>
            <IoErlenmeyerFlask size={64} />
            <p className='body__button__text'>Do the Experiment</p>
          </Link>
        </div>
      </div>
    )
  }
}

const particleConfig = {
  "particles": {
    "number": {
      "value": 160,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#1baeff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 4,
        "size_min": 0.3,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 600
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 250,
        "size": 0,
        "duration": 2,
        "opacity": 0,
        "speed": 3
      },
      "repulse": {
        "distance": 400,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
