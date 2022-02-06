import React from 'react'
import LogoIcon from './images/plant.svg'
import { joinClasses } from '../../../utils'
import './Header.scss'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const handleClick = () => {
    if (pathname !== '/') navigate('/')
  }

  return (
    <header className='header' onClick={handleClick}>
      <div className='header__logo-wrapper'>
        <img
          className='header__logo'
          src={LogoIcon}
          alt='logo'
        />
      </div>

      <h2 className='header__title'>
        <span>PLNT:</span> Plant & Tree Idenifier
      </h2>

    </header>
  )
}

export default Header
