import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../../../hooks/useWindowSize'
import MainDescription from '../../shared/MainDescription'
import ImgDesktop from './images/ImgDesktop.png'
import ImgMobile from './images/ImgMobile.png'

import './SixthPage.scss'

const SixthPage = () => {
  const { width } = useWindowSize()
  const isDesktop = width && width > 767
  return (
    <section className='sixth-page section'>
      <MainDescription
        title='We make plant growing look easy'
        subtitle={isDesktop
          ? 'Let’s grow a beautiful garden full of happy and healthy plants. Join other gardeners worldwide to take the best care of your green friends with ease!'
          : 'Join other gardeners worldwide to take the best care of your plants with ease!'
        }
      />
      <Link
        className='button'
        to='/step-7'
      >
        Continue
      </Link>
      <img
        className='sixth-page__illustration'
        src={isDesktop ? ImgDesktop : ImgMobile}
        alt='img'
      />
    </section>
  )
}

export default SixthPage
