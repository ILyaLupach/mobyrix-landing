import { IEmailItem } from '../types'

export const sendEmail = async (email: string) => {
  const body = {
    email,
    date: Date.now(),
  }

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }

  console.log(requestOptions)

  return await fetch('/api', requestOptions)
}

export const getAllList = async (): Promise<IEmailItem[]> => {
  const requestOptions = {
    method: 'GET',
  }

  return await fetch('/api', requestOptions)
    .then(response => response.json())
}
