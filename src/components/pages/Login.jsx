import React, { useState, useEffect } from 'react'
import TextField from '../TextField'
import LoginError from '../LoginError'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
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

  const handleSumbmit = (e) => {
    e.preventDefault()
    validate()
    if (Object.keys(errors).length !== 0) return
  }

  useEffect(() => {
    validate()
  }, [data])

  return (
    <div class='person'>
      <div class='person__container'>
        <div class='person__header'>
          <div class='person-title'>Вход в кабинет покупателя</div>
        </div>
        <form
          class='person__auth'
          onSubmit={handleSumbmit}
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
            <a
              href='/'
              type='button'
              class='auth-link'
            >
              Восстановить пароль
            </a>
            <a
              href='/'
              type='button'
              class='auth-link'
            >
              Зарегистрироваться
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
