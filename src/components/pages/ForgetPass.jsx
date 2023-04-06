import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import TextField from '../TextField'

const ForgetPass = () => {
  const [email, setEmail] = useState('')

  const handleChange = (e) => {
    setEmail(e.target.value)
    console.log(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <form
      class='person__form'
      onSubmit={handleSubmit}
    >
      <TextField
        label={'Email'}
        name={'email'}
        value={email}
        onChange={handleChange}
      />
      <div class='auth-buttons'>
        <button
          type='submit'
          class='auth-btn enter'
        >
          Восстановить пароль
        </button>
        <Link
          to='/auth'
          type='button'
          class='auth-link'
        >
          Я вспомнил(-а) пароль
        </Link>
      </div>
    </form>
  )
}

export default ForgetPass
