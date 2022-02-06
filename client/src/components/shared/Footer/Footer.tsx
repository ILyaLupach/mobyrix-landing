import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <Link className='footer__link' to='/'>Privacy Policy</Link>
      <Link className='footer__link footer__link_bordered' to='/'>Support</Link>
      <Link className='footer__link' to='/'>Terms of use</Link>
    </footer>
  )
}

export default Footer
