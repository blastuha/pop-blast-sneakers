import React, { useState } from 'react'

const Person = () => {
  return (
    <div class='person'>
      <div class='person__container'>
        <div class='person__header'>
          <div class='person-title'>Вход в кабинет покупателя</div>
        </div>
        <form class='person__auth'>
          <label htmlFor='email'>Email</label>
          <input type='email' />
          <label htmlFor='password'>Пароль</label>
          <input type='pasasword' />
          <div class='auth-buttons'>
            <button
              type='submit'
              class='auth-btn'
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

export default Person
