import React from 'react'
import { Link } from 'react-router-dom'
import MainDescription from '../../shared/MainDescription'
import IllustrationImg from './images/Illustr.png'

import './FourthPage.scss'

const FourthPage = () => {
  return (
    <section className='fourth-page section'>
      <MainDescription
        title='Diagnose your plant with Health Check'
        subtitle="Diagnose plant problems before it's too late and provide them with special treatment"
      />
      <Link
        className='button'
        to='/step-5'
      >
        Continue
      </Link>
      <div className='fourth-page__illustration-wrapper'>
      <img
        className='fourth-page__illustration'
        src={IllustrationImg}
        alt='img'
      />
      </div>
    </section>)
}

export default FourthPage
