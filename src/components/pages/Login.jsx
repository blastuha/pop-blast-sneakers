import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }))
    console.log(data)
  }

  return (
    <div class='person'>
      <div class='person__container'>
        <div class='person__header'>
          <div class='person-title'>Вход в кабинет покупателя</div>
        </div>
        <form class='person__auth'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            value={data.email}
            onChange={handleChange}
          />
          <label htmlFor='password'>Пароль</label>
          <input
            type='password'
            id='password'
            name='password'
            value={data.password}
            onChange={handleChange}
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
              type='submit'
              class='auth-link'
            >
              Восстановить пароль
            </a>
            <a
              href='/'
              type='submit'
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
