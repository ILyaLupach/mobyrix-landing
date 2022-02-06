import React, { useState } from 'react'
import { sendEmail } from '../../../api'
import MainDescription from '../../shared/MainDescription'
import { joinClasses } from '../../../utils'
import IllustrationImg from './images/Illustr.png'
import './LastPage.scss'

const LastPage = () => {

  const [{ email, error, completed, loading }, setFormState] = useState({
    email: '',
    error: '',
    completed: false,
    loading: false,
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return setError('cannot be empty')
    if (!email.includes('@')) return setError('incorrect e-mail address')

    const res = await sendEmail(email)
    setCompleted(res.ok)
  }

  const setInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    !loading && setFormState({
      error: '',
      completed: false,
      loading: false,
      email: e.target.value,
    })
  }

  const setError = (error: string) => {
    setFormState(state => ({ ...state, error }))
  }

  const setCompleted = (completed: boolean) => {
    setFormState(state => ({ ...state, completed }))
  }

  return (
    <section className='last-page section'>
      <MainDescription
        title='Just one more step'
        subtitle='to nature exploration, gardening, and more!'
      />
      <div className='last-page__description'>
        See the quiz results and get access to your personal plan
      </div>
      <div className='last-page__form-title'>
        Let's create PLNT account
      </div>
      <form onSubmit={onSubmit} className='last-page__form'>
        <label className='last-page__form-input-label'>
          Email address
          <input
            className={joinClasses([
              'last-page__form-input',
              error && 'last-page__form-input_error',
              completed && 'last-page__form-input_completed',
            ])}
            type='text'
            value={email}
            onChange={setInputValue}
            placeholder='example@mail.com'
          />
        </label>
        <button className='button' disabled={completed || loading}>
          Create
        </button>
        {error && (
          <span className='last-page__form-error'>
            {error}
          </span>
        )}
      </form>
      <img
        className='last-page__illustration'
        src={IllustrationImg}
        alt='phone'
      />
    </section>
  )
}

export default LastPage
