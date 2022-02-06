import React from 'react'

import './MainDescription.scss'

interface IProps {
  title: string
  subtitle: string
}

const MainDescription = ({ title, subtitle }: IProps) => {
  return (
    <div className='main-description'>
      <div className='main-description__title'>{title}</div>
      <div className='main-description__subtitle'>{subtitle}</div>
    </div>
  )
}

export default MainDescription
