//! Разделить стили Login / AuthForm из файла login
import React, { useState, useEffect } from 'react'

import { Outlet, useLocation } from 'react-router-dom'

const authTitles = [
  { path: '/auth', title: 'Вход в кабинет покупателя' },
  { path: '/auth/forget', title: 'Восстановление пароля' },
  { path: '/auth/registration', title: 'Регистрация' },
]

const AuthenticationPage = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const validate = () => {
    const errors = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errors[fieldName] = `${fieldName} обязателен для заполнения`
      }
    }
    setErrors(errors)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate()
    if (Object.keys(errors).length !== 0) return
    console.log(data.email, data.password)
  }

  useEffect(() => {
    validate()
  }, [data])

  let location = useLocation()

  const dynamicTitle = () => {
    return authTitles.map((obj) => {
      if (location.pathname === obj.path) {
        return <span>{obj.title}</span>
      } else {
        return ''
      }
    })
  }

  return (
    <div class='person'>
      <div class='person__container'>
        <div class='person__header'>
          <div class='person-title'>{dynamicTitle()}</div>
        </div>
        <Outlet context={[data, errors, handleChange, handleSubmit]} />
      </div>
    </div>
  )
}

export default AuthenticationPage
