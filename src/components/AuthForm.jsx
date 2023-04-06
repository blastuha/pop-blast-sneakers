import React from 'react'

import { Link, useOutletContext } from 'react-router-dom'

import TextField from './TextField'
import LoginError from './LoginError'

const AuthForm = () => {
  const [data, errors, handleChange, handleSubmit] = useOutletContext()

  return (
    <form
      class='person__form'
      onSubmit={handleSubmit}
    >
      <LoginError errors={errors} />
      <TextField
        label={'Email'}
        name={'email'}
        value={data.email}
        onChange={handleChange}
        errors={errors}
      />
      <TextField
        label={'Пароль'}
        type={'password'}
        name={'password'}
        value={data.password}
        onChange={handleChange}
        errors={errors}
      />
      <div class='auth-buttons'>
        <button
          type='submit'
          class='auth-btn enter'
        >
          Войти
        </button>
        <Link
          to='forget'
          type='button'
          class='auth-link'
        >
          Восстановить пароль
        </Link>
        <Link
          to='registration'
          type='button'
          class='auth-link'
        >
          Зарегистрироваться
        </Link>
      </div>
    </form>
  )
}

export default AuthForm
