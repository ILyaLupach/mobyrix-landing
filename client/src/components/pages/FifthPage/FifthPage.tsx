import React from 'react'
import { Link } from 'react-router-dom'
import MainDescription from '../../shared/MainDescription'
import IllustrationImg from './images/Illustr.png'

import './FifthPage.scss'

const FifthPage = () => {
  return (
    <section className='fifth-page section'>
      <MainDescription
        title='Follow plant care tips and daily tasks'
        subtitle='Always stay on top of your gardening routine to keep your green friends happy and healthy'
      />
      <Link
        className='button'
        to='/step-6'
      >
        Continue
      </Link>
      <div className='fifth-page__illustration-wrapper'>
      <img
        className='fifth-page__illustration'
        src={IllustrationImg}
        alt='img'
      />
      </div>
    </section>)
}

export default FifthPage
