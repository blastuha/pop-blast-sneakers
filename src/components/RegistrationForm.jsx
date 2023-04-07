import React, { useState } from 'react'

import DynamicForm from './DynamicForm'
import TextField from './TextField'
import FormButtons from './FormButtons'
import LoginError from './LoginError'

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const RegistrationForm = () => {
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [errors, setErrors] = useState({})
  const [regData, setRegData] = useState({
    fullname: '',
    email: '',
    password: '',
    passwordDouble: '',
  })

  const handleChange = ({ target }) => {
    setRegData((prevState) => ({ ...prevState, [target.name]: target.value }))
    // console.log(regData)

    // email: 'Email не может быть пустым',
    // password: 'Password не может быть пустым',

    if (
      !emailRe.test(String(target.value).toLowerCase()) &&
      target.value !== ''
    ) {
      setErrors({ ...errors, email: 'Email некорректен!' })
    } else if (target.value === '') {
      setErrors({ ...errors, email: 'Email не может быть пустым' })
    } else {
      setErrors({ ...errors, email: '' })
    }
  }

  const handleBlur = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
      default:
        break
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(regData)
  }

  return (
    <DynamicForm handleSubmit={handleSubmit}>
      <TextField
        label={'Фамилия и Имя'}
        name={'fullname'}
        value={regData.fullname}
        onChange={handleChange}
      />

      <TextField
        label={'Email'}
        name={'email'}
        value={regData.email}
        onChange={handleChange}
        handleBlur={handleBlur}
      />
      {/* {emailDirty && errors.email && <span>{errors.email}</span>} */}
      {emailDirty && errors.email && <LoginError errors={errors} />}

      <TextField
        label={'Пароль'}
        name={'password'}
        value={regData.password}
        onChange={handleChange}
        handleBlur={handleBlur}
      />
      {passwordDirty && errors.password && <span>{errors.password}</span>}
      <TextField
        label={'Повторите пароль'}
        name={'passwordDouble'}
        value={regData.passwordDouble}
        onChange={handleChange}
      />
      <FormButtons
        firstBtnText={'Зарегистрироваться'}
        secondBtnText={'У меня уже есть аккаунт'}
        secondBtnLink={'/auth'}
      />
    </DynamicForm>
  )
}

export default RegistrationForm
