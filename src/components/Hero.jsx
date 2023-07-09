import React from 'react';
import './Hero.css';
import cycle from '../assets/black-cycle.jpg'

const Hero = () => {
  return (
    <div className='main'>
      <div><img src={cycle}/> </div>
      <div className='hero'>We build the fastest bikes, fastest as possible.</div>


    </div>
  )
}

export default Hero