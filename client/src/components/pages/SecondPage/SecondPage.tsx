import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../../../hooks/useWindowSize'
import MainDescription from '../../shared/MainDescription'
import ImgDesktop from './images/ImgDesktop.png'
import ImgMobile from './images/ImgMobile.png'

import './SecondPage.scss'

const SecondPage = () => {
  const { width } = useWindowSize()

  return (
    <section className='second-page section'>
      <MainDescription
        title='Recognize trees, weeds, grass, and flowers around the world'
        subtitle='Discover the amazing nature with PLNT and never miss its miracles'
      />
      <Link
        className='button'
        to='/step-3'
      >
        Continue
      </Link>
      <img
        className='second-page__illustration'
        src={width && width > 767 ? ImgDesktop : ImgMobile}
        alt='img'
      />
    </section>)
}

export default SecondPage
