//! Разделить стили Login / AuthForm из файла login
import React from 'react'

import { Outlet, useLocation } from 'react-router-dom'

const authTitles = [
  { path: '/auth', title: 'Вход в кабинет покупателя' },
  { path: '/auth/forget', title: 'Восстановление пароля' },
  { path: '/auth/registration', title: 'Регистрация' },
]

const AuthenticationPage = () => {
  let location = useLocation()

  const dynamicTitle = () => {
    return authTitles.map((obj) => {
      if (location.pathname === obj.path) {
        return <span key={obj.title}>{obj.title}</span>
      } else {
        return ''
      }
    })
  }

  return (
    <div class='person'>
      <div class='person__container'>
        <div class='person__header'>
          <span class='person-title'>{dynamicTitle()}</span>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default AuthenticationPage
