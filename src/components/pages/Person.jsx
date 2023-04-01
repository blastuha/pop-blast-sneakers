import React, { useState } from 'react'

const Person = () => {
  return (
    <div class='person'>
      <div class='person__container'>
        <div class='person__header'>
          <div class='person-title'>Вход в кабинет покупателя</div>
        </div>
        <form className='person__auth'>
          <label htmlFor='email'>Телефон или электронная почта</label>
          <input type='text' />
          <label htmlFor='password'>Пароль</label>
        </form>
      </div>
    </div>
  )
}

export default Person
