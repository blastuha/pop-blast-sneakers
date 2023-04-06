import React, { useState } from 'react'

import TextField from '../TextField'

const Registration = () => {
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [passwordError, setpasswordError] = useState(
    'Email не может быть пустым'
  )
  const [regData, setRegData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
    passwordDouble: '',
  })

  const handleChange = ({ target }) => {
    setRegData((prevState) => ({ ...prevState, [target.name]: target.value }))
    console.log(regData)
  }

  const passValidation = () => {}

  return (
    <form className='person__form'>
      <TextField
        label={'Фамилия и Имя'}
        name={'fullname'}
        value={regData.fullname}
        onChange={handleChange}
      />
      <TextField
        label={'Телефон'}
        name={'phone'}
        value={regData.phone}
        onChange={handleChange}
      />
      <div className='phone-example'>
        <span>Пример: +7-(999)-111-11-11</span>
      </div>
      <TextField
        label={'Email'}
        name={'email'}
        value={regData.email}
        onChange={handleChange}
      />
      <TextField
        label={'Пароль'}
        name={'password'}
        value={regData.password}
        onChange={handleChange}
      />
      <TextField
        label={'Повторите пароль'}
        name={'passwordDouble'}
        value={regData.passwordDouble}
        onChange={handleChange}
      />
    </form>
  )
}

export default Registration
