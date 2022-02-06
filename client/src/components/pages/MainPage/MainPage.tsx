import React from 'react'
import { Link } from 'react-router-dom'
import MainDescription from '../../shared/MainDescription'
import PhoneImage from './images/Phone.svg'
import './MainPage.scss'

const MainPage = () => {
  return (
    <section className='main-page section'>
      <MainDescription
        title='Instantly identify any plant with high accuracy'
        subtitle='Easily scan any plants and get immediate information about them'
      />
      <Link
        className='button'
        to='/step-2'
      >
        Get Started
      </Link>
      <img
        className='main-page__illustration'
        src={PhoneImage}
        alt='phone'
      />
    </section>
  )
}

export default MainPage
