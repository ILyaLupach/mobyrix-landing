import React from 'react'
import { Link } from 'react-router-dom'
import useWindowSize from '../../../hooks/useWindowSize'
import MainDescription from '../../shared/MainDescription'
import CatImg from './images/ImgCat.png'
import CatImgMobile from './images/ImgCat-mobile.png'


import './ThirdPage.scss'

const ThirdPage = () => {
  const { width } = useWindowSize()

  return (
    <section className='third-page section'>
      <MainDescription
        title='Learn whether your plant is toxic to pets or causes allergy'
        subtitle='Grow your garden wisely and stay away from plants that are harmful to health'
      />
      <Link
        className='button'
        to='/step-4'
      >
        Continue
      </Link>
      <img
        className='third-page__illustration'
        src={width && width > 767 ? CatImg : CatImgMobile}
        alt='img'
      />

    </section>)
}

export default ThirdPage
