import React, { useEffect, useState } from 'react'
import { getAllList } from '../../../api'
import useMountedStatus from '../../../hooks/useMountedStatus'
import { IEmailItem } from '../../../types'
import Preloader from '../../shared/Preloader'
import './AdminPage.scss'

const AdminPage = () => {
  const [emailsList, setEmailList] = useState<IEmailItem[]>([])
  const [loading, setLoading] = useState(true)

  const isMounted = useMountedStatus()

  useEffect(() => {
    getEmailList()
  }, [])

  const getEmailList = async () => {
    setLoading(true)
    try {
      const list = await getAllList()
      if (list && isMounted.current) {
        setEmailList(list)
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const formatNumber = (d: number) => ('0' + d).slice(-2);

  const formatDate = (date: Date) => {
    const currentDate = new Date(date)
    const hours = formatNumber(currentDate.getHours())
    const minutes = formatNumber(currentDate.getMinutes())
    const day = formatNumber(currentDate.getDate())
    const month = formatNumber(currentDate.getMonth())
    const year = formatNumber(currentDate.getFullYear())
    return `${hours}:${minutes} - ${day}/${month}/${year}`
  }

  return (
    <div className='admin-page section'>
      {loading
        ? <Preloader />
        : (
          <ul className='admin-page__list'>
            {emailsList.map(({ email, _id, date }) => (
              <li
                key={_id}
                className='admin-page__list-item'
              >
                <span className='admin-page__email'>
                  {email}
                </span>
                <span className='admin-page__date'>
                  {formatDate(date)}
                </span>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  )
}

export default AdminPage
